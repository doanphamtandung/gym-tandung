import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Tạ tay",
      category: "dung-cu",
      price: 50000,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Dây nhảy",
      category: "dung-cu",
      price: 20000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.LXRW7oN5uruqTVuso9XU4gHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      name: "Thanh xà đơn",
      category: "dung-cu",
      price: 20000,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.4wNEq6L00GqLARDm5AG9YwHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      name: "Ghế tập tạ",
      category: "dung-cu",
      price: 1000000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.xN_ILge0b8x5Wv2lMjIkPgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      name: "Dụng cụ tập cơ tay",
      category: "dung-cu",
      price: 100000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.TAcWq7Tntm8eXvIDgWPVOgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 6,
      name: "Găng tay tập tạ ",
      category: "dung-cu",
      price: 150000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.xN_ILge0b8x5Wv2lMjIkPgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 7,
      name: "Bánh xe tập bụng",
      category: "dung-cu",
      price: 300000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.wG4oV-wi5lF3yl2FIAx2KwHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 8,
      name: "Tay cầm chống đẩy",
      category: "dung-cu",
      price: 250000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.ygRnUzFv_OPCXw6hKRncngHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 9,
      name: "Dây kháng lực",
      category: "dung-cu",
      price: 80000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.I9r7FcFo7MvQYaa5QL2IVgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 10,
      name: "Bao cát điều chỉnh",
      category: "dung-cu",
      price: 2000000,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.BV53MdvEDsDezx73BTMfjwHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 1,
      name: "Quần thể thao nam",
      category: "quan-ao",
      price: 300000,
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREBASDw8NDw8PEBAQDw8QDQ8PDw8PFhEWFhcRFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ0PFSsdFRkrLSstKysrKysrNzctKy0rLS0tKystKysrLSs3Ky03Ky03Ky0rKysrKystKy0rLSstK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAYHBQj/xABAEAACAQICBQkECAQHAQAAAAAAAQIDEQQhBRIxUXEGByIyQWGBkbETQqHBUmJygpKy0fAUQ8LhFyNTVHN0ojT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARESMf/aAAwDAQACEQMRAD8A6qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBx+mMNQlGFevSoymtaKqTUbq9r3eXYzIw2Lp1FelUp1FvhOM18Gcb51MV7XSE4XyowpU7X7ba7+MzWHFXvZXSVpW6SdtqZNH0kUPn7DaYxVO2pisXC18liatvJtoz6HLTSUNmMqSztadOjP1jcaO5A43T5yNIxWcsNOzt0sO03+GSMmPOdjltpYKWdupWjf/2NHWwco/xRxf8At8H29tb9eBX/ABUxNr/wuG/HVt67xo6sDlS50sT24bC9nv1Q+dHFf7bCr71V9g0dVByWpzo4y2VHBxztfVrS/rRi1ecbSMtk8PDP3MOv6mxo7IUqTUVeTUUtrk0l5s4ZiOWWkp5PF1UmnlBU6efGMU/ieNia86rvVnKpLfUnKo8++TY0d0xnKzR9K+vi6Da2qEvavyhcroXlNhcW5rD1JSdNxUtaEobb2avwZwTizY+QWko0MZHWlqRrRdNvs18nG/irX7xo7gCNOV0nvJFAAAAAAAAAAAAAANf5b6b/AITCtwdq1a9Olvjl0p+C+LRsByLnG0n7bGunF3hh4+zW72ju5vzsvuko0vFVZVKtSrOpKU30pzk9ZyfeUtK2aWxN9m3s4/oRqRtPubzMzE7LmRiqTzyb1cnaz2kVUyvs2bU13MYT397aZeqbe5psC3GV7Ws9n9xu/eW8t4a13kms5LLZfKS9H4slTz463wtsAk/kyMl2fvaEs5d3e+7+5Skk73vlbtff/YCcY2WW59t87lZP17thboZx4a2/6VkRqO3tPqpW/fgFXG9vHIo59+x/Ija2pe3Su2rbF2IUIuSTfVcnN7rLJL4BE893bwIu99mW9vv7vAuJlZxvdfVYVTUtfPZuViXAhrWefal5kqa2gdj5vdOvEYdRm71aXQm+2X0ZeK+KZtpxLkLpJ0MZTV7Qr3pS3azzg/xJL7zO105XSe9GoiQAKAAAAAAAAAAAxdK4xUaFWq/5VOU+LSyXnY4BVqtycpNuUpNyb2tt5s67zl4vUwWottapGP3Y9J/FR8zjtVmaK4uGaki5Wd4Eo5qxbn1bGVYuFeZexOwx6eUjIxPVKizgFkylN2kV0e9oxMbO4EveffYpD3xfNPeVWyfACmB6j4v1LNTNTW+yL2B6niy1Hb964VXG5W4WMiKtCK+qWMZm0ZE10VwAhTJ9vgQpk2Baki5AiycQITquOrKOUoyjKL3STuj6E0LilVowmtk4xmuEopr1Pnit2cTtPNzitfBUV2xjKn+CTS/82LEbYADQAAAAAAAAAADnXOxX6WGhuhUm/Fpf0nNqxu3OhWvjLfQpQXnd/M0qWwxfRODJMtxJJkGLUjZk6z6JcqwuWJ9WxRHBl+vG6MfD5My+wDEiy72S4FuorMuR2PgFUwfU8Zepap9cvYXq+fqy3SXSYRWorzRfqluK6ROoFW4kyCJIAyRQqyCzUOn81GJ/y6sL9SqpeE4W9YM5hLabvzYYjVxNWH06Sl4wmvlNlg68ADaAAAAAAAAAAA4xzhVL4+v3OC8qcUa12Hvct5Xx2J/5ZLysjwjAiirFigEky1ViSKsDFtYyKciMokI5ATrRKQ2EmRiFKKsvP1ZGmukycNhGG1hE4bRUKxIyYVEkigQEwylwyC0nmbLyGrauOo/XVSD8YN+qRrS2nr8nquri8K91emvOVvmUd8pO8VwRItYR9BF02gAAAAAAAAAAOGcrnfG4v/sVfzM8c9flb/8Adi/+xU/MeQYUIkijIIlCpRlQItC4uFVRQqgBFCJTf++wqBUoxYAAAAKsFCCDeZmYSerUpy+jUhLykmYc7l5vIo+iME+j4svmLo99HxMo2gAAAAAAAAAAOGcr1bH4z/nl8czxz3uXsNXSWKW+VOXnSi/W54RiihRlWQkBFsi2VKqIEVEnGBNIhUqW2BScrFKKzIW3l6GSAhiKLpz1ZbXCnNfZnBSXwaInucusH7KvQyspYSgvGEdR/lR4SAqCgAqChUBcoVaKEFJontRCa4mXovDupVo01tqVIQ4Jys34Io7/AKO6vj8jKMfAro8WzINoAAAAAAAAAADl3O1otQrUcTFZVU6dR/XjbVb4rL7pox27lro1YjA142vKEXVhv1oK9lxV14nEYO6We4xRQi0SZFkESUUUsGUUnPcUjDeVSJNhVuTMrCUdedOH+pUhD8UkvmYp7nJKjr43DLsVRzf3IuXqkBsPOvg+hhKq2KVak/FRlH0kc/hsOxc4+C19GSla7ozp1fBtwfwmcco7C1EwBYiqFQLALgF2GHnLqwm+EHbzAsv92Nq5usB7TFKbXRw8JS+/LoxX5n4GLojkji8RHWgoQjrON5zad13RTfadF5F8mJ4OMlOSnKpNSlJRaSilZRz29vmWRG2UY2iluRIA0AAAAAAAAAAAHiad0Hh50KzdClrKnKSfs43ulfbbuPbIV4XhJfSjJeasBxvE6Lo52hbpWylJZarXrYtV9CU3JKDnHLN3uepq5du8Ql27L7zfMHjT0Auyq/GC/UsvQElsqQfGLX6nuua3kHMnMHgS0JVWx03wk/mjHqaMrL3L8JRfzNm1ijJxBq0NH13fVoVpaub1aU5WW92Rs3N3hpfxknOMounRk+lFrpSlGPb3axvXJDAatOLazqdOX2fdXln4myPDw+ijODE0zgvbYSvR7alCpBfacHb42OAYPCVZxvClWlZNvVpTlZLO7ssj6OLdTDwlfWinfJ8BYPn2Gjaz/lyXHVj6l+Ghaj60oR8XJm0aSoOlUqQfuTceNnk/Iw1I1zB5lPQkPenJ8Eo/qZMNF0V7l/tNsykVsXIIU6MY9WMY8IpFy5Fi5RvfImP+VHvlUfy+RtBrvI2NqFP7M35zZsRigAAAAAAAAAAAAAAADCq6JoSbbpwz+pH9DHnyewz/AJcVwVvQ9UAeDU5KYd7E1wnP9TFq8jKT2TmvFP5G0AujTanIr6NV/hXyaLE+R9W66cXG6vk09XttmzeQNGPgaOrHZbu3JbEZABAAAGn8qeTdWtiPa0nBQlGOvdu+urq9uCiYVDkdUfWqJcIX+ORvoLo0+nyLXvVJ+DUf1MqnyOoLbrPjN/KxswG0eNR5NYaP8uD4rW/NczKWiqMdkIrhGK9EZoILdKjGPVVi4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
    },
    {
      id: 2,
      name: "Áo thể thao nam",
      category: "quan-ao",
      price: 300000,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.bkRX648L-diEI-czHoOqnwHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      name: "Quần short tập gym nam",
      category: "quan-ao",
      price: 300000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.MsRUt-8Yjf5JCQQDq0LchgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      name: "Quần short tập gym nữ",
      category: "quan-ao",
      price: 300000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.FPB46HIE8RKiJNI7NhpM6gHaHl&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      name: "quần áo tập gym yoga",
      category: "quan-ao",
      price: 300000,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.2KGzPB5UpDaFRBY5RgoXWgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 6,
      name: "Áo ba lỗ body gymshark A39",
      category: "quan-ao",
      price: 300000,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.JuowH4gFibalhuhNi5PeOwHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 7,
      name: "set tập yoga co dãn B93",
      category: "quan-ao",
      price: 300000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.AsFDKlF5n9co5FWQua-lcAHaKh&pid=Api&P=0&h=220",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
