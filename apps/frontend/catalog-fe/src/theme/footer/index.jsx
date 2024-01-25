import {memo} from 'react';
import "./style.scss";
import Link from './Link'
import { AiOutlineLinkedin,AiOutlineFacebook,AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
    <div>
        <footer className="Footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer__about">
                        <h1 className="footer__about__logo">BKU-SHOP</h1>
                        <ul>
                            <li>Địa chỉ: 268 Lý Thường Kiệt</li>
                            <li>Điện thoại: 0123 456 789</li>
                            <li>Email: bku-shop@hcmut.edu.vn</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer__widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                                <Link to={""}>
                                    Liên hệ
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Thông tin về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Sản phẩm kinh doanh
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={""}>
                                    Thông tin tài khoản
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Giỏ hàng
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    Danh sách yêu thích
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="footer__widget">
                        <h6>Khuyến mãi & ưu đãi</h6>
                        <p>Đăng ký nhận thông tin tại đây</p>
                        <form action="#">
                            <div>
                                <div className="input-group">
                                    <input type="text" placeholder="Nhập email của bạn" />
                                    <button type="submit" className="button-submit">Đăng ký</button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                        <AiOutlineFacebook/>
                                    </div>
                                    <div>
                                        <AiOutlineInstagram/>
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </footer>;
    </div>
    );
}

export default memo(Footer);