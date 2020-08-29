import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './HeaderTop.scss';

const options = [
  { label: 'English', value: 'English', flag: require('../../img/flag-1.jpg') },
  { label: 'German', value: 'German', flag: require('../../img/flag-2.jpg') },
];

const flag = (flag: any = require('../../img/flag-1.jpg')) => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundImage: `url(${flag})`,
    content: '" "',
    display: 'block',
    marginRight: 5,
    height: 14,
    width: 27,
  },
});

const languagesStyles = {
  valueContainer: (styles: any) => ({
    ...styles,
    flex: 'initial',
    padding: 0,
  }),
  singleValue: (styles: any, { data }: any) => ({
    ...styles,
    maxWidth: 'initial',
    position: 'static',
    transform: 'none',
    margin: 0,
    fontSize: 14,
    ...flag(data.flag),
  }),
  control: (styles: any) => ({
    ...styles,
    border: 0,
    width: 142,
    padding: '0 20px',
    boxShadow: 'none',
    minHeight: 'initial',
    ':after': {
      content: '" "',
      display: 'block',
      width: 7,
      height: 3,
      marginRight: 3,
      backgroundImage: `url(${require('../../img/select_indicator.svg')})`,
    },
    ':hover': { cursor: 'pointer' },
  }),
  indicatorsContainer: () => ({ display: 'none' }),
  menu: (style: any) => ({
    ...style,
    top: '100%',
    margin: 0,
    borderRadius: 'none',
  }),
  container: (style: any) => ({
    ...style,
    alignSelf: 'center',
  }),
  option: (styles: any, { data }: any) => {
    return {
      ...styles,
      ...flag(data.flag),
      height: 23,
      ':hover': { cursor: 'pointer' },
    };
  },
};

const HeaderTop: React.FC = () => (
  <div className="HeaderTop">
    <div className="container-sm">
      <div className="item">
        <span className="mail">
          <i className="fas fa-envelope"></i>hello.colorlib@gmail.com
        </span>
      </div>
      <div className="item phone-social">
        <span className="phone">
          <i className="fas fa-phone"></i>+65 11.188.888
        </span>
        <span className="social">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://pinterest.com/" target="_blank">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </span>
      </div>
      <div className="item">
        <Select
          defaultValue={options[0]}
          label="language"
          options={options}
          isSearchable={false}
          styles={languagesStyles}
        />
      </div>
      <div className="item">
        <Link to="/" className="login">
          <i className="fa fa-user"></i> Login
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderTop;
