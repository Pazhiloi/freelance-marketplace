import { user11, user4, user6 } from "./usersImages";
import pc from "../assets/images/pc.png";
import { orderDocument } from "./data";
const myWorks: any[] = []
const myReviews: any[] = []
const works: any[] = []
const orderDocuments: any[] = []
const plans : any[] = []


for (let i = 0; i < 3; i++) {
  const titles = ["Эконом пакет", "Стандартный пакет", "Премиум пакет"]
  const options = [];

  for (let j = 0; j < 3; j++) {
    const optionTitles = [
      "Планшетная версия",
      "Перенести в фотошоп",
      "Подготовка к верстке",
    ];
    const option = {
      id: j + 1,
      title: optionTitles[j],
      text: `Настройка всех слоев и назвать так чтобы было понятно верстальщику.`,
      term: 1,
      price: 5000,
    };

  options.push(option);

  }
  
  
  const plan = {
    id: i + 1,
    title: titles[i],
    desc: `Дизайн лэндинга с мобильной и компьютерной версией дизайна.`,
    price: 50000 * (i + 1),
    term: 5 - (i + 1),
    revisions: 5 * (i + 1),
    bottomTitle: `Дополнительные опции`,
    options
  };

  plans.push(plan)
}



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
    price: Math.floor(Math.random() * 50000),
    improvements: 5,
    workTerm: 3
  };
  myReviews.push(myReview);
  
}

for (let i = 0; i < 11; i++) {
  const statuses = ["Завершено", "Виконується"];
  const randomStatusIndex = Math.floor(Math.random() * statuses.length);
  const randomStatus = statuses[randomStatusIndex];

  const plans = ["Стандарт пакет", "Економ пакет", "Преміум пакет"];
  const randomPlanIndex = Math.floor(Math.random() * plans.length);
  const randomPlan = plans[randomPlanIndex];

  
  const myWork = {
    id: i + 1,
    title: `Дизайн сайту`,
    price: Math.floor(Math.random() * 50000),
    img: pc,
    userImg: user4,
    name: "Екатерина Иванова",
    rating: 4,
    projects: 45,
    status: randomStatus,
    date: `26.03.2021`,
    plan: randomPlan,
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

export { works, myWorks, myReviews, orderDocuments, plans };