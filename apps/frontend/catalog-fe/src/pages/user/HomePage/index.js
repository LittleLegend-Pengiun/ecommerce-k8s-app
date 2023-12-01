
import feature1Img from "assets/user/images/featured/laptop-1.jpg";
import feature2Img from "assets/user/images/featured/laptop-2.jpg";
import feature3Img from "assets/user/images/featured/laptop-3.jpg";
import feature4Img from "assets/user/images/featured/laptop-4.jpg";
import feature5Img from "assets/user/images/featured/laptop-5.jpg";
import feature6Img from "assets/user/images/featured/laptop-6.jpg";
import feature7Img from "assets/user/images/featured/phone-1.jpg";
import feature8Img from "assets/user/images/featured/phone-2.jpg";
import feature9Img from "assets/user/images/featured/phone-3.jpg";
import feature10Img from "assets/user/images/featured/phone-4.jpg";
import feature11Img from "assets/user/images/featured/phone-5.jpg";
import feature12Img from "assets/user/images/featured/audio-1.jpg";
import feature13Img from "assets/user/images/featured/audio-2.jpg";
import feature14Img from "assets/user/images/featured/audio-3.jpg";
import feature15Img from "assets/user/images/featured/audio-4.jpg";
import feature16Img from "assets/user/images/featured/audio-5.jpg";
import feature17Img from "assets/user/images/featured/audio-6.jpg";


import { memo } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
// import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { formatPrice } from "utils/formater";
import "./style.scss";

const HomePage = () => {
  const featProducts = {
    all: {
      title: "Tất cả",
      products: [
        {
          img: feature1Img,
          name: "Laptop HP ProBook",
          price: 21990000,
        },
        {
          img: feature2Img,
          name: "Laptop MSI Morden",
          price: 17490000,
        },
        {
          img: feature3Img,
          name: "Laptop Lenovo LOQ",
          price: 26190000,
        },
        {
          img: feature4Img,
          name: "Laptop Dell Inspiron",
          price: 18590000,
        },
        {
          img: feature5Img,
          name: "Laptop HP Pavilion",
          price: 26490000,
        },
        {
          img: feature6Img,
          name: "Laptop Acer Aspire",
          price: 16990000,
        },
        {
          img: feature7Img,
          name: "Iphone 14 Pro Max",
          price: 24990000,
        },
        {
          img: feature8Img,
          name: "Samsung Galaxy A05",
          price: 2990000,
        },
        {
          img: feature9Img,
          name: "Iphone Galaxy A05s",
          price: 3790000,
        },
        {
          img: feature10Img,
          name: "Samsung Galaxy M34",
          price: 7190000,
        },
        {
          img: feature11Img,
          name: "Iphone 15 Pro Max",
          price: 38990000,
        },
        {
          img: feature12Img,
          name: "Tai nghe không dây JBL",
          price: 2490000,
        },
        {
          img: feature13Img,
          name: "Tai nghe Bluetooth SoundPeats",
          price: 879000,
        },
        {
          img: feature14Img,
          name: "Loa Karaoke YS-119 SUYOSD",
          price: 899000,
        },
        {
          img: feature15Img,
          name: "Tai nghe DAREU EH406",
          price: 299000,
        },
        {
          img: feature16Img,
          name: "Loa SoundBar LG SN4R 4.1",
          price: 1590000,
        },
        {
          img: feature17Img,
          name: "Tai nghe USB Logitech H390",
          price: 699000,
        },
      ],
    },
    LapTop: {
      title: "Máy tính xách tay",
      products: [
        {
          img: feature1Img,
          name: "Laptop HP ProBook",
          price: 21990000,
        },
        {
          img: feature2Img,
          name: "Laptop MSI Morden",
          price: 17490000,
        },
        {
          img: feature3Img,
          name: "Laptop Lenovo LOQ",
          price: 26190000,
        },
        {
          img: feature4Img,
          name: "Laptop Dell Inspiron",
          price: 18590000,
        },
        {
          img: feature5Img,
          name: "Laptop HP Pavilion",
          price: 26490000,
        },
        {
          img: feature6Img,
          name: "Laptop Acer Aspire",
          price: 16990000,
        },
      ],
    },
    Phone: {
      title: "Điện thoại di động",
      products: [
        {
          img: feature7Img,
          name: "Iphone 14 Pro Max",
          price: 24990000,
        },
        {
          img: feature8Img,
          name: "Samsung Galaxy A05",
          price: 2990000,
        },
        {
          img: feature9Img,
          name: "Iphone Galaxy A05s",
          price: 3790000,
        },
        {
          img: feature10Img,
          name: "Samsung Galaxy M34",
          price: 7190000,
        },
        {
          img: feature11Img,
          name: "Iphone 15 Pro Max",
          price: 38990000,
        },
      ],
    },
    Audio: {
      title: "Thiết bị âm thanh",
      products: [
        {
          img: feature12Img,
          name: "Tai nghe không dây JBL",
          price: 2490000,
        },
        {
          img: feature13Img,
          name: "Tai nghe Bluetooth SoundPeats",
          price: 879000,
        },
        {
          img: feature14Img,
          name: "Loa Karaoke YS-119 SUYOSD",
          price: 899000,
        },
        {
          img: feature15Img,
          name: "Tai nghe DAREU EH406",
          price: 299000,
        },
        {
          img: feature16Img,
          name: "Loa SoundBar LG SN4R 4.1",
          price: 1590000,
        },
        {
          img: feature17Img,
          name: "Tai nghe USB Logitech H390",
          price: 699000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, index) => {
        tabPanel.push(
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
            <div className="featured__item pl-pr-10">
              <div
                className="featured__item__pic set-bg"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
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

      tabPanels.push(tabPanel);
    });

    return (
      <Tabs defaultChecked={1}>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, index) => (
          <TabPanel key={index}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  
  return (
    <>
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Khám phá tất cả các loại sản phẩm</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
