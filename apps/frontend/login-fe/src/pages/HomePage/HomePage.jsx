import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import { WrapperCategoryProduct,WrapperButtonHover, WrapperProducts,WrapperText } from "./style";
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

const HomePage = () => {
    const category = ['cate1','cate2','cate3']
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
                <CardComponent 
                    key={index}
                    productName={item.name}
                    productImg={item.img}
                    productPrice={formatPrice(item.price)}
                />
        );
    });
    const pageCount = Math.ceil(allProducts.products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
  };
    return (
        <> 
            <div style={{padding:'0 120px'}}>
                <WrapperCategoryProduct>
                {category.map((item) => {
                    return (
                    <CategoryProduct name={item} key={item}/>)
                })}
                </WrapperCategoryProduct>
            </div>
            <div id="container" style={{backgroundColor:'#efefef',padding:'0 120px',height:'auto'}}>
                <SliderComponent arrImages={[slider1,slider2,slider3]}/>
            
                {/* <div style={{ display:'flex',justifyContent:'center',width:'100%',marginTop:'10px'}}>
                    <WrapperButtonHover 
                        textbutton="Xem thêm" 
                        type="outline" 
                        styleButton=
                        {
                            {
                                border:'1px solid #008874',
                                color:'#008874',
                                width:'240px',
                                height:'40px',
                                borderRadius:'4px',
                            }
                        } 
                        styleTextButton={
                            {
                                fontWeight:500,
                                fontSize:'16px',
                            }
                    }>

                    </WrapperButtonHover>
                </div> */}
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