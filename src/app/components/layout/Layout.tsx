import React, {FC} from 'react';

import s from './Layout.module.scss'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ILayout } from './layout.interface';


const Layout: FC<ILayout> = ({children}) => {
  return (
    <div className='app-container'>
      <Header/>
      <div className='main'>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;