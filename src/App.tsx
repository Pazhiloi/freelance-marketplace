import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MarketPage from "./pages/MarketPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
