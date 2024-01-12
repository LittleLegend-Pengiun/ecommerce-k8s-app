import epxress from "express";

const router = epxress.Router();

const data = [
  {
    img: 'https://i.ibb.co/Z2Hc7Yz/laptop-1.webp',
    name: "Laptop HP ProBook",
    price: 21990000,
  },
  {
    img: 'https://i.ibb.co/K9D67v8/laptop-2.webp',
    name: "Laptop MSI Morden",
    price: 17490000,
  },
  {
    img: 'https://i.ibb.co/2jKrspz/laptop-3.webp',
    name: "Laptop Lenovo LOQ",
    price: 26190000,
  },
  {
    img: 'https://i.ibb.co/XW1wD5F/laptop-4.webp',
    name: "Laptop Dell Inspiron",
    price: 18590000,
  },
  {
    img: 'https://i.ibb.co/wzdQtXr/laptop-5.webp',
    name: "Laptop HP Pavilion",
    price: 26490000,
  },
  {
    img: 'https://i.ibb.co/gSZrgJD/laptop-6.webp',
    name: "Laptop Acer Aspire",
    price: 16990000,
  },
  {
    img: 'https://i.ibb.co/h92YM39/laptop-7.webp',
    name: "Laptop Asus Vivobook Go",
    price: 8990000,
  },
  {
    img: 'https://i.ibb.co/1snG3QP/laptop-8.webp',
    name: "Laptop Acer Aspire 3",
    price: 10990000,
  },
  {
    img: 'https://i.ibb.co/1vKyz39/laptop-9.webp',
    name: "Laptop Acer Aspire 7",
    price: 17990000,
  },
  {
    img: 'https://i.ibb.co/dDmbTRk/laptop-10.webp',
    name: "Laptop MSI GF63 Thin 10SCSR",
    price: 12990000,
  },
  {
    img: 'https://i.ibb.co/tQN1Wgp/laptop-11.webp',
    name: "Laptop Asus Zenbook UX325EA",
    price: 23990000,
  },
  {
    img: 'https://i.ibb.co/kcysXFC/laptop-12.webp',
    name: "Laptop Asus Vivobook S433EA",
    price: 18990000,
  },
  {
    img: 'https://i.ibb.co/fxY0wCB/laptop-13.webp',
    name: "Laptop Gram 14Z90P-V.AH55A5",
    price: 25990000,
  },
  {
    img: 'https://i.ibb.co/tPwyQ67/laptop-14.webp',
    name: "Laptop gaming MSI GF65 Thin 10UE",
    price: 21790000,
  },
  {
    img: 'https://i.ibb.co/yq6KQ8C/laptop-15.webp',
    name: "Laptop Asus ROG Strix G15",
    price: 14690000,
  },
  {
    img: 'https://i.ibb.co/1f4dnFw/phone-1.webp',
    name: "Iphone 14 Pro Max",
    price: 24990000,
  },
  {
    img: 'https://i.ibb.co/zGRDf0C/phone-2.webp',
    name: "Samsung Galaxy A05",
    price: 2990000,
  },
  {
    img: 'https://i.ibb.co/cw25tvw/phone-3.webp',
    name: "Iphone Galaxy A05s",
    price: 3790000,
  },
  {
    img: 'https://i.ibb.co/LCPDh2g/phone-4.webp',
    name: "Samsung Galaxy M34",
    price: 7190000,
  },
  {
    img: 'https://i.ibb.co/m4wvxcq/phone-5.webp',
    name: "Iphone 15 Pro Max",
    price: 38990000,
  },
  {
    img: 'https://i.ibb.co/hZxS7wp/phone-6.webp',
    name: "Điện thoại Samsung Galaxy Z Fold 4",
    price: 23490000,
  },
  {
    img: 'https://i.ibb.co/xgHQLxt/phone-7.webp',
    name: "Điện thoại Samsung Galaxy Z Flip 4",
    price: 11990000,
  },
  {
    img: 'https://i.ibb.co/12dVZJx/phone-8.webp',
    name: "Điện thoại Samsung Galaxy S23 Ultra",
    price: 24990000,
  },
  {
    img: 'https://i.ibb.co/nCPy458/phone-9.webp',
    name: "Điện thoại Samsung Galaxy S22 Ultra",
    price: 19990000,
  },
  {
    img: 'https://i.ibb.co/Sfgrt58/phone-10.webp',
    name: "Điện thoại Xiaomi Redmi Note 11 Pro",
    price: 18990000,
  },
  {
    img: 'https://i.ibb.co/8rP3CH0/phone-11.webp',
    name: "Điện thoại Xiaomi Redmi 9C",
    price: 10990000,
  },
  {
    img: 'https://i.ibb.co/F6jsSZj/phone-12.webp',
    name: "Điện thoại ASUS ROG Phone 6",
    price: 8990000,
  },
  {
    img: 'https://i.ibb.co/nkR4ZNv/phone-13.webp',
    name: "Điện thoại Nubia Red Magic 6",
    price: 17990000,
  },
  {
    img: 'https://i.ibb.co/X3NctTP/phone-14.webp',
    name: "Điện thoại ASUS Zenfone 8",
    price: 12990000,
  },
  {
    img: 'https://i.ibb.co/fG3FfS9/audio-1.webp',
    name: "Tai nghe không dây JBL",
    price: 2490000,
  },
  {
    img: 'https://i.ibb.co/02J6WTJ/audio-2.webp',
    name: "Tai nghe Bluetooth SoundPeats",
    price: 879000,
  },
  {
    img: 'https://i.ibb.co/b1fZQGb/audio-3.webp',
    name: "Loa Karaoke YS-119 SUYOSD",
    price: 899000,
  },
  {
    img: 'https://i.ibb.co/VLKYZG1/audio-4.webp',
    name: "Tai nghe DAREU EH406",
    price: 299000,
  },
  {
    img: 'https://i.ibb.co/ry84KYV/audio-5.webp',
    name: "Loa SoundBar LG SN4R 4.1",
    price: 1590000,
  },
  {
    img: 'https://i.ibb.co/nC36SCx/audio-6.webp',
    name: "Tai nghe USB Logitech H390",
    price: 699000,
  },
  {
    img: 'https://i.ibb.co/HdGDMhn/audio-7.webp',
    name: "Loa JBL PartyBox 1000",
    price: 879000,
  },
  {
    img: 'https://i.ibb.co/9GhJSvJ/audio-8.webp',
    name: "Loa Karaoke YS-119 SUYOSD",
    price: 2490000,
  },
  {
    img: 'https://i.ibb.co/w02t5zq/audio-9.webp',
    name: "Tai nghe USB Logitech H390 màu hồng",
    price: 899000,
  },
  {
    img: 'https://i.ibb.co/df8xtzp/audio-10.webp',
    name: "Tai nghe JBL GO 3",
    price: 949000,
  },
  {
    img: 'https://i.ibb.co/FzjSF9c/audio-11.webp',
    name: "Loa Bluetooth Xiaomi MDZ-36-DB",
    price: 299000,
  },
  {
    img: 'https://i.ibb.co/7GM29VQ/audio-12.webp',
    name: "Tai nghe Bluetooth SoundPeats Air3 Deluxe",
    price: 1590000,
  },
  {
    img: 'https://i.ibb.co/LpvphHX/audio-13.webp',
    name: "Loa Bluetooth Karaoke SDRD-608",
    price: 699000,
  },
  {
    img: 'https://i.ibb.co/0s8q3sN/watch-1.webp',
    name: "Đồng hồ thông minh Approach S12",
    price: 24990000,
  },
  {
    img: '    https://i.ibb.co/cYB97qy/watch-2.webp',
    name: "Đồng hồ thông minh Fenix 7X",
    price: 19690000,
  },
  {
    img: 'https://i.ibb.co/sbjRpKr/watch-3.webp',
    name: "Đồng hồ thông minh Vivomore Sport",
    price: 26190000,
  },
  {
    img: 'https://i.ibb.co/L1Zh98N/watch-4.webp',
    name: "Đồng hồ thông minh Garmin Epix Gen 2",
    price: 18590000,
  },
  {
    img: 'https://i.ibb.co/7WygS4t/watch-5.webp',
    name: "Đồng hồ thông minh Samsung Galaxy Watch 5",
    price: 26490000,
  },
  {
    img: 'https://i.ibb.co/GspCYSF/watch-6.webp',
    name: "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro",
    price: 16990000,
  },
  {
    img: 'https://i.ibb.co/VQnL7mT/watch-7.webp',
    name: "Đồng hồ thông minh Asus Vivowatch BP",
    price: 8990000,
  },
  {
    img: 'https://i.ibb.co/rsMTQ8F/watch-8.webp',
    name: "Đồng hồ thông minh Asus Vivowatch 5",
    price: 10990000,
  },
  {
    img: 'https://i.ibb.co/QMzsj1c/watch-9.webp',
    name: "Đồng hồ thông minh Garmin Instinct 2",
    price: 17990000,
  },
  {
    img: 'https://i.ibb.co/B6zZ0KQ/watch-10.webp',
    name: "Đồng hồ thông minh Garmin Forerunner 955",
    price: 12990000,
  },
  {
    img: 'https://i.ibb.co/3vvj37K/component-1.webp',
    name: "Ổ cứng vi tính gắn trong Corsair MP600",
    price: 2490000,
  },
  {
    img: 'https://i.ibb.co/njwXXN1/component-2.webp',
    name: "Cáp truyền dữ liệu USB 3.0 1m Ugreen 10839",
    price: 879000,
  },
  {
    img: 'https://i.ibb.co/pwLGTDw/component-3.webp',
    name: "Vỏ máy tính Cooler Master MasterBox MB511 ARGB",
    price: 899000,
  },
  {
    img: 'https://i.ibb.co/0ynKTb1/component-4.webp',
    name: "Cáp HDMI 2.0 1m Unitek Y-C153BK",
    price: 299000,
  },
  {
    img: 'https://i.ibb.co/JqgmC1V/component-5.webp',
    name: "Ổ cứng di động SSD Samsung T7 Touch 1TB",
    price: 1590000,
  },
  {
    img: 'https://i.ibb.co/8cFNRkV/component-6.webp',
    name: "Card màn hình MSI GeForce RTX 3060 Ti Ventus 2X OC",
    price: 699000,
  },
  {
    img: 'https://i.ibb.co/x3rvR3s/component-7.webp',
    name: "Tản nhiệt nước MSI MAG CoreLiquid 240R",
    price: 2890000,
  },
  {
    img: 'https://i.ibb.co/f89z6Hv/component-8.webp',
    name: "Tản nhiệt nước MSI MAG CoreLiquid 360R",
    price: 2990000,
  },
  {
    img: 'https://i.ibb.co/pJwdXYZ/component-9.webp',
    name: "Ghế gaming Cooler Master Caliber R2",
    price: 5790000,
  },
  {
    img: 'https://i.ibb.co/rH2knLh/component-10.webp',
    name: "Balo gaming MSI Mystic Knight",
    price: 2990000,
  },
  {
    img: 'https://i.ibb.co/t3gprfp/component-11.webp',
    name: "Túi đựng laptop 14 inch MSI Urban Raider",
    price: 1890000,
  },
  {
    img: 'https://i.ibb.co/3f4G8S2/internet-1.webp',
    name: "Bộ phát Wifi Indoor Grandstream GWN7605LR",
    price: 24990000,
  },
  {
    img: 'https://i.ibb.co/8xFcCND/internet-2.webp',
    name: "Router Wifi 6 TP-Link Archer AX80",
    price: 19690000,
  },
  {
    img: 'https://i.ibb.co/ySQH6dH/internet-3.webp',
    name: "Bộ chuyển đổi USB Wifi Ăng Ten Kép AX1800",
    price: 26190000,
  },
  {
    img: 'https://i.ibb.co/LYNTNrD/internet-4.webp',
    name: "Card Wifi AX3000 Gigabyte GC-WBAX200",
    price: 1590000,
  },
  {
    img: 'https://i.ibb.co/61DQ7zW/internet-5.webp',
    name: "Bộ chuyển đổi USB Wifi Nano Bluetooth 4.2",
    price: 649000,
  },
];

router.get("/products", (req, res) => {
    res.send({
        products: data,
    });
});


export default router;

/*
https://i.ibb.co/fG3FfS9/audio-1.webp
https://i.ibb.co/02J6WTJ/audio-2.webp
https://i.ibb.co/b1fZQGb/audio-3.webp
https://i.ibb.co/VLKYZG1/audio-4.webp
https://i.ibb.co/ry84KYV/audio-5.webp
https://i.ibb.co/nC36SCx/audio-6.webp
https://i.ibb.co/HdGDMhn/audio-7.webp
https://i.ibb.co/9GhJSvJ/audio-8.webp
https://i.ibb.co/w02t5zq/audio-9.webp
https://i.ibb.co/df8xtzp/audio-10.webp
https://i.ibb.co/FzjSF9c/audio-11.webp
https://i.ibb.co/7GM29VQ/audio-12.webp
https://i.ibb.co/LpvphHX/audio-13.webp
https://i.ibb.co/3vvj37K/component-1.webp
https://i.ibb.co/njwXXN1/component-2.webp
https://i.ibb.co/pwLGTDw/component-3.webp
https://i.ibb.co/0ynKTb1/component-4.webp
https://i.ibb.co/JqgmC1V/component-5.webp
https://i.ibb.co/8cFNRkV/component-6.webp
https://i.ibb.co/x3rvR3s/component-7.webp
https://i.ibb.co/f89z6Hv/component-8.webp
https://i.ibb.co/pJwdXYZ/component-9.webp
https://i.ibb.co/rH2knLh/component-10.webp
https://i.ibb.co/t3gprfp/component-11.webp
https://i.ibb.co/3f4G8S2/internet-1.webp
https://i.ibb.co/8xFcCND/internet-2.webp
https://i.ibb.co/ySQH6dH/internet-3.webp
https://i.ibb.co/LYNTNrD/internet-4.webp
https://i.ibb.co/61DQ7zW/internet-5.webp
https://i.ibb.co/Z2Hc7Yz/laptop-1.webp
https://i.ibb.co/K9D67v8/laptop-2.webp
https://i.ibb.co/2jKrspz/laptop-3.webp
https://i.ibb.co/XW1wD5F/laptop-4.webp
https://i.ibb.co/wzdQtXr/laptop-5.webp
https://i.ibb.co/gSZrgJD/laptop-6.webp
https://i.ibb.co/h92YM39/laptop-7.webp
https://i.ibb.co/1snG3QP/laptop-8.webp
https://i.ibb.co/1vKyz39/laptop-9.webp
https://i.ibb.co/dDmbTRk/laptop-10.webp
https://i.ibb.co/tQN1Wgp/laptop-11.webp
https://i.ibb.co/kcysXFC/laptop-12.webp
https://i.ibb.co/fxY0wCB/laptop-13.webp
https://i.ibb.co/tPwyQ67/laptop-14.webp
https://i.ibb.co/yq6KQ8C/laptop-15.webp
https://i.ibb.co/1f4dnFw/phone-1.webp
https://i.ibb.co/zGRDf0C/phone-2.webp
https://i.ibb.co/cw25tvw/phone-3.webp
https://i.ibb.co/LCPDh2g/phone-4.webp
https://i.ibb.co/m4wvxcq/phone-5.webp
https://i.ibb.co/hZxS7wp/phone-6.webp
https://i.ibb.co/xgHQLxt/phone-7.webp
https://i.ibb.co/12dVZJx/phone-8.webp
https://i.ibb.co/nCPy458/phone-9.webp
https://i.ibb.co/Sfgrt58/phone-10.webp
https://i.ibb.co/8rP3CH0/phone-11.webp
https://i.ibb.co/F6jsSZj/phone-12.webp
https://i.ibb.co/nkR4ZNv/phone-13.webp
https://i.ibb.co/X3NctTP/phone-14.webp
https://i.ibb.co/0s8q3sN/watch-1.webp
https://i.ibb.co/cYB97qy/watch-2.webp
https://i.ibb.co/sbjRpKr/watch-3.webp
https://i.ibb.co/L1Zh98N/watch-4.webp
https://i.ibb.co/7WygS4t/watch-5.webp
https://i.ibb.co/GspCYSF/watch-6.webp
https://i.ibb.co/VQnL7mT/watch-7.webp
https://i.ibb.co/rsMTQ8F/watch-8.webp
https://i.ibb.co/QMzsj1c/watch-9.webp
https://i.ibb.co/B6zZ0KQ/watch-10.webp
*/