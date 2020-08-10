import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InnerHeader from '../InnerHeader/InnerHeader';
import './Header.scss';

const Header: React.FC = () => (
  <div className="Header">
    <InnerHeader />
    <Navbar />
  </div>
);

export default Header;
