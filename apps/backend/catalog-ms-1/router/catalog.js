import epxress from "express";

const router = epxress.Router();

// const data =[
//   {
//     "imageUrl": "https://i.ibb.co/Z2Hc7Yz/laptop-1.webp",
//     "productName": "Laptop HP ProBook",
//     "description": "Laptop HP ProBook 450 G8 2W8J9PA (15.6 FHD/i5-1135G7/8GB/256GB SSD/Win10/2GB MX450)",
//     "price": 21990000,
//     "stockQuantity": 93,
//     "manufacture" : "HP",
//     "releaseDate": "22/04/2022",
//     "productID" : 1,
//     "soldQuantity" : 50,
//   },
//   {
//     "imageUrl": "https://i.ibb.co/K9D67v8/laptop-2.webp",
//     "productName": "Laptop MSI Morden",
//     "price": 17490000,
//     "stockQuantity": 86,
//     "manufacture" : "MSI",
//     "releaseDate": "24/02/2022",
//     "productID" : 2,
//     "soldQuantity" : 30,
//     "description": "Laptop MSI Modern 14 B11MO-001VN (14 FHD/i5-1135G7/8GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/2jKrspz/laptop-3.webp",
//     "productName": "Laptop Lenovo LOQ",
//     "price": 26190000,
//     "stockQuantity": 68,
//     "manufacture" : "Lenovo",
//     "releaseDate": "14/02/2022",
//     "productID" : 3,
//     "soldQuantity" : 40,
//     "description": "Laptop Lenovo ThinkBook 14 G3 ITL 20Y4000UVN (14 FHD/i5-1135G7/8GB/512GB SSD/Win10/2GB MX450)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/XW1wD5F/laptop-4.webp",
//     "productName": "Laptop Dell Inspiron",
//     "price": 18590000,
//     "stockQuantity": 29,
//     "manufacture" : "Dell",
//     "releaseDate": "21/02/2022",
//     "productID" : 4,
//     "soldQuantity" : 20,
//     "description": "Laptop Dell Inspiron 3501 70226363 (15.6 FHD/i5-1135G7/8GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/wzdQtXr/laptop-5.webp",
//     "productName": "Laptop HP Pavilion",
//     "price": 26490000,
//     "stockQuantity": 36,
//     "manufacture" : "HP",
//     "releaseDate": "12/03/2022",
//     "productID" : 5,
//     "soldQuantity" : 10,
//     "description": "Laptop HP Pavilion 14-dv0001TU 2K5U3PA (14 FHD/i5-1135G7/8GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/gSZrgJD/laptop-6.webp",
//     "productName": "Laptop Acer Aspire",
//     "price": 16990000,
//     "stockQuantity": 48,
//     "manufacture" : "Acer",
//     "releaseDate": "10/02/2022",
//     "productID" : 6,
//     "soldQuantity" : 15,
//     "description": "Laptop Acer Aspire 5 A515-56-50ZD (15.6 FHD/i5-1135G7/8GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/h92YM39/laptop-7.webp",
//     "productName": "Laptop Asus Vivobook Go",
//     "price": 8990000,
//     "stockQuantity": 95,
//     "manufacture" : "Asus",
//     "releaseDate": "19/02/2022",
//     "productID" : 7,
//     "soldQuantity" : 25,
//     "description": "Laptop Asus Vivobook Go M415DA-EK301T (14 FHD/R3-3250U/4GB/256GB SSD/Win10/AMD Radeon Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/1snG3QP/laptop-8.webp",
//     "productName": "Laptop Acer Aspire 3",
//     "price": 10990000,
//     "stockQuantity": 61,
//     "manufacture" : "Acer",
//     "releaseDate": "15/02/2022",
//     "productID" : 8,
//     "soldQuantity" : 35,
//     "description": "Laptop Acer Aspire 3 A315-23-R3K3 (15.6 HD/R3-3250U/4GB/256GB SSD/Win10/AMD Radeon Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/1vKyz39/laptop-9.webp",
//     "productName": "Laptop Acer Aspire 7",
//     "price": 17990000,
//     "stockQuantity": 67,
//     "manufacture" : "Acer",
//     "releaseDate": "28/02/2022",
//     "productID" : 9,
//     "soldQuantity" : 45,
//     "description": "Laptop Acer Aspire 7 A715-42G-R3VU (15.6 FHD/R5-5500U/8GB/512GB SSD/Win10/4GB RX5500M)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/dDmbTRk/laptop-10.webp",
//     "productName": "Laptop MSI GF63 Thin 10SCSR",
//     "price": 12990000,
//     "stockQuantity": 64,
//     "manufacture" : "MSI",
//     "releaseDate": "16/02/2022",
//     "productID" : 10,
//     "soldQuantity" : 55,
//     "description": "Laptop MSI GF63 Thin 10SCSR-1039VN (15.6 FHD/i5-10300H/8GB/512GB SSD/Win10/4GB GTX1650)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/tQN1Wgp/laptop-11.webp",
//     "productName": "Laptop Asus Zenbook UX325EA",
//     "price": 23990000,
//     "stockQuantity": 85,
//     "manufacture" : "Asus",
//     "releaseDate": "18/02/2022",
//     "productID" : 11,
//     "soldQuantity" : 60,
//     "description": "Laptop Asus Zenbook UX325EA-EG701T (13.3 FHD/i7-1165G7/16GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/kcysXFC/laptop-12.webp",
//     "productName": "Laptop Asus Vivobook S433EA",
//     "price": 18990000,
//     "stockQuantity": 76,
//     "manufacture" : "Asus",
//     "releaseDate": "01/02/2022",
//     "productID" : 12,
//     "soldQuantity" : 70,
//     "description": "Laptop Asus Vivobook S433EA-EB501T (14 FHD/i5-1135G7/8GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/fxY0wCB/laptop-13.webp",
//     "productName": "Laptop Gram 14Z90P-V.AH55A5",
//     "price": 25990000,
//     "stockQuantity": 69,
//     "manufacture" : "Gram",
//     "releaseDate": "02/02/2022",
//     "productID" : 13,
//     "soldQuantity" : 80,
//     "description": "Laptop LG Gram 14Z90P-V.AH55A5 (14 FHD/i5-1135G7/8GB/512GB SSD/Win10/Intel Iris Xe Graphics)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/tPwyQ67/laptop-14.webp",
//     "productName": "Laptop gaming MSI GF65 Thin 10UE",
//     "price": 21790000,
//     "stockQuantity": 17,
//     "manufacture" : "gaming",
//     "releaseDate": "02/03/2022",
//     "productID" : 14,
//     "soldQuantity" : 90,
//     "description": "Laptop gaming MSI GF65 Thin 10UE-092VN (15.6 FHD/i7-10750H/8GB/512GB SSD/Win10/6GB RTX3060)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/yq6KQ8C/laptop-15.webp",
//     "productName": "Laptop Asus ROG Strix G15",
//     "price": 14690000,
//     "stockQuantity": 55,
//     "manufacture" : "Asus",
//     "releaseDate": "03/03/2022",
//     "productID" : 15,
//     "soldQuantity" : 100,
//     "description": "Laptop Asus ROG Strix G15 G513IE-HN009T (15.6 FHD/R5-5600H/8GB/512GB SSD/Win10/4GB GTX1650)"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/1f4dnFw/phone-1.webp",
//     "productName": "Iphone 14 Pro Max",
//     "price": 24990000,
//     "stockQuantity": 55,
//     "manufacture" : "Iphone",
//     "releaseDate": "06/03/2022",
//     "productID" : 16,
//     "soldQuantity" : 110,
//     "description": "Iphone 14 Pro Max"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/zGRDf0C/phone-2.webp",
//     "productName": "Samsung Galaxy A05",
//     "price": 2990000,
//     "stockQuantity": 58,
//     "manufacture" : "Samsung",
//     "releaseDate": "04/03/2022",
//     "productID" : 17,
//     "soldQuantity" : 120,
//     "description": "Samsung Galaxy A05"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/cw25tvw/phone-3.webp",
//     "productName": "Iphone Galaxy A05s",
//     "price": 3790000,
//     "stockQuantity": 59,
//     "manufacture" : "Galaxy",
//     "releaseDate": "08/03/2022",
//     "productID" : 18,
//     "soldQuantity" : 130,
//     "description": "Iphone Galaxy A05s"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/LCPDh2g/phone-4.webp",
//     "productName": "Samsung Galaxy M34",
//     "price": 7190000,
//     "stockQuantity": 44,
//     "manufacture" : "Samsung",
//     "releaseDate": "12/03/2022",
//     "productID" : 19,
//     "soldQuantity" : 140,
//     "description": "Samsung Galaxy M34"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/m4wvxcq/phone-5.webp",
//     "productName": "Iphone 15 Pro Max",
//     "price": 38990000,
//     "stockQuantity": 67,
//     "manufacture" : "Iphone",
//     "releaseDate": "14/03/2022",
//     "productID" : 20,
//     "soldQuantity" : 150,
//     "description": "Iphone 15 Pro Max"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/hZxS7wp/phone-6.webp",
//     "productName": "Điện thoại Samsung Galaxy Z Fold 4",
//     "price": 23490000,
//     "stockQuantity": 88,
//     "manufacture" : "Samsung",
//     "releaseDate": "18/03/2022",
//     "productID" : 21,
//     "soldQuantity" : 160,
//     "description": "Điện thoại Samsung Galaxy Z Fold 4"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/xgHQLxt/phone-7.webp",
//     "productName": "Điện thoại Samsung Galaxy Z Flip 4",
//     "price": 11990000,
//     "stockQuantity": 11,
//     "manufacture" : "Samsung",
//     "releaseDate": "19/03/2022",
//     "productID" : 22,
//     "soldQuantity" : 170,
//     "description": "Điện thoại Samsung Galaxy Z Flip 4"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/12dVZJx/phone-8.webp",
//     "productName": "Điện thoại Samsung Galaxy S23 Ultra",
//     "price": 24990000,
//     "stockQuantity": 69,
//     "manufacture" : "Samsung",
//     "releaseDate": "20/03/2022",
//     "productID" : 23,
//     "soldQuantity" : 180,
//     "description": "Điện thoại Samsung Galaxy S23 Ultra"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/nCPy458/phone-9.webp",
//     "productName": "Điện thoại Samsung Galaxy S22 Ultra",
//     "price": 19990000,
//     "stockQuantity": 16,
//     "manufacture" : "Samsung",
//     "releaseDate": "29/03/2022",
//     "productID" : 24,
//     "soldQuantity" : 190,
//     "description": "Điện thoại Samsung Galaxy S22 Ultra"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/Sfgrt58/phone-10.webp",
//     "productName": "Điện thoại Xiaomi Redmi Note 11 Pro",
//     "price": 18990000,
//     "stockQuantity": 96,
//     "manufacture" : "Xiaomi",
//     "releaseDate": "22/03/2022",
//     "productID" : 25,
//     "soldQuantity" : 200,
//     "description": "Điện thoại Xiaomi Redmi Note 11 Pro"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/8rP3CH0/phone-11.webp",
//     "productName": "Điện thoại Xiaomi Redmi 9C",
//     "price": 10990000,
//     "stockQuantity": 71,
//     "manufacture" : "Xiaomi",
//     "releaseDate": "27/03/2022",
//     "productID" : 26,
//     "soldQuantity" : 210,
//     "description": "Điện thoại Xiaomi Redmi 9C"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/F6jsSZj/phone-12.webp",
//     "productName": "Điện thoại ASUS ROG Phone 6",
//     "price": 8990000,
//     "stockQuantity": 96,
//     "manufacture" : "ASUS",
//     "releaseDate": "31/03/2022",
//     "productID" : 27,
//     "soldQuantity" : 220,
//     "description": "Điện thoại ASUS ROG Phone 6"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/nkR4ZNv/phone-13.webp",
//     "productName": "Điện thoại Nubia Red Magic 6",
//     "price": 17990000,
//     "stockQuantity": 101,
//     "manufacture" : "Nubia",
//     "releaseDate": "01/04/2022",
//     "productID" : 28,
//     "soldQuantity" : 230,
//     "description": "Điện thoại Nubia Red Magic 6"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/X3NctTP/phone-14.webp",
//     "productName": "Điện thoại ASUS Zenfone 8",
//     "price": 12990000,
//     "stockQuantity": 77,
//     "manufacture" : "ASUS",
//     "releaseDate": "02/04/2022",
//     "productID" : 29,
//     "soldQuantity" : 240,
//     "description": "Điện thoại ASUS Zenfone 8"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/fG3FfS9/audio-1.webp",
//     "productName": "Tai nghe không dây JBL",
//     "price": 2490000,
//     "stockQuantity": 102,
//     "manufacture" : "JBL",
//     "releaseDate": "03/04/2022",
//     "productID" : 30,
//     "soldQuantity" : 250,
//     "description": "Tai nghe không dây JBL"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/02J6WTJ/audio-2.webp",
//     "productName": "Tai nghe Bluetooth SoundPeats",
//     "price": 879000,
//     "stockQuantity": 121,
//     "manufacture" : "SoundPeats",
//     "releaseDate": "04/04/2022",
//     "productID" : 31,
//     "soldQuantity" : 260,
//     "description": "Tai nghe Bluetooth SoundPeats",
//   },
//   {
//     "imageUrl": "https://i.ibb.co/b1fZQGb/audio-3.webp",
//     "productName": "Loa Karaoke YS-119 SUYOSD",
//     "price": 899000,
//     "stockQuantity": 6,
//     "manufacture" : "SUYOSD",
//     "releaseDate": "11/04/2022",
//     "productID" : 32,
//     "soldQuantity" : 270,
//     "description": "Loa Karaoke YS-119 SUYOSD"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/VLKYZG1/audio-4.webp",
//     "productName": "Tai nghe DAREU EH406",
//     "price": 299000,
//     "stockQuantity": 141,
//     "manufacture" : "DAREU",
//     "releaseDate": "09/04/2022",
//     "productID" : 33,
//     "soldQuantity" : 280,
//     "description": "Tai nghe DAREU EH406"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/ry84KYV/audio-5.webp",
//     "productName": "Loa SoundBar LG SN4R 4.1",
//     "price": 1590000,
//     "stockQuantity": 94,
//     "manufacture" : "LG",
//     "releaseDate": "16/04/2022",
//     "productID" : 34,
//     "soldQuantity" : 290,
//     "description": "Loa SoundBar LG SN4R 4.1"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/nC36SCx/audio-6.webp",
//     "productName": "Tai nghe USB Logitech H390",
//     "price": 699000,
//     "stockQuantity": 70,
//     "manufacture" : "Logitech",
//     "releaseDate": "19/04/2022",
//     "productID" : 35,
//     "soldQuantity" : 300,
//     "description": "Tai nghe USB Logitech H390",
//   },
//   {
//     "imageUrl": "https://i.ibb.co/HdGDMhn/audio-7.webp",
//     "productName": "Loa JBL PartyBox 1000",
//     "price": 879000,
//     "stockQuantity": 19,
//     "manufacture" : "JBL",
//     "releaseDate": "17/04/2022",
//     "productID" : 36,
//     "soldQuantity" : 310,
//     "description": "Loa JBL PartyBox 1000"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/9GhJSvJ/audio-8.webp",
//     "productName": "Loa Karaoke YS-119 SUYOSD",
//     "price": 2490000,
//     "stockQuantity": 91,
//     "manufacture" : "SUYOSD",
//     "releaseDate": "26/04/2022",
//     "productID" : 37,
//     "soldQuantity" : 320,
//     "description": "Loa Karaoke YS-119 SUYOSD"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/w02t5zq/audio-9.webp",
//     "productName": "Tai nghe USB Logitech H390 màu hồng",
//     "price": 899000,
//     "stockQuantity": 63,
//     "manufacture" : "Logitech",
//     "releaseDate": "14/04/2022",
//     "productID" : 38,
//     "soldQuantity" : 330,
//     "description": "Tai nghe USB Logitech H390 màu hồng"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/df8xtzp/audio-10.webp",
//     "productName": "Tai nghe JBL GO 3",
//     "price": 949000,
//     "stockQuantity": 112,
//     "manufacture" : "JBL",
//     "releaseDate": "23/04/2022",
//     "productID" : 39,
//     "soldQuantity" : 340,
//     "description": "Tai nghe JBL GO 3"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/FzjSF9c/audio-11.webp",
//     "productName": "Loa Bluetooth Xiaomi MDZ-36-DB",
//     "price": 299000,
//     "stockQuantity": 27,
//     "manufacture" : "Xiaomi",
//     "releaseDate": "28/04/2022",
//     "productID" : 40,
//     "soldQuantity" : 350,
//     "description": "Loa Bluetooth Xiaomi MDZ-36-DB"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/7GM29VQ/audio-12.webp",
//     "productName": "Tai nghe Bluetooth SoundPeats Air3 Deluxe",
//     "price": 1590000,
//     "stockQuantity": 18,
//     "manufacture" : "Deluxe",
//     "releaseDate": "13/04/2022",
//     "productID" : 41,
//     "soldQuantity" : 360,
//     "description": "Tai nghe Bluetooth SoundPeats Air3 Deluxe"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/LpvphHX/audio-13.webp",
//     "productName": "Loa Bluetooth Karaoke SDRD-608",
//     "price": 699000,
//     "stockQuantity": 78,
//     "manufacture" : "SDRD",
//     "releaseDate": "09/04/2022",
//     "productID" : 42,
//     "soldQuantity" : 370,
//     "description": "Loa Bluetooth Karaoke SDRD-608"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/0s8q3sN/watch-1.webp",
//     "productName": "Đồng hồ thông minh Approach S12",
//     "price": 24990000,
//     "stockQuantity": 111,
//     "manufacture" : "ASUS",
//     "releaseDate": "02/05/2022",
//     "productID" : 43,
//     "soldQuantity" : 380,
//     "description": "Đồng hồ thông minh Approach S12"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/cYB97qy/watch-2.webp",
//     "productName": "Đồng hồ thông minh Fenix 7X",
//     "price": 19690000,
//     "stockQuantity": 100,
//     "manufacture" : "Fenix",
//     "releaseDate": "03/05/2022",
//     "productID" : 44,
//     "soldQuantity" : 390,
//     "description": "Đồng hồ thông minh Fenix 7X"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/sbjRpKr/watch-3.webp",
//     "productName": "Đồng hồ thông minh Vivomore Sport",
//     "price": 26190000,
//     "stockQuantity": 88,
//     "manufacture" : "Vivomore",
//     "releaseDate": "04/05/2022",
//     "productID" : 45,
//     "soldQuantity" : 400,
//     "description": "Đồng hồ thông minh Vivomore Sport"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/L1Zh98N/watch-4.webp",
//     "productName": "Đồng hồ thông minh Garmin Epix Gen 2",
//     "price": 18590000,
//     "stockQuantity": 11,
//     "manufacture" : "Garmin",
//     "releaseDate": "07/05/2022",
//     "productID" : 46,
//     "soldQuantity" : 410,
//     "description": "Đồng hồ thông minh Garmin Epix Gen 2"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/7WygS4t/watch-5.webp",
//     "productName": "Đồng hồ thông minh Samsung Galaxy Watch 5",
//     "price": 26490000,
//     "stockQuantity": 101,
//     "manufacture" : "Samsung",
//     "releaseDate": "09/05/2022",
//     "productID" : 47,
//     "soldQuantity" : 420,
//     "description": "Đồng hồ thông minh Samsung Galaxy Watch 5"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/GspCYSF/watch-6.webp",
//     "productName": "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro",
//     "price": 16990000,
//     "stockQuantity": 48,
//     "manufacture" : "Samsung",
//     "releaseDate": "10/05/2022",
//     "productID" : 48,
//     "soldQuantity" : 430,
//     "description": "Đồng hồ thông minh Samsung Galaxy Watch 5 Pro"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/VQnL7mT/watch-7.webp",
//     "productName": "Đồng hồ thông minh Asus Vivowatch BP",
//     "price": 8990000,
//     "stockQuantity": 71,
//     "manufacture" : "ASUS",
//     "releaseDate": "21/05/2022",
//     "productID" : 49,
//     "soldQuantity" : 440,
//     "description": "Đồng hồ thông minh Asus Vivowatch BP"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/rsMTQ8F/watch-8.webp",
//     "productName": "Đồng hồ thông minh Asus Vivowatch 5",
//     "price": 10990000,
//     "stockQuantity": 81,
//     "manufacture" : "ASUS",
//     "releaseDate": "19/05/2022",
//     "productID" : 50,
//     "soldQuantity" : 450,
//     "description": "Đồng hồ thông minh Asus Vivowatch 5",
//   },
//   {
//     "imageUrl": "https://i.ibb.co/QMzsj1c/watch-9.webp",
//     "productName": "Đồng hồ thông minh Garmin Instinct 2",
//     "price": 17990000,
//     "stockQuantity": 97,
//     "manufacture" : "Garmin",
//     "releaseDate": "16/05/2022",
//     "productID" : 51,
//     "soldQuantity" : 460,
//     "description": "Đồng hồ thông minh Garmin Instinct 2"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/B6zZ0KQ/watch-10.webp",
//     "productName": "Đồng hồ thông minh Garmin Forerunner 955",
//     "price": 12990000,
//     "stockQuantity": 99,
//     "manufacture" : "Garmin",
//     "releaseDate": "22/05/2022",
//     "productID" : 52,
//     "soldQuantity" : 470,
//     "description": "Đồng hồ thông minh Garmin Forerunner 955"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/3vvj37K/component-1.webp",
//     "productName": "Ổ cứng vi tính gắn trong Corsair MP600",
//     "price": 2490000,
//     "stockQuantity": 111,
//     "manufacture" : "Corsair",
//     "releaseDate": "21/05/2022",
//     "productID" : 53,
//     "soldQuantity" : 480,
//     "description": "Ổ cứng vi tính gắn trong Corsair MP600",
//   },
//   {
//     "imageUrl": "https://i.ibb.co/njwXXN1/component-2.webp",
//     "productName": "Cáp truyền dữ liệu USB 3.0 1m Ugreen 10839",
//     "price": 879000,
//     "stockQuantity": 91,
//     "manufacture" : "Ugreen",
//     "releaseDate": "26/05/2022",
//     "productID" : 54,
//     "soldQuantity" : 490,
//     "description": "Cáp truyền dữ liệu USB 3.0 1m Ugreen 10839"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/pwLGTDw/component-3.webp",
//     "productName": "Vỏ máy tính Cooler Master MasterBox MB511 ARGB",
//     "price": 899000,
//     "stockQuantity": 84,
//     "manufacture" : "ARGB",
//     "releaseDate": "31/05/2022",
//     "productID" : 55,
//     "soldQuantity" : 500,
//     "description": "Vỏ máy tính Cooler Master MasterBox MB511 ARGB"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/0ynKTb1/component-4.webp",
//     "productName": "Cáp HDMI 2.0 1m Unitek Y-C153BK",
//     "price": 299000,
//     "stockQuantity": 77,
//     "manufacture" : "Unitek",
//     "releaseDate": "14/05/2022",
//     "productID" : 56,
//     "soldQuantity" : 510,
//     "description": "Cáp HDMI 2.0 1m Unitek Y-C153BK"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/JqgmC1V/component-5.webp",
//     "productName": "Ổ cứng di động SSD Samsung T7 Touch 1TB",
//     "price": 1590000,
//     "stockQuantity": 104,
//     "manufacture" : "Samsung",
//     "releaseDate": "28/05/2022",
//     "productID" : 57,
//     "soldQuantity" : 520,
//     "description": "Ổ cứng di động SSD Samsung T7 Touch 1TB"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/8cFNRkV/component-6.webp",
//     "productName": "Card màn hình MSI GeForce RTX 3060 Ti Ventus 2X OC",
//     "price": 699000,
//     "stockQuantity": 91,
//     "manufacture" : "MSI",
//     "releaseDate": "19/05/2022",
//     "productID" : 58,
//     "soldQuantity" : 530,
//     "description": "Card màn hình MSI GeForce RTX 3060 Ti Ventus 2X OC"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/x3rvR3s/component-7.webp",
//     "productName": "Tản nhiệt nước MSI MAG CoreLiquid 240R",
//     "price": 2890000,
//     "stockQuantity": 101,
//     "manufacture" : "MSI",
//     "releaseDate": "24/05/2022",
//     "productID" : 59,
//     "soldQuantity" : 540,
//     "description": "Tản nhiệt nước MSI MAG CoreLiquid 240R"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/f89z6Hv/component-8.webp",
//     "productName": "Tản nhiệt nước MSI MAG CoreLiquid 360R",
//     "price": 2990000,
//     "stockQuantity": 112,
//     "manufacture" : "MSI",
//     "releaseDate": "24/05/2022",
//     "productID" : 60,
//     "soldQuantity" : 550,
//     "description": "Tản nhiệt nước MSI MAG CoreLiquid 360R"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/pJwdXYZ/component-9.webp",
//     "productName": "Ghế gaming Cooler Master Caliber R2",
//     "price": 5790000,
//     "stockQuantity": 91,
//     "manufacture" : "Caliber",
//     "releaseDate": "02/05/2022",
//     "productID" : 61,
//     "soldQuantity" : 560,
//     "description": "Ghế gaming Cooler Master Caliber R2"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/rH2knLh/component-10.webp",
//     "productName": "Balo gaming MSI Mystic Knight",
//     "price": 2990000,
//     "stockQuantity": 89,
//     "manufacture" : "MSI",
//     "releaseDate": "02/05/2022",
//     "productID" : 62,
//     "soldQuantity" : 570,
//     "description": "Balo gaming MSI Mystic Knight"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/t3gprfp/component-11.webp",
//     "productName": "Túi đựng laptop 14 inch MSI Urban Raider",
//     "price": 1890000,
//     "stockQuantity": 60,
//     "manufacture" : "MSI",
//     "releaseDate": "03/05/2022",
//     "productID" : 63,
//     "soldQuantity" : 580,
//     "description": "Túi đựng laptop 14 inch MSI Urban Raider"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/3f4G8S2/internet-1.webp",
//     "productName": "Bộ phát Wifi Indoor Grandstream GWN7605LR",
//     "price": 24990000,
//     "stockQuantity": 11,
//     "manufacture" : "Grandstream",
//     "releaseDate": "01/06/2022",
//     "productID" : 64,
//     "soldQuantity" : 590,
//     "description": "Bộ phát Wifi Indoor Grandstream GWN7605LR"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/8xFcCND/internet-2.webp",
//     "productName": "Router Wifi 6 TP-Link Archer AX80",
//     "price": 19690000,
//     "stockQuantity": 13,
//     "manufacture" : "Archer",
//     "releaseDate": "06/06/2022",
//     "productID" : 65,
//     "soldQuantity" : 600,
//     "description": "Router Wifi 6 TP-Link Archer AX80"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/ySQH6dH/internet-3.webp",
//     "productName": "Bộ chuyển đổi USB Wifi Ăng Ten Kép AX1800",
//     "price": 26190000,
//     "stockQuantity": 18,
//     "manufacture" : "Archer",
//     "releaseDate": "09/06/2022",
//     "productID" : 66,
//     "soldQuantity" : 610,
//     "description": "Bộ chuyển đổi USB Wifi Ăng Ten Kép AX1800"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/LYNTNrD/internet-4.webp",
//     "productName": "Card Wifi AX3000 Gigabyte GC-WBAX200",
//     "price": 1590000,
//     "stockQuantity": 21,
//     "manufacture" : "ASUS",
//     "releaseDate": "10/06/2022",
//     "productID" : 67,
//     "soldQuantity" : 620,
//     "description": "Card Wifi AX3000 Gigabyte GC-WBAX200"
//   },
//   {
//     "imageUrl": "https://i.ibb.co/61DQ7zW/internet-5.webp",
//     "productName": "Bộ chuyển đổi USB Wifi Nano Bluetooth 4.2",
//     "price": 649000,
//     "stockQuantity": 19,
//     "manufacture" : "ASUS",
//     "releaseDate": "15/06/2022",
//     "productID" : 68,
//     "soldQuantity" : 630,
//     "description": "Bộ chuyển đổi USB Wifi Nano Bluetooth 4.2"
//   }
// ];
  
router.get("/", (req, res) => {
    res.send({
        products: data,
    });
});


export { router };

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