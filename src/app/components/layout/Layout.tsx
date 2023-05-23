import React, {FC, ReactNode} from 'react';

import s from './Layout.module.scss'
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface ILayout {
  children: ReactNode;
}
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