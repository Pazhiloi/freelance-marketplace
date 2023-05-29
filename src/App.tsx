import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MarketPage from "./pages/MarketPage";
function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
