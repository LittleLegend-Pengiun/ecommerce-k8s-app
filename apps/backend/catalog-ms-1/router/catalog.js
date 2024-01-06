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
    img: feature11Img,
    name: "Iphone 15 Pro Max",
    price: 38990000,
  },
  {
    img: feature27Img,
    name: "Điện thoại Samsung Galaxy Z Fold 4",
    price: 23490000,
  },
  {
    img: feature28Img,
    name: "Điện thoại Samsung Galaxy Z Flip 4",
    price: 11990000,
  },
  {
    img: feature29Img,
    name: "Điện thoại Samsung Galaxy S23 Ultra",
    price: 24990000,
  },
  {
    img: feature30Img,
    name: "Điện thoại Samsung Galaxy S22 Ultra",
    price: 19990000,
  },
  {
    img: feature31Img,
    name: "Điện thoại Xiaomi Redmi Note 11 Pro",
    price: 18990000,
  },
  {
    img: feature32Img,
    name: "Điện thoại Xiaomi Redmi 9C",
    price: 10990000,
  },
  {
    img: feature33Img,
    name: "Điện thoại ASUS ROG Phone 6",
    price: 8990000,
  },
  {
    img: feature34Img,
    name: "Điện thoại Nubia Red Magic 6",
    price: 17990000,
  },
  {
    img: feature35Img,
    name: "Điện thoại ASUS Zenfone 8",
    price: 12990000,
  },
  {
    img: 'https://i.ibb.co/fG3FfS9/audio-1.webp',
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
  {
    img: feature36Img,
    name: "Loa JBL PartyBox 1000",
    price: 879000,
  },
  {
    img: feature37Img,
    name: "Loa Karaoke YS-119 SUYOSD",
    price: 2490000,
  },
  {
    img: feature38Img,
    name: "Tai nghe USB Logitech H390 màu hồng",
    price: 899000,
  },
  {
    img: feature39Img,
    name: "Tai nghe JBL GO 3",
    price: 949000,
  },
  {
    img: feature40Img,
    name: "Loa Bluetooth Xiaomi MDZ-36-DB",
    price: 299000,
  },
  {
    img: feature41Img,
    name: "Tai nghe Bluetooth SoundPeats Air3 Deluxe",
    price: 1590000,
  },
  {
    img: feature42Img,
    name: "Loa Bluetooth Karaoke SDRD-608",
    price: 699000,
  },
  {
    img: feature43Img,
    name: "Đồng hồ thông minh Approach S12",
    price: 24990000,
  },
  {
    img: feature44Img,
    name: "Đồng hồ thông minh Fenix 7X",
    price: 19690000,
  },
  {
    img: feature45Img,
    name: "Đồng hồ thông minh Vivomore Sport",
    price: 26190000,
  },
  {
    img: feature46Img,
    name: "Đồng hồ thông minh Garmin Epix Gen 2",
    price: 18590000,
  },
  {
    img: feature47Img,
    name: "Đồng hồ thông minh Samsung Galaxy Watch 5",
    price: 26490000,
  },
  {
    img: feature48Img,
    name: "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro",
    price: 16990000,
  },
  {
    img: feature49Img,
    name: "Đồng hồ thông minh Asus Vivowatch BP",
    price: 8990000,
  },
  {
    img: feature50Img,
    name: "Đồng hồ thông minh Asus Vivowatch 5",
    price: 10990000,
  },
  {
    img: feature51Img,
    name: "Đồng hồ thông minh Garmin Instinct 2",
    price: 17990000,
  },
  {
    img: feature52Img,
    name: "Đồng hồ thông minh Garmin Forerunner 955",
    price: 12990000,
  },
  {
    img: feature53Img,
    name: "Ổ cứng vi tính gắn trong Corsair MP600",
    price: 2490000,
  },
  {
    img: feature54Img,
    name: "Cáp truyền dữ liệu USB 3.0 1m Ugreen 10839",
    price: 879000,
  },
  {
    img: feature55Img,
    name: "Vỏ máy tính Cooler Master MasterBox MB511 ARGB",
    price: 899000,
  },
  {
    img: feature56Img,
    name: "Cáp HDMI 2.0 1m Unitek Y-C153BK",
    price: 299000,
  },
  {
    img: feature57Img,
    name: "Ổ cứng di động SSD Samsung T7 Touch 1TB",
    price: 1590000,
  },
  {
    img: feature58Img,
    name: "Card màn hình MSI GeForce RTX 3060 Ti Ventus 2X OC",
    price: 699000,
  },
  {
    img: feature59Img,
    name: "Tản nhiệt nước MSI MAG CoreLiquid 240R",
    price: 2890000,
  },
  {
    img: feature60Img,
    name: "Tản nhiệt nước MSI MAG CoreLiquid 360R",
    price: 2990000,
  },
  {
    img: feature61Img,
    name: "Ghế gaming Cooler Master Caliber R2",
    price: 5790000,
  },
  {
    img: feature62Img,
    name: "Balo gaming MSI Mystic Knight",
    price: 2990000,
  },
  {
    img: feature63Img,
    name: "Túi đựng laptop 14 inch MSI Urban Raider",
    price: 1890000,
  },
  {
    img: feature64Img,
    name: "Bộ phát Wifi Indoor Grandstream GWN7605LR",
    price: 24990000,
  },
  {
    img: feature65Img,
    name: "Router Wifi 6 TP-Link Archer AX80",
    price: 19690000,
  },
  {
    img: feature66Img,
    name: "Bộ chuyển đổi USB Wifi Ăng Ten Kép AX1800",
    price: 26190000,
  },
  {
    img: feature67Img,
    name: "Card Wifi AX3000 Gigabyte GC-WBAX200",
    price: 1590000,
  },
  {
    img: feature68Img,
    name: "Bộ chuyển đổi USB Wifi Nano Bluetooth 4.2",
    price: 649000,
  },
];

router.get("/", (req, res) => {
    res.send({
        products: data,
    });
});
