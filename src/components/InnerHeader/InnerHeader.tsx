import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './InnerHeader.scss';

const InnerHeader: React.FC = () => (
  <div className="InnerHeader container-sm">
    <img src={require('../../img/logo.png')} alt="Fashi logo" />
    <InputGroup>
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
