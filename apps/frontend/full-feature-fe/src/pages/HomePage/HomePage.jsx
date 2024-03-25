import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import {  WrapperProducts,
        WrapperText,
        WrapperColCategory,
        WrapperSlider,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import slider1 from "../../assets/images/slider/slider1.png";
import slider2 from "../../assets/images/slider/slider2.png";
import slider3 from "../../assets/images/slider/slider3.png";
import { useState,useEffect } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './style.scss'
import { formatPrice } from '../../formater/formater'
import {Link} from 'react-router-dom';
// import { LineOutlined } from "@ant-design/icons";
const HomePage = () => {
    const category = ['Tất cả sản phẩm','Điện thoại','Laptop','Máy ảnh','Phụ kiện','Đồng hồ'];
    const [allProducts, setAllProducts] = useState({products:[]})
    useEffect(() => {
      const fetchData = async () =>{
        // setLoading(true);
        try {
        const res = await axios.get(`${process.env.REACT_APP_CATALOG_MS_1_URL}/products`);
          const response = res.data;
          setAllProducts(response);
        } catch (error) {
          console.error(error.message);
        }
        // setLoading(false);
      }
  
      fetchData();
    }, []);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;
    const displayProducts = allProducts.products.slice(pagesVisited, pagesVisited + productsPerPage).map((item,index) => {
        return (
                <Link to={`/product-detail/${item.productId}`} key={index} style={{textDecoration:'none'}}>
                    <CardComponent 
                    key={index}
                    productName={item.productName}
                    productImg={item.imageUrl}
                    productPrice={formatPrice(item.price)}
                    />
                </Link>
        );
    });
    const pageCount = Math.ceil(allProducts.products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
  };
    return (
        <> 
            <div id="container" style={{backgroundColor:'#efefef',padding:'0 120px',height:'auto'}}>
                <div style={{display:'flex'}}>
                    <WrapperColCategory>
                        <div className="category" style={{backgroundColor:'white',padding:'10px'}}>
                            <h1 style={{margin:0,color:'black'}}>Danh mục sản phẩm</h1>
                            {category.map((item,index) => {
                                return <CategoryProduct key={index} categoryName={item}/>
                            })}

                        </div>
                    </WrapperColCategory>
                    <WrapperSlider>
                        <SliderComponent arrImages={[slider1,slider2,slider3]}/>
                    </WrapperSlider>                    
                </div>       
                <div>
                    <WrapperText>Khám phá sản phẩm của chúng tôi</WrapperText>
                    <WrapperProducts>
                        {displayProducts}
                    </WrapperProducts>
                </div>
                <div>
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
    )
               
}
export default HomePage;