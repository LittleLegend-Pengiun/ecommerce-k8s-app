// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import Carousel from "react-multi-carousel";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatPrice } from "utils/formater";
import "./style.scss";
import React, { useState,useEffect,memo} from "react";
import ReactPaginate from 'react-paginate';
import axios from 'axios';
const HomePage = () => {
  // const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState({products:[]})

  useEffect(() => {
    const fetchData = async () =>{
      // setLoading(true);
      try {
        const {data: response} = await axios.get('http://127.0.0.1:4000/products');
        setAllProducts(response);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
    }

    fetchData();
  }, []);
  console.log(allProducts);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = allProducts.products.slice(pagesVisited, pagesVisited + productsPerPage).map((item, index) => {
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
  const pageCount = Math.ceil(allProducts.products.length / productsPerPage);

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
          <div className="row">{displayProducts}</div>
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
