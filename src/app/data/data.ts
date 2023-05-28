import logo from "../assets/images/logo.png";
import avatar1 from "../assets/images/avatar1.png";
import chevronDown from "../assets/images/chevron-down.png";
import topStar from "../assets/images/top-star.png";
import topChat from "../assets/images/top-chat.png";
import closeIcon from "../assets/images/close-icon.svg";
import notification from "../assets/images/notification.png";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import menu from "../assets/images/menu.svg";
import introduce from "../assets/images/introduce.jpg";

const rubrics = [
  {
    id: 1,
    title: `Тексти і переклади`,
  },
  {
    id: 2,
    title: `Розробка`,
  },
  {
    id: 3,
    title: `Дизайн`,
  },
  {
    id: 4,
    title: `Аудіо, відео монтаж`,
  },
  {
    id: 5,
    title: `SEO і оптимізація`,
  },
  {
    id: 6,
    title: `Бізнес  і життя`,
  },
  {
    id: 7,
    title: `Соцмережі і реклама`,
  },
];

const navItems = [
  {
    id: 1,
    title: `Біржа`,
    link: "/a",
  },
  {
    id: 2,
    title: `Ворки`,
    link: "/b",
  },
  // {
  //   id: 3,
  //   title: `Конкурси`,
  //   link: '/c',
  // },
  {
    id: 4,
    title: `Створити ворк`,
    link: "/d",
  },
  {
    id: 5,
    title: `Створити замовлення`,
    link: "/e",
  },
];

const footerItems = [
  {
    id: 1,
    title: `Топ категорії`,
    inner: [
      {
        id: 1,
        title: `Тексти і переклади`,
      },
      {
        id: 2,
        title: `Розробка`,
      },
      {
        id: 3,
        title: `Дизайн`,
      },
      {
        id: 4,
        title: `Аудіо, видео монтаж`,
      },
      {
        id: 5,
        title: `Соцмережі і реклама`,
      },
      {
        id: 6,
        title: `Бізнес и життя`,
      },
      {
        id: 7,
        title: `SEO і оптимізація`,
      },
    ],
  },
  {
    id: 2,
    title: `Про проект`,
    inner: [
      {
        id: 1,
        title: `Про Нас`,
      },
      {
        id: 2,
        title: `Як Це Працює`,
      },
      {
        id: 3,
        title: `Політика Приватності`,
      },
      {
        id: 4,
        title: `Політика користування`,
      },
    ],
  },
  {
    id: 3,
    title: `Підтримка`,
    inner: [
      {
        id: 1,
        title: `Контакти`,
      },
      {
        id: 2,
        title: `Політика Безпеки`,
      },
      {
        id: 3,
        title: `FAQ`,
      },
    ],
  },
];

const followImages = [
  {
    id: 1,
    desc: "Facebook",
    img: facebook,
  },
  {
    id: 2,
    desc: "Twitter",
    img: twitter,
  },
  {
    id: 3,
    desc: "Instagram",
    img: instagram,
  },
  {
    id: 4,
    desc: "Linkedin",
    img: linkedin,
  },
];

export {
  introduce,
  logo,
  navItems,
  footerItems,
  followImages,
  menu,
  avatar1,
  chevronDown,
  topStar,
  topChat,
  notification,
  closeIcon,
  rubrics,
};
