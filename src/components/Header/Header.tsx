import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InnerHeader from '../InnerHeader/InnerHeader';
import HeaderTop from '../HeaderTop/HeaderTop';
import './Header.scss';

const Header: React.FC = () => (
  <div className="Header">
    <HeaderTop />
    <InnerHeader />
    <Navbar />
  </div>
);

export default Header;
