import { Provider } from "react-redux";
import {FC,  ReactNode } from 'react'
import { store } from "../store/store";
import Layout from "../components/layout/Layout";

interface IMainProvider{
  children: ReactNode;
}

const MainProvider: FC<IMainProvider> = ({ children }) => {
   return (
     <Provider store={store}>
       <Layout>{children}</Layout>
     </Provider>
   );
}; 

export default MainProvider;