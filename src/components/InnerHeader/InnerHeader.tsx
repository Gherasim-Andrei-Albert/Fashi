import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './InnerHeader.scss';

const InnerHeader: React.FC = () => (
  <div className="InnerHeader container-sm">
    <div className="logo">
      <img src={require('../../img/logo.png')} alt="Fashi logo" />
    </div>
    <InputGroup>
      <div className="select-wraper">
        <select name="category" id="category">
          <option value="all categories">all categories</option>
          <option value="men's">men's</option>
          <option value="women's">women's</option>
          <option value="kid's">kid's</option>
        </select>
        <i className="fas fa-angle-down"></i>
      </div>
      <FormControl
        placeholder="What do you need?"
        aria-label="type your search"
      />
      <InputGroup.Append>
        <Button variant="primary">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup.Append>
    </InputGroup>
    <div className="toolbar">
      <i className="far fa-heart">
        <span>1</span>
      </i>
      <i className="fa fa-shopping-bag">
        <span>3</span>
      </i>
      <p>$150.00</p>
    </div>
  </div>
);

export default InnerHeader;
