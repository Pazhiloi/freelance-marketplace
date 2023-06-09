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
import CreateOrderPage from "./pages/CreateOrderPage";
import WorkPage from "./pages/WorkPage";
import RightsPage from "./pages/RightsPage";
import SecPolicyPage from "./pages/SecPolicyPage";
import ChatPage from "./pages/ChatPage";
import CreateWorkPage from "./pages/CreateWorkPage";
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
        <Route path='/work' element={<WorkPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
        <Route path='/rights' element={<RightsPage/>}/>
        <Route path='/security' element={<SecPolicyPage/>}/>
        <Route path='/create/order' element={<CreateOrderPage/>}/>
        <Route path='/create/work' element={<CreateWorkPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
