
import { memo } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
// import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { formatPrice } from "utils/formater";
import "./style.scss";
import React, { useState,useEffect} from "react";
import ReactPaginate from 'react-paginate';
import productAPI from 'api/productAPI';
const HomePage = () => {
  const [featProducts, setFeatProducts] = useState({products:[]});
  useEffect(()=>{
    const fetchProducts = async () => {
       const productList = await productAPI.getAll();
       return productList;
    }
    fetchProducts().then((res)=>{
      setFeatProducts(res);
    })
  },[featProducts])
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = featProducts.products.slice(pagesVisited, pagesVisited + productsPerPage).map((item, index) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
      <div className="featured__item pl-pr-10">
        <div className="featured__item__pic set-bg" style={{backgroundImage: `url(${item.img})`}}>
          <ul className="featured__item__pic__hover">
            <li >
              <AiOutlineEye />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <Link to="">{item.name}</Link>
          </h6>
          <h5>{formatPrice(item.price)}</h5>
        </div>
      </div>
    </div>
    );
  });
  const pageCount = Math.ceil(featProducts.products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Khám phá tất cả các loại sản phẩm</h2>
          </div>
          {/* Hiển thị danh sách sản phẩm */}
          <div className="row">{displayProducts}</div>

          {/* Hiển thị phân trang */}
          <ReactPaginate
            previousLabel={"Trang trước"}
            nextLabel={"Trang sau"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </>
  );
};
export default memo(HomePage);
