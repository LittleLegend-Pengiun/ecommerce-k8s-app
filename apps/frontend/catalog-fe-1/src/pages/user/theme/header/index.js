import {memo,useState} from 'react';
import "./style.scss";
import { 
    AiOutlineFacebook, 
    AiOutlineGlobal, 
    AiOutlineInstagram, 
    AiOutlineLinkedin,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlinePhone} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatPrice } from "utils/formater"
import { ROUTERS } from "utils/router";




const Header = () => {
    const [isShowCategories,setShowCategories] = useState(true)
    const [menus] = useState([
        {
            name: "TRANG CHỦ",
            path:ROUTERS.USER.HOME,
        },
        {
            name: "SẢN PHẨM",
            path:ROUTERS.USER.PRODUCT,
        },
        {
            name: "LIÊN HỆ",
            path:ROUTERS.USER.CONTACT,
        },
        {
            name: "GIỚI THIỆU",
            path:ROUTERS.USER.ABOUT,
        }
        ,
        {
            name: "BÀI VIẾT",
            path:ROUTERS.USER.BLOG,
        }
        
        
    ])
    return (
    <div>
        <div className="header__top">
        <div className="container">
            <div className="row">
                <div className="col-6 header__top_left">
                    <ul>
                        <li>
                            <AiOutlineMail />
                            bku-shop@hcmut.edu.vn
                        </li>
                        <li>
                            Miễn phí giao hàng cho đơn hàng từ {formatPrice(200000)}
                        </li>
                    </ul> 
                </div>
                <div className="col-6 header__top_right">
                    <ul>
                        <li>
                            <Link to={""}>
                            <AiOutlineFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineGlobal />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineUser />
                            </Link>
                            <span>
                            Đăng nhập
                        </span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header__logo">
                            <h1>BKU-SHOP</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="header__menu">
                        <ul>
                            {
                                menus?.map((menu,index) => (
                                    <li key={index} className={index===0 ? "active":""}>
                                        <Link to={menu?.path}>
                                            {menu?.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="header__cart">
                        <div className="header__price__cart">
                        <span>{formatPrice(1000000)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to={""}>
                                <AiOutlineShoppingCart />
                                <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row categories__container">
                <div className="col-lg-3 categories">
                    <div className="sub__categories" onClick={() => setShowCategories(!isShowCategories)}>
                        <AiOutlineMenu/>
                        Danh sách sản phẩm
                    </div>
                    {isShowCategories && 
                    <ul className={isShowCategories ? "" : "hidden"}>
                    <li>
                        <Link to={"#"}>
                            Tất cả
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Máy tính xách tay
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Điện thoại di động
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Thiết bị âm thanh
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Linh kiện máy tính
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Thiết bị mạng
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Đồng hồ thông minh
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            Phụ kiện chung
                        </Link>
                    </li>
                </ul>}
                </div>
                <div className="col-lg-9 search__container">
                    <div className="search">
                        <div className="search__form">
                            <form>
                                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="search__phone">
                            <div className="search__phone__icon">
                                <AiOutlinePhone />
                            </div>
                            <div className="search__phone__text">
                                <p>0123 456 789</p>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                        <div className="hero-item">
                            <div className="hero-text">
                                <span>             
                                    Iphone 14 series
                                </span>
                                <h2>
                                    Nhận Voucher giảm <br/>
                                    giá đến 10%
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to={""} className="primary-btn">
                                    Mua ngay
                                </Link>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default memo(Header);