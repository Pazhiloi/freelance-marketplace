import {
  avatar1,
  avatar2,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
} from "./usersImages";

import logo from "../assets/images/logo.png";
import chevronDown from "../assets/images/chevron-down.png";
import pageUp from "../assets/images/page-up-major.png";
import pageDown from "../assets/images/page-down.png";
import fileText from "../assets/images/file-text.png";
import chevronRight from "../assets/images/chevron-right.png";
import orderDocument from "../assets/images/order-document.png";
import topStar from "../assets/images/top-star.png";
import topChat from "../assets/images/top-chat.png";
import closeIcon from "../assets/images/close-icon.svg";
import fileMenu from "../assets/images/fileMenu.svg";
import notification from "../assets/images/notification.png";
import add from "../assets/images/add.png";
import addOrange from "../assets/images/addOrange.png";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import globe from "../assets/images/globe.svg";
import clock from "../assets/images/clock.svg";
import bank from "../assets/images/bank.svg";
import languageIcon from "../assets/images/language-icon.svg";
import note from "../assets/images/note.svg";
import settings from "../assets/images/settings.svg";
import menu from "../assets/images/menu.svg";
import introduce from "../assets/images/introduce.jpg";
import frame1 from "../assets/images/slider/frame1.jpg";
import frame2 from "../assets/images/slider/frame2.jpg";
import frame3 from "../assets/images/slider/frame3.jpg";
import frame4 from "../assets/images/slider/frame4.jpg";
import sliderBtn from "../assets/images/slider/sliderbtn.png";
import { works } from "./works";

const sliderItems = [
  {
    id: 1,
    img: frame1
  },
  {
    id: 2,
    img: frame2
  },
  {
    id: 3,
    img: frame3
  },
  {
    id: 4,
    img: frame4
  },
  {
    id: 5,
    img: frame1
  },
  {
    id: 6,
    img: frame2
  },
  {
    id: 7,
    img: frame3
  },
  {
    id: 8,
    img: frame4
  },
  {
    id: 9,
    img: frame1
  },
  {
    id: 10,
    img: frame2
  },
  {
    id: 11,
    img: frame3
  },
  {
    id: 12,
    img: frame4
  },
  {
    id: 13,
    img: frame1
  },
  {
    id: 14,
    img: frame2
  },
  {
    id: 15,
    img: frame3
  },
  {
    id: 16,
    img: frame4
  },
]

const tags = [
  {
    id: 1,
    title: `Дизайн`,
  },
  {
    id: 2,
    title: `Веб і мобільний дизайн`,
  },
  {
    id: 3,
    title: `Веб-дизайн`,
  },
];
const detailedInfo = [
  {
    id: 1,
    img: globe,
    title: `Казахстан, Алматы`,
    name: `Країна`,
  },
  {
    id: 2,
    img: clock,
    title: 3,
    name: `Досвід на сайті`,
  },
  {
    id: 3,
    img: bank,
    title: `Казахстан, КазНУ, Бакалавр`,
    name: `Освіта`,
  },
  {
    id: 4,
    img: languageIcon,
    title: `Казахский, Русский`,
    name: `Знання мов`,
  },
  {
    id: 5,
    img: note,
    title: `Сертификат 1, 2020 года`,
    name: `Сертифікати`,
  },
];

const skills = [
  {
    id: 1,
    skill: `Figma`,
  },
  {
    id: 2,
    skill: `Adobe photoshop`,
  },
  {
    id: 3,
    skill: `Adobe illustrator`,
  },
  {
    id: 4,
    skill: `Corel draw`,
  },
  {
    id: 5,
    skill: `Adobe After Effects`,
  },
  {
    id: 6,
    skill: `HTML/CSS`,
  },
];

const topWorkers = [
  {
    id: 1,
    img: user6,
    name: `Марина Королёва`,
    profession: `Разработчик PHP`,
    projectsCompleted: 65,
    rating: 4.5,
    online: true,
  },
  {
    id: 2,
    img: user7,
    name: `Семён Сергеев`,
    profession: `Копирайтер`,
    projectsCompleted: 104,
    rating: 4,
    online: true,
  },
  {
    id: 3,
    img: user8,
    name: `Ангелина Сорокина`,
    profession: `Дизайнер сайтов`,
    projectsCompleted: 25,
    rating: 5,
    online: false,
  },
  {
    id: 4,
    img: user9,
    name: `Никита Зайцев`,
    profession: `Маркетолог`,
    projectsCompleted: 144,
    rating: 4,
    online: true,
  },
  {
    id: 5,
    img: user10,
    name: `Наталья Захарова`,
    profession: `Motion дизайнер`,
    projectsCompleted: 71,
    rating: 5,
    online: false,
  },
];

const actualWorks = [
  {
    id: 1,
    img: user1,
    title: `Зробити дизайн інтернет-магазину`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...`,
  },
  {
    id: 2,
    img: user2,
    title: `Зверстати landing page`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...`,
  },
  {
    id: 3,
    img: user3,
    title: `Зробити дизайн сайту-каталогу і посадити на який-небудь ко...`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...`,
  },
  {
    id: 4,
    img: user4,
    title: `Просування instagram`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...`,
  },
  {
    id: 5,
    img: user5,
    title: `Потрібен веб дизайнер!`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...`,
  },
];
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
    link: "/market",
  },
  {
    id: 2,
    title: `Ворки`,
    link: "/works",
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
const faqs = [
  {
    id: 1,
    title: `Исходники будут?`,
    text: `Мы создаем продукт, а не баннер для рекламы. При созданий продукта которыми будут пользоваться люди в первую очередь нужно обратить внимание на удобство. Это не значит что дизайн будет уродским, нет он будет приятен глазу и будет подходит тематике сайта.`,
  },
  {
    id: 2,
    title: `А в каком формате я получу исходники?`,
    text: `Мы создаем продукт, а не баннер для рекламы. При созданий продукта которыми будут пользоваться люди в первую очередь нужно обратить внимание на удобство. Это не значит что дизайн будет уродским, нет он будет приятен глазу и будет подходит тематике сайта.`,
  },
  {
    id: 3,
    title: `А что если мне не понравиться дизайн?`,
    text: `Мы создаем продукт, а не баннер для рекламы. При созданий продукта которыми будут пользоваться люди в первую очередь нужно обратить внимание на удобство. Это не значит что дизайн будет уродским, нет он будет приятен глазу и будет подходит тематике сайта.`,
  },
];
export {
  addOrange,
  fileMenu,
  sliderBtn,
  sliderItems,
  faqs,
  pageUp,
  pageDown,
  fileText,
  orderDocument,
  chevronRight,
  tags,
  add,
  settings,
  avatar2,
  detailedInfo,
  skills,
  works,
  topWorkers,
  actualWorks,
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
