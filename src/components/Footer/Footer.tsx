import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="Footer">
    <div className="container-sm">
      <Link className="Footer__logo" to="/">
        <img src={require('../../img/footer-logo.png')} alt="fashi logo" />
      </Link>
      <address>
        <ul>
          <li>Address: 60-49 Road 11378 New York</li>
          <li>Phone: +65 11.188.888</li>
          <li>Email: hello.colorlib@gmail.com</li>
        </ul>
        <ul className="Footer__social">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://pinterest.com/" target="_blank">
              <i className="fab fa-pinterest"></i>
            </a>
          </li>
        </ul>
      </address>
      <h3>Information</h3>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Checkout</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
      </ul>
      <h3>My Account</h3>
      <ul>
        <li>
          <Link to="/">My Account</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Shopping cart</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <h3>Join Our Newsletter Now</h3>
      <p>Get E-mail updates about our latest shop and special offers.</p>
      <InputGroup>
        <FormControl
          placeholder="Enter Your Mail"
          aria-label="Enter Your Mail"
        />
        <InputGroup.Append>
          <Button variant="primary">subscribe</Button>
        </InputGroup.Append>
      </InputGroup>
      <hr />
      <p className="copyright-text">
        Copyright ©{new Date().getFullYear()} All rights reserved | This
        template is made with{' '}
        <i className="fa fa-heart-o" aria-hidden="true"></i> by{' '}
        <a href="https://colorlib.com" target="_blank">
          Colorlib
        </a>
      </p>
      <img
        className="payment"
        src={require('../../img/payment-method.png')}
        alt="payment methods"
      />
    </div>
  </footer>
);

export default Footer;
