import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import { WrapperCategoryProduct,WrapperButtonHover, WrapperProducts } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
// import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import slider1 from "../../assets/images/slider/slider1.png";
import slider2 from "../../assets/images/slider/slider2.png";
import slider3 from "../../assets/images/slider/slider3.png";
// import ButtonComponent from './../../../../product-detail-fe/src/components/ButtonComponent/ButtonComponent';
const HomePage = () => {
    const category = ['cate1','cate2','cate3']
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
            <div id="container" style={{backgroundColor:'#efefef',padding:'0 120px',height:'3000px'}}>
                <SliderComponent arrImages={[slider1,slider2,slider3]}/>
            
                <WrapperProducts >
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </WrapperProducts>
                <div style={{ display:'flex',justifyContent:'center',width:'100%',marginTop:'10px'}}>
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
                </div>
            </div>
        </>
    )
}
export default HomePage;