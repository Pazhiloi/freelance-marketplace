import { user11, user4, user6 } from "./usersImages";
import pc from "../assets/images/pc.png";
import { orderDocument } from "./data";
const myWorks: any[] = []
const myReviews: any[] = []
const works: any[] = []
const orderDocuments: any[] = []

for (let i = 0; i < 3; i++) {
  const document = {
    id: i + 1,
    img: orderDocument,
    title: `Документ ${i + 1}.png `,
  };
  orderDocuments.push(document);
}

for (let i = 0; i < 6; i++) {
  const myReview = {
    id: i + 1,
    name: `Никита Евреев`,
    rating: 4,
    img: user11,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. `,
  };
  myReviews.push(myReview);
  
}

for (let i = 0; i < 11; i++) {
  const myWork = {
    id: i + 1,
    title: `Дизайн сайту`,
    price: Math.floor(Math.random() * 50000),
    img: pc,
    userImg: user4,
    name: "Екатерина Иванова",
    rating: 4,
    projects: 45,
  };
  myWorks.push(myWork)
}

for (let i = 0; i < 5; i++) {
  const statuses = ["Прийом ставок", "Завершено", "Закритий", "Виконується"];
  const randomStatusIndex = Math.floor(Math.random() * statuses.length);
  const randomStatus = statuses[randomStatusIndex];
const work = {
  id: i + 1,
  title: "Нужно сделать Дизайн сайта по тематике авто",
  price: Math.floor(Math.random() * 50000),
  name: "Екатерина Иванова",
  img: user6,
  projects: 25,
  rating: 4,
  reviews: 15,
  uploaded: "4 часа 28 минут назад",
  offers: 50,
  status: randomStatus,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse. Est lacus eros nec fermentum, id gravida. Dui aliquet dolor convallis mauris. Massa in ultricies vitae varius habitasse. Est lacus eros nec fermentum...`,
};

works.push(work);
  
}

export { works, myWorks, myReviews, orderDocuments };