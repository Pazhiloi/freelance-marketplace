import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MarketPage from "./pages/MarketPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import FeaturedPage from "./pages/FeaturedPage";
import OrderPage from "./pages/OrderPage";
import WorksPage from "./pages/WorksPage";
import HistoryPage from "./pages/HistoryPage";
function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/orders' element={<OrdersPage/>}/>
        <Route path='/featured' element={<FeaturedPage/>}/>
        <Route path='/works' element={<WorksPage/>}/>
        <Route path='/history' element={<HistoryPage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
