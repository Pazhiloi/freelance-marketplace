import { user11, user6 } from "./usersImages";
import pc from "../assets/images/pc.png";
const myWorks: any[] = []
const myReviews: any[] = []
const works: any[] = []

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
    price: 50000,
    img: pc,
  };
  myWorks.push(myWork)
}

for (let i = 0; i < 5; i++) {
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
};

works.push(work);
  
}

export { works, myWorks, myReviews};