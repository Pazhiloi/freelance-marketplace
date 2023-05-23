import { Provider } from "react-redux";
import {FC,  ReactNode } from 'react'
import { store } from "../store/store";
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "../components/layout/Layout";

interface IMainProvider{
  children: ReactNode;
}

const MainProvider: FC<IMainProvider> = ({ children }) => {
   return (
     <Provider store={store}>
      <Router>
       <Layout>{children}</Layout>
      </Router>
     </Provider>
   );
}; 

export default MainProvider;