import { IItem, ReleaseItem, Igoods } from "./store/interface";

export const sort = [
  {
    title: "Показывать:",
    class: "",
  },
  {
    title: "Все товары",
    class: "Show",
  },
  {
    title: "В наличии",
    class: "Show",
  },
  {
    title: "По названию",
    class: "Show",
  },
  {
    title: "По цене",
    class: "Show",
  },
]
export const goods: Igoods[] = [
    {
      name: 'Z NJZ702MLFS-AR',
      company: 'Daiwa',
      collection: 'Ninja',
      group: 'Удилища',
      subgroup:'Спиннинг',
      description: 'Описание',
      img: '/images/goods/spinnings/Branzino EX AGS 99I-LH.webp',      
      price: 8400,
    },
    {
      name: 'Z NJZ802MFS-AR',
      company: 'Daiwa',
      collection: 'Ninja',
      group: 'Удилища',
      subgroup:'Спиннинг',
      description: 'Описание',
      img: '/images/goods/spinnings/Daiwa Morethan Branzino EX AGS 94MMH.webp',
      price: 43630,
    },
    {
      name: 'Z NJZ802MHFS-AR',
      company: 'Daiwa',
      collection: 'Ninja',
      group: 'Удилища',
      subgroup:'Спиннинг',
      description: 'Описание',
      img: '/images/goods/spinnings/Daiwa Morethan Branzino EX AGS 98M-MH.webp',
      price: 47630,
    },  
    {
      name: 'Branzino EX AGS 94MMH',
      company: 'Daiwa',
      collection: 'Morethan',
      group: 'Удилища',
      subgroup:'Спиннинг',
      description: 'Описание',
      img: '/images/goods/spinnings/Daiwa Ninja Z NJZ802MFS-AR.webp',
      price: 55630,
    },
    {
      name: 'Branzino EX AGS 98M/MH',
      company: 'Daiwa',
      collection: 'Morethan',
      group: 'Удилища',
      subgroup:'Фидер',
      description: 'Описание',
      img: '/images/goods/spinnings/Daiwa Ninja Z Z NJZ802MHFS-AR.webp',
      price: 6630,
    },
    {
      name: 'Branzino EX AGS 99I/LH',
      company: 'Daiwa',
      collection: 'Morethan',
      group: 'Удилища',
      subgroup:'Кастинг',
      description: 'Описание',
      img: '/images/goods/spinnings/spinning daiwa Ninja Z NJZ702MLFS-AR.webp',
      price: 7630,
    },
    {
      name: 'FC LT 1000S',
      company: 'Daiwa',
      collection: 'Freams',
      group: 'Катушки',
      subgroup:'Безинерционные',
      description: 'Описание',
      img: '/images/goods/coils/spinningsCoils/E LT 2000S.webp',
      price: 3630,
    },
    {
      name: 'LT 2500',
      company: 'Daiwa',
      collection: 'Freams',
      group: 'Катушки',
      subgroup:'Мультипликатор',
      description: 'Описание',
      img: '/images/goods/coils/multiplierRails/LT 2500.webp',
      price: 1630,
    },
    {
      name: 'LT 3000',
      company: 'Daiwa',
      collection: 'Freams',
      group: 'Катушки',
      subgroup:'Безинерционные',
      description: 'Описание',
      img: '/images/goods/coils/spinningsCoils/E LT 3000.webp',
      price: 9630,
    },
    {
      name: 'E LT 2000S',
      company: 'Daiwa',
      collection: 'Lexa',
      group: 'Катушки',
      subgroup:'Безинерционные',
      description: 'Описание',
      img: '/images/goods/coils/spinningsCoils/FC LT 1000S.webp',
      price: 3630,
    },
    {
      name: 'E LT 2500',
      company: 'Daiwa',
      collection: 'Lexa',
      group: 'Катушки',
      subgroup:'Безинерционные',
      description: 'Описание',
      img: '/images/goods/coils/spinningsCoils/LT 2500.webp',
      price: 730,
    },
    {
      name: 'E LT 3000',
      company: 'Daiwa',
      collection: 'Lexa',
      group: 'Катушки',
      subgroup:'Безинерционные',
      description: 'Описание',
      img: '/images/goods/coils/spinningsCoils/LT 3000.webp',
      price: 5630,
    },
  ]
  export const items: IItem[] = [
    {
      value: "Удилища",
      href: "/rods",
    },
    {
      value: "Спиннинговые",
      href: "/rods/spinning",
    },
    {
      value: "Кастинговые",
      href: "/rods/casting",
    },
    {
      value: "Фидерные",
      href: "/rods/fider",
    },
    {
      value: "Daiwa",
      href: "/rods/spinning/daiwa",
    },
    {
      value: "Спиннинги Daiwa Ninja",
      href: "/rods/spinning/ninja",
    },
    {
      value: "Спиннинг Daiwa Ninja Z NJZ702MLFS-AR, 213 см, 5-20 г",
      href: "/rods/spinning/ninja/NJZ702MLFS-AR",
    },
    {
      value: "Спиннинг Daiwa Ninja Z NJZ802MFS-AR, 244 см, 10-30 г",
      href: "/rods/spinning/ninja/NJZ702MLFS-AR",
    },
    {
      value: "Спиннинги Daiwa Ninja Спиннинг Daiwa Ninja Z NJZ802MHFS-AR, 244 см, 15-50 г",
      href: "/rods/spinning/ninja/NJZ802MHFS-AR",
    },
    {
      value: "Спиннинги Daiwa Morethan",
      href: "/rods/casting/morethan",
    },
    {
      value: "Спиннинг Daiwa 22 Morethan Branzino EX AGS 94MMH, 285 см, 12-45 г",
      href: "/rods/casting/morethan/BranzinoEXAGS94MMH",
    },
    {
      value: "Спиннинг Daiwa 22 Morethan Branzino EX AGS 98M/MH, 295 см, 10-50 г",
      href: "/rods/casting/morethan/BranzinoEXAGS98M",
    },
    {
      value: "Спиннинг Daiwa 22 Morethan Branzino EX AGS 99I/LH, 395 см, 20-50 г",
      href: "/rods/casting/morethan/BranzinoEXAGS99ILH",
    },
    {
      value: "Спиннинги Daiwa Prorex",
      href: "/rods/fider",
    },
  
    {
      value: "Jackall",
      href: "/rods/casting",
    },
  
    {
      value: "Palms",
      href: "/rods/fider",
    },
    {
      value: "Катушки",
      href: "/reels",
    },
    {
      value: "Лески и шнуры",
      href: "/lines",
    },
  ];
  
    export const NewRealisesItem: ReleaseItem[] = [
      {
        picture: "/images/newReliases/блесна зеленая.jpg",
        text: "Вращающаяся блесна Yarie №672 Blender, 4.2 гр, SP6",
        price: 630,
      },
      {
        picture: "/images/newReliases/Кейс-чехол.jpg",
        text: "Кейс-чехол Garry Zonter, S, серый",
        price: 2399,
      },
      {
        picture: "/images/newReliases/колебалка голубая.jpg",
        text: "Колеблющаяся блесна Yarie №706 T-Spoon, 1.4 гр, BS-10",
        price: 495,
      },
      {
        picture: "/images/newReliases/колебалка розовая.jpg",
        text: "Колеблющаяся блесна Yarie №713 First Star, 10 г, A6",
        price: 530,
      },
      {
        picture: "/images/newReliases/спиннинг.jpg",
        text: "Спиннинг Zetrix Tezza TZS-732ML, 223 см, 2-12 г",
        price: 6480,
      },
      {
        picture: "/images/newReliases/цикада.jpg",
        text: "Раттлин Lucky Craft Air Claw S, 2.8 г, #Blow Brown Glow",
        price: 1095,
      },      
    ];
export const infoMenu = [
  {
    value:"Новинки",
    link: "/newGoods",
  },
  {
    value:"Бренды",
    link: "/brands",
  },
  {
    value:"Распродажа",
    link: "/sale",
  },
  ];
export const navItemes = [
  {
    value:"О Компании", 
    link: "/aboutCompany",
  },
  {
    value:"Доставка", 
    link: "/delivery",
  },
  {
    value:"Оплата", 
    link: "/payment",
  },
  {
    value:"Контакты", 
    link: "/contacts",
  },
  {
    value:"Статьи", 
    link: "/articles",
  },
  {
    value:"Отзывы покупателей", 
    link: "/reviews",
  },
];
export const socialNetwork = [
  {
    class: "YouTube",
    url: "https://www.youtube.com/@donfishka6772/videos",
    picture: "/images/YouTube.png",
  },
  {
    class: "VK",
    url: "https://vk.com/feed",
    picture: "/images/VK.png",
  },
  {
    class: "OK",
    url: "https://ok.ru/",
    picture: "/images/OK.png",
  },
];
export const phoneTitle = [
  {
    class: "PhonesContacts",
    value: "Контактные телефоны",
  },
  {
    class: "PhonesCity",
    value: "Москва: +7(495)999-99-99",
  },
  {
    class: "PhonesCity",
    value: "Россия: 8(800)999-99-99(бесплатный)",
  },
  {
    class: "PhonesContacts",
    value: "Месенджеры для звонков из других стран:",
  },
  {
    class: "PhonesCity",
    value: "+7(926)999-99-99",
  },
];
export const adressTitle = [
  {
    class: "Info-Text",
    value: "Адрес шоу-рума (все товары в наличии)",
    link: "",
  },
  {
    class: "Info-Text Info-Texts--white",
    value: "Москва, Большая Серпуховская, д. 46, стр. 34",
    link: "",
  },
  {
    class: "DrivingDirections",
    value: "Как проехать или дойти?",
    link: "/contacts",
  },
  {
    class: "Info-Text",
    value: "Время работы",
    link: "",
  },
  {
    class: "Info-Text Info-Texts--white",
    value: "Ежедневно c 10:00 до 21:00",
    link: "",
  },
];
