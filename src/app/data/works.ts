import { user6 } from "./usersImages";

const works: any[] = []

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

export {
  works
}