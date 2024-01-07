
// // Laptop
// import feature1Img from "assets/user/images/featured/laptop-1.jpg";
// import feature2Img from "assets/user/images/featured/laptop-2.jpg";
// import feature3Img from "assets/user/images/featured/laptop-3.jpg";
// import feature4Img from "assets/user/images/featured/laptop-4.jpg";
// import feature5Img from "assets/user/images/featured/laptop-5.jpg";
// import feature6Img from "assets/user/images/featured/laptop-6.jpg";
// import feature18Img from "assets/user/images/featured/laptop-7.jpg";
// import feature19Img from "assets/user/images/featured/laptop-8.jpg";
// import feature20Img from "assets/user/images/featured/laptop-9.jpg";
// import feature21Img from "assets/user/images/featured/laptop-10.jpg";
// import feature22Img from "assets/user/images/featured/laptop-11.jpg";
// import feature23Img from "assets/user/images/featured/laptop-12.jpg";
// import feature24Img from "assets/user/images/featured/laptop-13.jpg";
// import feature25Img from "assets/user/images/featured/laptop-14.jpg";
// import feature26Img from "assets/user/images/featured/laptop-15.jpg";
// // Phone
// import feature7Img from "assets/user/images/featured/phone-1.jpg";
// import feature8Img from "assets/user/images/featured/phone-2.jpg";
// import feature9Img from "assets/user/images/featured/phone-3.jpg";
// import feature10Img from "assets/user/images/featured/phone-4.jpg";
// import feature11Img from "assets/user/images/featured/phone-5.jpg";
// import feature27Img from "assets/user/images/featured/phone-6.jpg";
// import feature28Img from "assets/user/images/featured/phone-7.jpg";
// import feature29Img from "assets/user/images/featured/phone-8.jpg";
// import feature30Img from "assets/user/images/featured/phone-9.jpg";
// import feature31Img from "assets/user/images/featured/phone-10.jpg";
// import feature32Img from "assets/user/images/featured/phone-11.jpg";
// import feature33Img from "assets/user/images/featured/phone-12.jpg";
// import feature34Img from "assets/user/images/featured/phone-13.jpg";
// import feature35Img from "assets/user/images/featured/phone-14.jpg";
// // Audio
// import feature12Img from "assets/user/images/featured/audio-1.jpg";
// import feature13Img from "assets/user/images/featured/audio-2.jpg";
// import feature14Img from "assets/user/images/featured/audio-3.jpg";
// import feature15Img from "assets/user/images/featured/audio-4.jpg";
// import feature16Img from "assets/user/images/featured/audio-5.jpg";
// import feature17Img from "assets/user/images/featured/audio-6.jpg";
// import feature36Img from "assets/user/images/featured/audio-7.jpg";
// import feature37Img from "assets/user/images/featured/audio-8.jpg";
// import feature38Img from "assets/user/images/featured/audio-9.jpg";
// import feature39Img from "assets/user/images/featured/audio-10.jpg";
// import feature40Img from "assets/user/images/featured/audio-11.jpg";
// import feature41Img from "assets/user/images/featured/audio-12.jpg";
// import feature42Img from "assets/user/images/featured/audio-13.jpg";
// // Watch
// import feature43Img from "assets/user/images/featured/watch-1.jpg";
// import feature44Img from "assets/user/images/featured/watch-2.jpg";
// import feature45Img from "assets/user/images/featured/watch-3.jpg";
// import feature46Img from "assets/user/images/featured/watch-4.jpg";
// import feature47Img from "assets/user/images/featured/watch-5.jpg";
// import feature48Img from "assets/user/images/featured/watch-6.jpg";
// import feature49Img from "assets/user/images/featured/watch-7.jpg";
// import feature50Img from "assets/user/images/featured/watch-8.jpg";
// import feature51Img from "assets/user/images/featured/watch-9.jpg";
// import feature52Img from "assets/user/images/featured/watch-10.jpg";
// // Component
// import feature53Img from "assets/user/images/featured/component-1.jpg";
// import feature54Img from "assets/user/images/featured/component-2.jpg";
// import feature55Img from "assets/user/images/featured/component-3.jpg";
// import feature56Img from "assets/user/images/featured/component-4.jpg";
// import feature57Img from "assets/user/images/featured/component-5.jpg";
// import feature58Img from "assets/user/images/featured/component-6.jpg";
// import feature59Img from "assets/user/images/featured/component-7.jpg";
// import feature60Img from "assets/user/images/featured/component-8.jpg";
// import feature61Img from "assets/user/images/featured/component-9.jpg";
// import feature62Img from "assets/user/images/featured/component-10.jpg";
// import feature63Img from "assets/user/images/featured/component-11.jpg";
// //Internet
// import feature64Img from "assets/user/images/featured/internet-1.jpg";
// import feature65Img from "assets/user/images/featured/internet-2.jpg";
// import feature66Img from "assets/user/images/featured/internet-3.jpg";
// import feature67Img from "assets/user/images/featured/internet-4.jpg";
// import feature68Img from "assets/user/images/featured/internet-5.jpg";
//
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
  // const featProducts =  {
  //     title: "Tất cả",
  //     products: [
  //       {
  //         img: feature1Img,
  //         name: "Laptop HP ProBook",
  //         price: 21990000,
  //       },
  //       {
  //         img: feature2Img,
  //         name: "Laptop MSI Morden",
  //         price: 17490000,
  //       },
  //       {
  //         img: feature3Img,
  //         name: "Laptop Lenovo LOQ",
  //         price: 26190000,
  //       },
  //       {
  //         img: feature4Img,
  //         name: "Laptop Dell Inspiron",
  //         price: 18590000,
  //       },
  //       {
  //         img: feature5Img,
  //         name: "Laptop HP Pavilion",
  //         price: 26490000,
  //       },
  //       {
  //         img: feature6Img,
  //         name: "Laptop Acer Aspire",
  //         price: 16990000,
  //       },
  //       {
  //         img: feature18Img,
  //         name: "Laptop Asus Vivobook Go",
  //         price: 8990000,
  //       },
  //       {
  //         img: feature19Img,
  //         name: "Laptop Acer Aspire 3",
  //         price: 10990000,
  //       },
  //       {
  //         img: feature20Img,
  //         name: "Laptop Acer Aspire 7",
  //         price: 17990000,
  //       },
  //       {
  //         img: feature21Img,
  //         name: "Laptop MSI GF63 Thin 10SCSR",  
  //         price: 12990000,
  //       },
  //       {
  //         img: feature22Img,
  //         name: "Laptop Asus Zenbook UX325EA",
  //         price: 23990000,
  //       },
  //       {
  //         img: feature23Img,
  //         name: "Laptop Asus Vivobook S433EA",
  //         price: 18990000,
  //       },
  //       {
  //         img: feature24Img,
  //         name: "Laptop Gram 14Z90P-V.AH55A5",
  //         price: 25990000,
  //       },
  //       {
  //         img: feature25Img,
  //         name: "Laptop gaming MSI GF65 Thin 10UE",
  //         price: 21790000,
  //       },
  //       {
  //         img: feature26Img,
  //         name: "Laptop Asus ROG Strix G15",
  //         price: 14690000,
  //       },
  //       {
  //         img: feature7Img,
  //         name: "Iphone 14 Pro Max",
  //         price: 24990000,
  //       },
  //       {
  //         img: feature8Img,
  //         name: "Samsung Galaxy A05",
  //         price: 2990000,
  //       },
  //       {
  //         img: feature9Img,
  //         name: "Iphone Galaxy A05s",
  //         price: 3790000,
  //       },
  //       {
  //         img: feature10Img,
  //         name: "Samsung Galaxy M34",
  //         price: 7190000,
  //       },
  //       {
  //         img: feature11Img,
  //         name: "Iphone 15 Pro Max",
  //         price: 38990000,
  //       },
  //       {
  //         img: feature27Img,
  //         name: "Điện thoại Samsung Galaxy Z Fold 4",
  //         price: 23490000,
  //       },
  //       {
  //         img: feature28Img,
  //         name: "Điện thoại Samsung Galaxy Z Flip 4",
  //         price: 11990000,
  //       },
  //       {
  //         img: feature29Img,
  //         name: "Điện thoại Samsung Galaxy S23 Ultra",
  //         price: 24990000,
  //       },
  //       {
  //         img: feature30Img,
  //         name: "Điện thoại Samsung Galaxy S22 Ultra",
  //         price: 19990000,
  //       },
  //       {
  //         img: feature31Img,
  //         name: "Điện thoại Xiaomi Redmi Note 11 Pro",
  //         price: 18990000,
  //       },
  //       {
  //         img: feature32Img,
  //         name: "Điện thoại Xiaomi Redmi 9C",
  //         price: 10990000,
  //       },
  //       {
  //         img: feature33Img,
  //         name: "Điện thoại ASUS ROG Phone 6",
  //         price: 8990000,
  //       },
  //       {
  //         img: feature34Img,
  //         name: "Điện thoại Nubia Red Magic 6",
  //         price: 17990000,
  //       },
  //       {
  //         img: feature35Img,
  //         name: "Điện thoại ASUS Zenfone 8",
  //         price: 12990000,
  //       },
  //       {
  //         img: feature12Img,
  //         name: "Tai nghe không dây JBL",
  //         price: 2490000,
  //       },
  //       {
  //         img: feature13Img,
  //         name: "Tai nghe Bluetooth SoundPeats",
  //         price: 879000,
  //       },
  //       {
  //         img: feature14Img,
  //         name: "Loa Karaoke YS-119 SUYOSD",
  //         price: 899000,
  //       },
  //       {
  //         img: feature15Img,
  //         name: "Tai nghe DAREU EH406",
  //         price: 299000,
  //       },
  //       {
  //         img: feature16Img,
  //         name: "Loa SoundBar LG SN4R 4.1",
  //         price: 1590000,
  //       },
  //       {
  //         img: feature17Img,
  //         name: "Tai nghe USB Logitech H390",
  //         price: 699000,
  //       },
  //       {
  //         img: feature36Img,
  //         name: "Loa JBL PartyBox 1000",
  //         price: 879000,
  //       },
  //       {
  //         img: feature37Img,
  //         name: "Loa Karaoke YS-119 SUYOSD",
  //         price: 2490000,
  //       },
  //       {
  //         img: feature38Img,
  //         name: "Tai nghe USB Logitech H390 màu hồng",
  //         price: 899000,
  //       },
  //       {
  //         img: feature39Img,
  //         name: "Tai nghe JBL GO 3",
  //         price: 949000,
  //       },
  //       {
  //         img: feature40Img,
  //         name: "Loa Bluetooth Xiaomi MDZ-36-DB",
  //         price: 299000,
  //       },
  //       {
  //         img: feature41Img,
  //         name: "Tai nghe Bluetooth SoundPeats Air3 Deluxe",
  //         price: 1590000,
  //       },
  //       {
  //         img: feature42Img,
  //         name: "Loa Bluetooth Karaoke SDRD-608",
  //         price: 699000,
  //       },
  //       {
  //         img: feature43Img,
  //         name: "Đồng hồ thông minh Approach S12",
  //         price: 24990000,
  //       },
  //       {
  //         img: feature44Img,
  //         name: "Đồng hồ thông minh Fenix 7X",
  //         price: 19690000,
  //       },
  //       {
  //         img: feature45Img,
  //         name: "Đồng hồ thông minh Vivomore Sport",
  //         price: 26190000,
  //       },
  //       {
  //         img: feature46Img,
  //         name: "Đồng hồ thông minh Garmin Epix Gen 2",
  //         price: 18590000,
  //       },
  //       {
  //         img: feature47Img,
  //         name: "Đồng hồ thông minh Samsung Galaxy Watch 5",
  //         price: 26490000,
  //       },
  //       {
  //         img: feature48Img,
  //         name: "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro",
  //         price: 16990000,
  //       },
  //       {
  //         img: feature49Img,
  //         name: "Đồng hồ thông minh Asus Vivowatch BP",
  //         price: 8990000,
  //       },
  //       {
  //         img: feature50Img,
  //         name: "Đồng hồ thông minh Asus Vivowatch 5",
  //         price: 10990000,
  //       },
  //       {
  //         img: feature51Img,
  //         name: "Đồng hồ thông minh Garmin Instinct 2",
  //         price: 17990000,
  //       },
  //       {
  //         img: feature52Img,
  //         name: "Đồng hồ thông minh Garmin Forerunner 955",
  //         price: 12990000,
  //       },
  //       {
  //         img: feature53Img,
  //         name: "Ổ cứng vi tính gắn trong Corsair MP600",
  //         price: 2490000,
  //       },
  //       {
  //         img: feature54Img,
  //         name: "Cáp truyền dữ liệu USB 3.0 1m Ugreen 10839",
  //         price: 879000,
  //       },
  //       {
  //         img: feature55Img,
  //         name: "Vỏ máy tính Cooler Master MasterBox MB511 ARGB",
  //         price: 899000,
  //       },
  //       {
  //         img: feature56Img,
  //         name: "Cáp HDMI 2.0 1m Unitek Y-C153BK",
  //         price: 299000,
  //       },
  //       {
  //         img: feature57Img,
  //         name: "Ổ cứng di động SSD Samsung T7 Touch 1TB",
  //         price: 1590000,
  //       },
  //       {
  //         img: feature58Img,
  //         name: "Card màn hình MSI GeForce RTX 3060 Ti Ventus 2X OC",
  //         price: 699000,
  //       },
  //       {
  //         img: feature59Img,
  //         name: "Tản nhiệt nước MSI MAG CoreLiquid 240R",
  //         price: 2890000,
  //       },
  //       {
  //         img: feature60Img,
  //         name: "Tản nhiệt nước MSI MAG CoreLiquid 360R",
  //         price: 2990000,
  //       },
  //       {
  //         img: feature61Img,
  //         name: "Ghế gaming Cooler Master Caliber R2",
  //         price: 5790000,
  //       },
  //       {
  //         img: feature62Img,
  //         name: "Balo gaming MSI Mystic Knight",
  //         price: 2990000,
  //       },
  //       {
  //         img: feature63Img,
  //         name: "Túi đựng laptop 14 inch MSI Urban Raider",
  //         price: 1890000,
  //       },
  //       {
  //         img: feature64Img,
  //         name: "Bộ phát Wifi Indoor Grandstream GWN7605LR",
  //         price: 24990000,
  //       },
  //       {
  //         img: feature65Img,
  //         name: "Router Wifi 6 TP-Link Archer AX80",
  //         price: 19690000,
  //       },
  //       {
  //         img: feature66Img,
  //         name: "Bộ chuyển đổi USB Wifi Ăng Ten Kép AX1800",
  //         price: 26190000,
  //       },
  //       {
  //         img: feature67Img,
  //         name: "Card Wifi AX3000 Gigabyte GC-WBAX200",
  //         price: 1590000,
  //       },
  //       {
  //         img: feature68Img,
  //         name: "Bộ chuyển đổi USB Wifi Nano Bluetooth 4.2",
  //         price: 649000,
  //       },
  //     ],
  //   };
  //   // LapTop: {
  //   //   title: "Máy tính xách tay",
  //   //   products: [
  //   //     {
  //   //       img: feature1Img,
  //   //       name: "Laptop HP ProBook",
  //   //       price: 21990000,
  //   //     },
  //   //     {
  //   //       img: feature2Img,
  //   //       name: "Laptop MSI Morden",
  //   //       price: 17490000,
  //   //     },
  //   //     {
  //   //       img: feature3Img,
  //   //       name: "Laptop Lenovo LOQ",
  //   //       price: 26190000,
  //   //     },
  //   //     {
  //   //       img: feature4Img,
  //   //       name: "Laptop Dell Inspiron",
  //   //       price: 18590000,
  //   //     },
  //   //     {
  //   //       img: feature5Img,
  //   //       name: "Laptop HP Pavilion",
  //   //       price: 26490000,
  //   //     },
  //   //     {
  //   //       img: feature6Img,
  //   //       name: "Laptop Acer Aspire",
  //   //       price: 16990000,
  //   //     },
  //   //     {
  //   //       img: feature18Img,
  //   //       name: "Laptop Asus Vivobook Go",
  //   //       price: 8990000,
  //   //     },
  //   //     {
  //   //       img: feature19Img,
  //   //       name: "Laptop Acer Aspire 3",
  //   //       price: 10990000,
  //   //     },
  //   //     {
  //   //       img: feature20Img,
  //   //       name: "Laptop Acer Aspire 7",
  //   //       price: 17990000,
  //   //     },
  //   //     {
  //   //       img: feature21Img,
  //   //       name: "Laptop MSI GF63 Thin 10SCSR",  
  //   //       price: 12990000,
  //   //     },
  //   //     {
  //   //       img: feature22Img,
  //   //       name: "Laptop Asus Zenbook UX325EA",
  //   //       price: 23990000,
  //   //     },
  //   //     {
  //   //       img: feature23Img,
  //   //       name: "Laptop Asus Vivobook S433EA",
  //   //       price: 18990000,
  //   //     },
  //   //     {
  //   //       img: feature24Img,
  //   //       name: "Laptop Gram 14Z90P-V.AH55A5",
  //   //       price: 25990000,
  //   //     },
  //   //     {
  //   //       img: feature25Img,
  //   //       name: "Laptop gaming MSI GF65 Thin 10UE",
  //   //       price: 21790000,
  //   //     },
  //   //     {
  //   //       img: feature26Img,
  //   //       name: "Laptop Asus ROG Strix G15",
  //   //       price: 14690000,
  //   //     },
  //   //   ],
  //   // },
  //   // Phone: {
  //   //   title: "Điện thoại di động",
  //   //   products: [
  //   //     {
  //   //       img: feature7Img,
  //   //       name: "Điện thoại Iphone 14 Pro Max",
  //   //       price: 24990000,
  //   //     },
  //   //     {
  //   //       img: feature8Img,
  //   //       name: "Điện thoại Samsung Galaxy A05",
  //   //       price: 2990000,
  //   //     },
  //   //     {
  //   //       img: feature9Img,
  //   //       name: "Điện thoại Iphone Galaxy A05s",
  //   //       price: 3790000,
  //   //     },
  //   //     {
  //   //       img: feature10Img,
  //   //       name: "Samsung Galaxy M34",
  //   //       price: 7190000,
  //   //     },
  //   //     {
  //   //       img: feature11Img,
  //   //       name: "Iphone 15 Pro Max",
  //   //       price: 38990000,
  //   //     },
  //   //     {
  //   //       img: feature27Img,
  //   //       name: "Điện thoại Samsung Galaxy Z Fold 4",
  //   //       price: 23490000,
  //   //     },
  //   //     {
  //   //       img: feature28Img,
  //   //       name: "Điện thoại Samsung Galaxy Z Flip 4",
  //   //       price: 11990000,
  //   //     },
  //   //     {
  //   //       img: feature29Img,
  //   //       name: "Điện thoại Samsung Galaxy S23 Ultra",
  //   //       price: 24990000,
  //   //     },
  //   //     {
  //   //       img: feature30Img,
  //   //       name: "Điện thoại Samsung Galaxy S22 Ultra",
  //   //       price: 19990000,
  //   //     },
  //   //     {
  //   //       img: feature31Img,
  //   //       name: "Điện thoại Xiaomi Redmi Note 11 Pro",
  //   //       price: 18990000,
  //   //     },
  //   //     {
  //   //       img: feature32Img,
  //   //       name: "Điện thoại Xiaomi Redmi 9C",
  //   //       price: 10990000,
  //   //     },
  //   //     {
  //   //       img: feature33Img,
  //   //       name: "Điện thoại ASUS ROG Phone 6",
  //   //       price: 8990000,
  //   //     },
  //   //     {
  //   //       img: feature34Img,
  //   //       name: "Điện thoại Nubia Red Magic 6",
  //   //       price: 17990000,
  //   //     },
  //   //     {
  //   //       img: feature35Img,
  //   //       name: "Điện thoại ASUS Zenfone 8",
  //   //       price: 12990000,
  //   //     },
  //   //   ],
  //   // },
  //   // Audio: {
  //   //   title: "Thiết bị âm thanh",
  //   //   products: [
  //   //     {
  //   //       img: feature12Img,
  //   //       name: "Tai nghe không dây JBL",
  //   //       price: 2490000,
  //   //     },
  //   //     {
  //   //       img: feature13Img,
  //   //       name: "Tai nghe Bluetooth SoundPeats",
  //   //       price: 879000,
  //   //     },
  //   //     {
  //   //       img: feature14Img,
  //   //       name: "Loa Karaoke YS-119 SUYOSD",
  //   //       price: 899000,
  //   //     },
  //   //     {
  //   //       img: feature15Img,
  //   //       name: "Tai nghe DAREU EH406",
  //   //       price: 299000,
  //   //     },
  //   //     {
  //   //       img: feature16Img,
  //   //       name: "Loa SoundBar LG SN4R 4.1",
  //   //       price: 1590000,
  //   //     },
  //   //     {
  //   //       img: feature17Img,
  //   //       name: "Tai nghe USB Logitech H390",
  //   //       price: 699000,
  //   //     },
  //   //     {
  //   //       img: feature36Img,
  //   //       name: "Loa JBL PartyBox 1000",
  //   //       price: 879000,
  //   //     },
  //   //     {
  //   //       img: feature37Img,
  //   //       name: "Loa Karaoke YS-119 SUYOSD",
  //   //       price: 2490000,
  //   //     },
  //   //     {
  //   //       img: feature38Img,
  //   //       name: "Tai nghe USB Logitech H390 màu hồng",
  //   //       price: 899000,
  //   //     },
  //   //     {
  //   //       img: feature39Img,
  //   //       name: "Tai nghe JBL GO 3",
  //   //       price: 949000,
  //   //     },
  //   //     {
  //   //       img: feature40Img,
  //   //       name: "Loa Bluetooth Xiaomi MDZ-36-DB",
  //   //       price: 299000,
  //   //     },
  //   //     {
  //   //       img: feature41Img,
  //   //       name: "Tai nghe Bluetooth SoundPeats Air3 Deluxe",
  //   //       price: 1590000,
  //   //     },
  //   //     {
  //   //       img: feature42Img,
  //   //       name: "Loa Bluetooth Karaoke SDRD-608",
  //   //       price: 699000,
  //   //     },
  //   //   ],
  //   // },
  //   // Watch: {
  //   //   title: "Đồng hồ thông minh",
  //   //   products:[
  //   //     {
  //   //       img: feature43Img,
  //   //       name: "Đồng hồ thông minh Approach S12",
  //   //       price: 24990000,
  //   //     },
  //   //     {
  //   //       img: feature44Img,
  //   //       name: "Đồng hồ thông minh Fenix 7X",
  //   //       price: 19690000,
  //   //     },
  //   //     {
  //   //       img: feature45Img,
  //   //       name: "Đồng hồ thông minh Vivomore Sport",
  //   //       price: 26190000,
  //   //     },
  //   //     {
  //   //       img: feature46Img,
  //   //       name: "Đồng hồ thông minh Garmin Epix Gen 2",
  //   //       price: 18590000,
  //   //     },
  //   //     {
  //   //       img: feature47Img,
  //   //       name: "Đồng hồ thông minh Samsung Galaxy Watch 5",
  //   //       price: 26490000,
  //   //     },
  //   //     {
  //   //       img: feature48Img,
  //   //       name: "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro",
  //   //       price: 16990000,
  //   //     },
  //   //     {
  //   //       img: feature49Img,
  //   //       name: "Đồng hồ thông minh Asus Vivowatch BP",
  //   //       price: 8990000,
  //   //     },
  //   //     {
  //   //       img: feature50Img,
  //   //       name: "Đồng hồ thông minh Asus Vivowatch 5",
  //   //       price: 10990000,
  //   //     },
  //   //     {
  //   //       img: feature51Img,
  //   //       name: "Đồng hồ thông minh Garmin Instinct 2",
  //   //       price: 17990000,
  //   //     },
  //   //     {
  //   //       img: feature52Img,
  //   //       name: "Đồng hồ thông minh Garmin Forerunner 955",
  //   //       price: 12990000,
  //   //     },
  //   //   ]
  //   // },
  //   // Component:{
  //   //   title: "Linh kiện máy tính",
  //   //   products:[
  //   //     {
  //   //       img: feature53Img,
  //   //       name: "Ổ cứng vi tính gắn trong Corsair MP600",
  //   //       price: 2490000,
  //   //     },
  //   //     {
  //   //       img: feature54Img,
  //   //       name: "Cáp truyền dữ liệu USB 3.0 1m Ugreen 10839",
  //   //       price: 879000,
  //   //     },
  //   //     {
  //   //       img: feature55Img,
  //   //       name: "Vỏ máy tính Cooler Master MasterBox MB511 ARGB",
  //   //       price: 899000,
  //   //     },
  //   //     {
  //   //       img: feature56Img,
  //   //       name: "Cáp HDMI 2.0 1m Unitek Y-C153BK",
  //   //       price: 299000,
  //   //     },
  //   //     {
  //   //       img: feature57Img,
  //   //       name: "Ổ cứng di động SSD Samsung T7 Touch 1TB",
  //   //       price: 1590000,
  //   //     },
  //   //     {
  //   //       img: feature58Img,
  //   //       name: "Card màn hình MSI GeForce RTX 3060 Ti Ventus 2X OC",
  //   //       price: 699000,
  //   //     },
  //   //     {
  //   //       img: feature59Img,
  //   //       name: "Tản nhiệt nước MSI MAG CoreLiquid 240R",
  //   //       price: 2890000,
  //   //     },
  //   //     {
  //   //       img: feature60Img,
  //   //       name: "Tản nhiệt nước MSI MAG CoreLiquid 360R",
  //   //       price: 2990000,
  //   //     },
  //   //     {
  //   //       img: feature61Img,
  //   //       name: "Ghế gaming Cooler Master Caliber R2",
  //   //       price: 5790000,
  //   //     },
  //   //     {
  //   //       img: feature62Img,
  //   //       name: "Balo gaming MSI Mystic Knight",
  //   //       price: 2990000,
  //   //     },
  //   //     {
  //   //       img: feature63Img,
  //   //       name: "Túi đựng laptop 14 inch MSI Urban Raider",
  //   //       price: 1890000,
  //   //     },
  //   //   ]
  //   // },
  //   // Internet:{
  //   //   title: "Thiết bị mạng",
  //   //   products: [
  //   //     {
  //   //       img: feature64Img,
  //   //       name: "Bộ phát Wifi Indoor Grandstream GWN7605LR",
  //   //       price: 24990000,
  //   //     },
  //   //     {
  //   //       img: feature65Img,
  //   //       name: "Router Wifi 6 TP-Link Archer AX80",
  //   //       price: 19690000,
  //   //     },
  //   //     {
  //   //       img: feature66Img,
  //   //       name: "Bộ chuyển đổi USB Wifi Ăng Ten Kép AX1800",
  //   //       price: 26190000,
  //   //     },
  //   //     {
  //   //       img: feature67Img,
  //   //       name: "Card Wifi AX3000 Gigabyte GC-WBAX200",
  //   //       price: 1590000,
  //   //     },
  //   //     {
  //   //       img: feature68Img,
  //   //       name: "Bộ chuyển đổi USB Wifi Nano Bluetooth 4.2",
  //   //       price: 649000,
  //   //     },
  //   //   ]
  //   // }
  const [featProducts, setFeatProducts] = useState({products:[]});
  useEffect(()=>{
    const fetchProducts = async () => {
       const productList = await productAPI.getAll();
       return productList;
    }
    let data=fetchProducts();
    data.then((result)=>{
      setFeatProducts({products:result});
    })
  },[featProducts])
  console.log(featProducts);
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
