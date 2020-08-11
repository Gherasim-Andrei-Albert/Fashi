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
  valueContainer: (styles: any) => ({ ...styles, flex: 'initial', padding: 0 }),
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
    marginLeft: 'auto',
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
  <div className="HeaderTop container-sm">
    <Select
      defaultValue={options[0]}
      label="language"
      options={options}
      isSearchable={false}
      styles={languagesStyles}
    />
    <Link to="/">
      <i className="fa fa-user"></i> Login
    </Link>
  </div>
);

export default HeaderTop;
