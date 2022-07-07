import { useForm, Controller } from 'react-hook-form';

import axios from "axios";
import { useState } from "react";
import "../App.css";
import { Icon } from '@iconify/react';
import {AiOutlineMenu,AiFillPhone,AiFillLinkedin, AiFillTwitterCircle,AiFillBank, AiOutlineGlobal, AiFillCheckCircle,AiFillMail} from 'react-icons/ai';
 import {BsFillCreditCard2BackFill ,BsPinterest, BsFacebook,BsCheckAll, BsFillPlayBtnFill , BsFillFileBarGraphFill}  from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {ImCross} from 'react-icons/im';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {MdPayment} from 'react-icons/md';
import { Form, Label } from 'semantic-ui-react';
import './style1.css';
import {useRef} from 'react';

import './style.css';
// // import axios from "axios";
// import { React,useState } from "react";

// // import "./gallery.css";

// // export  default function Gallery() {
// // 	const [book, setBook] = useState({
// // 		name: "The Fault In Our Stars",
// // 		author: "John Green",
// // 		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
// // 		price: 250,
// // 	});

// // 	const initPayment = (data) => {
// // 		const options = {
// // 			key: "rzp_test_lUP6crL6EiTXHH",
// // 			amount: data.amount,
// // 			currency: data.currency,
// // 			name: book.name,
// // 			description: "Test Transaction",
// // 			image: book.img,
// // 			order_id: data.id,
// // 			handler: async (response) => {
// // 				try {
// // 					const verifyUrl = "http://localhost:8080/api/payment/verify";
// // 					const { data } = await axios.post(verifyUrl, response);
// // 					console.log(data);
// // 				} catch (error) {
// // 					console.log(error);
// // 				}
// // 			},
// // 			theme: {
// // 				color: "#3399cc",
// // 			},
// // 		};
// // 		const rzp1 = new window.Razorpay(options);
// // 		rzp1.open();
// // 	};

// // 	const handlePayment = async () => {
// // 		try {
// // 			const orderUrl = "http://localhost:8080/api/payment/orders";
// // 			const { data } = await axios.post(orderUrl, { amount: book.price });
// // 			console.log(data);
// // 			initPayment(data.data);
// // 		} catch (error) {
// // 			console.log(error);
// // 		}
// // 	};

// // 	return (
// // 		
// // 			<div className="book_container">
// // 				<img src={book.img} alt="book_img" className="book_img" />
// // 				<p className="book_name">{book.name}</p>
// // 				<p className="book_author">By {book.author}</p>
// // 				<p className="book_price">
// // 					Price : <span>&#x20B9; {book.price}</span>
// // 				</p>
// // 				<button onClick={handlePayment} className="buy_btn">
// // 					buy now
// // 				</button>
// // 			</div>
// // 		</div>
// // 	);
// // }

// // export default Gallery;
// import axios from "axios";
// // import { useState } from "react";
// import "../App.css";
// export default function Gallery() {
//     const [book, setBook] = useState({
// 		name: "The Fault In Our Stars",
// 		author: "John Green",
// 		img_1: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
// 		price: 250,
// 	});

// 	const initPayment = (data) => {
// 		const options = {
// 			key: "rzp_test_lUP6crL6EiTXHH",
// 			amount: data.amount,
// 			currency: data.currency,
// 			name: book.name,
// 			description: "Test Transaction",
// 			image: book.img,
// 			order_id: data.id,
// 			handler: async (response) => {
// 				try {
// 					const verifyUrl = "http://localhost:8080/api/payment/verify";
// 					const { data } = await axios.post(verifyUrl, response);
// 					console.log(data);
// 				} catch (error) {
// 					console.log(error);
// 				}
// 			},
// 			theme: {
// 				color: "#3399cc",
// 			},
// 		};
// 		const rzp1 = new window.Razorpay(options);
// 		rzp1.open();
// 	};

// 	const handlePayment = async () => {
// 		try {
// 			const orderUrl = "http://localhost:8080/api/payment/orders";
// 			const { data } = await axios.post(orderUrl, { amount: book.price });
// 			console.log(data);
// 			initPayment(data.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};



// 	return(
// 		<div className="">
		
// <div class="loader js-preloader">
// <div></div>
// <div></div>
// <div></div>
// </div>


// <div class="switch-theme-mode">
// <label id="switch" class="switch">
// <input type="checkbox" onchange="toggleTheme()" id="slider"/>
// <span class="slider round"></span>
// </label>
// </div>


// <div class="page-wrapper">

// <header class="header-wrap style1">
// <div class="header-top">
// <button type="button" class="close-sidebar">
// <span class="iconify" data-icon="ri:close-fill"></span>
// </button>
// <div class="container">
// <div class="row align-items-center">
// <div class="col-lg-8 col-md-12">
// <div class="header-top-left">
// <ul class="contact-info list-style">
// <li><span class="iconify" data-icon="bx:phone-call"></span> <a href="tel:02459271449">(+024) 592 71 449</a></li>
// <li><Icon icon="ant-design:mail-outlined" /> <a href="/cdn-cgi/l/email-protection#127a777e7e7d5260736a733c717d7f"><span class="__cf_email__" data-cfemail="29414c454546695b485148074a4644">[email&#160;protected]</span></a></li>
// <li><Icon icon="bi:pin-angle" /><p>St. Here Mandalay, New York, U.K</p></li>
// </ul>
// </div>
// </div>
// <div class="col-lg-4 col-md-12">
// <div class="header-top-right">
// <ul class="header-top-menu list-style">
// <li><a href="contact.html">Support</a></li>
// <li><a href="contact.html">Help</a></li>
// </ul>
// <div class="select-lang">
// <Icon icon="ant-design:global-outlined" />
// <div class="navbar-option-item navbar-language dropdown language-option">
// <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// <span class="lang-name"></span>
// </button>
// <div class="dropdown-menu language-dropdown-menu">
// <a class="dropdown-item" href="#">
// <img src="assets/img/uk.png" alt="flag"/>
//  English
// </a>
// <a class="dropdown-item" href="#">
// <img src="assets/img/china.png" alt="flag"/>
// 简体中文
// </a>
// <a class="dropdown-item" href="#">
// <img src="assets/img/uae.png" alt="flag"/>
// العربيّة
// </a>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div class="header-bottom">
// <div class="container">
// <nav class="navbar navbar-expand-md navbar-light">
// <a class="navbar-brand" href="index.html">
// <img class="logo-light" src="assets/img/logo.png" alt="logo"/>
// <img class="logo-dark" src="assets/img/logo-white.png" alt="logo"/>
// </a>
// <div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
// <div class="menu-close xl-none">
// <a href="javascript:void(0)"> <Icon icon="akar-icons:cross" /></a>
// </div>
// <ul class="navbar-nav ms-auto">
// <li class="nav-item  has-dropdown">
// <a href="/" class="nav-link">
// Home

// </a>

// </li>
// <li class="nav-item">
// <a href="about.html" class="nav-link active">
// About Us
// </a>
// </li>
// <li class="nav-item has-dropdown">
// <a href="#" class="nav-link">
// Service
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="service-one.html" class="nav-link">Service One</a>
// </li>

// <li class="nav-item">
// <a href="service-details.html" class="nav-link">Service Details</a>
// </li>
// </ul>
// </li>
// <li class="nav-item has-dropdown">
// <a href="#" class="nav-link">
// Pages
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="#" class="nav-link">
// Project
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="project.html" class="nav-link">Our Project</a>
// </li>
// <li class="nav-item">
// <a href="project-details.html" class="nav-link">Single Project</a>
// </li>
// </ul>
// </li>
// <li class="nav-item">
// <a href="team.html" class="nav-link">Our Team</a>
// </li>
// <li class="nav-item">
// <a href="open-account.html" class="nav-link">Open Account</a>
// </li>
// <li class="nav-item">
// <a href="apply-loan.html" class="nav-link">Apply Loan</a>
// </li>
// <li class="nav-item">
// <a href="pricing.html" class="nav-link">Pricing Plan</a>
// </li>
// <li class="nav-item">
// <a href="faq.html" class="nav-link">FAQ</a>
// </li>
// <li class="nav-item">
// <a href="testimonials.html" class="nav-link">Testimonials</a>
// </li>
// <li class="nav-item">
// <a href="#" class="nav-link">
// User Pages
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="my-account.html" class="nav-link">My Account</a>
// </li>
// <li class="nav-item">
// <a href="login.html" class="nav-link">Login</a>
// </li>
// <li class="nav-item">
//  <a href="register.html" class="nav-link">Register</a>
// </li>
// <li class="nav-item">
// <a href="recover-password.html" class="nav-link">Recover Password</a>
// </li>
// </ul>
// </li>
// <li class="nav-item">
// <a href="terms-of-service.html" class="nav-link">Terms of Service</a>
// </li>
// <li class="nav-item">
// <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
// </li>
// <li class="nav-item">
// <a href="error-404.html" class="nav-link">404 Error Page</a>
// </li>
// </ul>
// </li>
// <li class="nav-item has-dropdown">
// <a href="#" class="nav-link">
// Blog
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="#" class="nav-link">
// Blog Layout
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="blog-no-sidebar.html" class="nav-link">Blog Grid</a>
// </li>
// <li class="nav-item">
// <a href="blog-left-sidebar.html" class="nav-link">Blog Left Sidebar</a>
// </li>
// <li class="nav-item">
// <a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
// </li>
// </ul>
// </li>
// <li class="nav-item">
// <a href="#" class="nav-link">
// Single Blog
// <span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
// </a>
// <ul class="dropdown-menu">
// <li class="nav-item">
// <a href="blog-details-no-sidebar.html" class="nav-link">Blog Details No Sidebar</a>
// </li>
// <li class="nav-item">
// <a href="blog-details-left-sidebar.html" class="nav-link">Blog Details Left Sidebar</a>
// </li>
// <li class="nav-item">
//  <a href="blog-details-right-sidebar.html" class="nav-link">Blog Details Right Sidebar</a>
// </li>
// </ul>
// </li>
// </ul>
// </li>
// <li class="nav-item">
// <a href="contact.html" class="nav-link">Contact Us</a>
// </li>

// </ul>

// </div>
// </nav>
// <div class="mobile-bar-wrap">
// <div class="mobile-sidebar">
// <i class="ri-menu-4-line"></i>
// </div>
// <button class="searchbtn xl-none" type="button">
// <i class="flaticon-search"></i>
// </button>
// <div class="mobile-menu xl-none">
// <a href="javascript:void(0)"><i class="ri-menu-line"></i></a>
// </div>
// </div>
// </div>
// <div class="search-area">
// <div class="container">
// <form action="#">
// <div class="form-group">
// <input type="search" placeholder="Search Here" autofocus/>
// </div>
// </form>
// <button type="button" class="close-searchbox">
// <i class="ri-close-line"></i>
// </button>
// </div>
// </div>
// </div>
// </header>


// <div>
// 	Hello
// </div>

// <header class='goal-wrap ptb-100'>
// <div className="App_1">
// <div className="book_container">
// 				<img src={book.img_1} alt="book_img" className="book_img" />
// 				<p className="book_name">{book.name}</p>
// 				<p className="book_author">By {book.author}</p>
// 				<p className="book_price">
// 					Price : <span>&#x20B9; {book.price}</span>
// 				</p>
// 				<button onClick={handlePayment} className="buy_btn">
// 					buy now
// 				</button>
// 			</div>
// 			</div>        


// 			</header>

// </div>
// <footer class="footer-wrap bg-rock">
// <div class="container">
// <img src="assets/img/footer-shape-1.png" alt="Image" class="footer-shape-one"/>
// <img src="assets/img/footer-shape-2.png" alt="Image" class="footer-shape-two"/>
// <div class="row pt-100 pb-75">
// <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
// <div class="footer-widget">
// <a href="index.html" class="footer-logo">
// <img src="assets/img/logo-white.png" alt="Image"/>
// </a>
// <p class="comp-desc">
// On the other hand, we denounce whteous indig nation and dislike men wh beguiled moraized er hand consec teturus adipis iscing elit eiusmod tempordunt labore dolore magna aliqua consector tetur adip iscing.
// </p>
// <div class="social-link">
// <ul class="social-profile list-style style1">
// <li>
// <a target="_blank" href="https://facebook.com">
// <Icon icon="akar-icons:facebook-fill" />
// </a>
// </li>
// <li>
// <a target="_blank" href="https://twitter.com">
// <Icon icon="akar-icons:twitter-fill" />
// </a>
// </li>
// <li>
// <a target="_blank" href="https://linkedin.com">
// <Icon icon="akar-icons:linkedin-box-fill" />
// </a>
// </li>
// <li>
// <a target="_blank" href="https://instagram.com">
// <Icon icon="akar-icons:pinterest-fill" />
// </a>
// </li>
// </ul>
// </div>
// </div>
// </div>
// <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
// <div class="footer-widget">
// <h3 class="footer-widget-title">Our Company</h3>
// <ul class="footer-menu list-style">
// <li>
// <a href="about.html">
// <Icon icon="bx:skip-next" />
// Company &amp; Team
// </a>
// </li>
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Our Services
// </a>
// </li>
// <li>
// <a href="team.html">
// <Icon icon="bx:skip-next" />
//  News &amp; Blog
// </a>
// </li>
// <li>
// <a href="pricing.html">
// <Icon icon="bx:skip-next" />
// Pricing Plan
// </a>
// </li>
// <li>
// <a href="contact.html">
// <Icon icon="bx:skip-next" />
// Contact Us
// </a>
// </li>
// <li>
// <a href="privacy-policy.html">
// <Icon icon="bx:skip-next" />
// Privacy Policy
// </a>
// </li>
// </ul>
// </div>
// </div>
// <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
// <div class="footer-widget">
// <h3 class="footer-widget-title">Products</h3>
// <ul class="footer-menu list-style">
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Online Payment
// </a>
// </li>
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Deposit Skim
// </a>
// </li>
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Online Shopping
// </a>
// </li>
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Master Card
// </a>
// </li>
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Receive Money
// </a>
// </li>
// <li>
// <a href="service-one.html">
// <Icon icon="bx:skip-next" />
// Affiliate Program
// </a>
// </li>
// </ul>
// </div>
// </div>
// <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
// <div class="footer-widget">
// <h3 class="footer-widget-title">Subscribe</h3>
// <p class="newsletter-text">Tablished fact that a reader will be distrated by the readable content</p>
// <form action="#" class="newsletter-form">
// <input type="email" placeholder="Your Email"/>
// <button type="button">Subscribe</button>
// </form>
// </div>
// </div>
// </div>
// </div>
// <div class="copyright-text">
// <p> <Icon icon="ant-design:copyright-circle-filled" /><script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear())</script> Raxa. All Rights Reserved By <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
// </div>
// </footer>
// 		</div>
        

// 	);
// }





function App() {

	var integer;
	const [message, setMessage] = useState('');
	const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 100,
		
	});
	
	
	const initPayment = (data) => {
		const options = {
			key: "rzp_live_PhxpygeEYYizo1",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		console.log(data.integer);
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
	const handleChange = event => {
		setMessage(event.target.value);}
		const handleClick = event => {
			event.preventDefault();
		
			// 👇️ value of input field
			console.log( message);
			 
		console.log(integer+1);
			// 👇️ set value of input field
			setMessage('New value');
		  };
		
	// console.log('value is:', event.target.value);
	
	const handlePayment = async () => {
		try {
			var message_parse = parseInt(message);
			console.log(message_parse);
			const orderUrl = "http://localhost:8080/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: message_parse});
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
		
	};
	

	return (
		<>


<div class="loader js-preloader">
<div></div>
<div></div>
<div></div>
</div>






<div class="page-wrapper">

<header class="header-wrap style1">
<div class="header-top">
<button type="button" class="close-sidebar">
<span class="iconify" data-icon="ri:close-fill"></span>
</button>
<div class="container">
<div class="row align-items-center">
<div class="col-lg-8 col-md-12">
<div class="header-top-left">
<ul class="contact-info list-style">
<li><i><AiFillPhone/></i> <a href="tel:+919319695241">(+91) 9319695241</a></li>
<li><i><AiFillMail /></i><a href="/cdn-cgi/l/email-protection#127a777e7e7d5260736a733c717d7f"><span class="__cf_email__" data-cfemail="29414c454546695b485148074a4644">[email&#160;protected]</span></a></li>
<li><i><FiMapPin/></i><p>Near Samsung Company, Sector 81 Noida, UP.</p></li>
</ul>
</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="header-top-right">
<ul class="header-top-menu list-style">
<li><a href="contact.html">Support</a></li>
<li><a href="contact.html">Help</a></li>
</ul>
<div class="select-lang">
<i><AiOutlineGlobal /></i>
<div class="navbar-option-item navbar-language dropdown language-option">
<button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span class="lang-name"></span>
</button>
<div class="dropdown-menu language-dropdown-menu">
<a class="dropdown-item" href="#">
<img src="assets/img/uk.png" alt="flag"/>
 English
</a>
<a class="dropdown-item" href="#">
<img src="assets/img/china.png" alt="flag"/>
简体中文
</a>
<a class="dropdown-item" href="#">
<img src="assets/img/uae.png" alt="flag"/>
العربيّة
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="header-bottom">
<div class="container">
<nav class="navbar navbar-expand-md navbar-light">
<a class="navbar-brand" href="/">
	<h1>ActibePay</h1>
{/* <img class="logo-light" src="assets/img/logo.png" alt="logo"/> */}
<img class="logo-dark" src="assets/img/logo-white.png" alt="logo"/>
</a>
<div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
<div class="menu-close xl-none">
<a href="javascript:void(0)"> <i><ImCross /></i></a>
</div>
<ul class="navbar-nav ms-auto">
<li class="nav-item  has-dropdown">
<a href="/" class="nav-link">
Home

</a>

</li>
<li class="nav-item">
<a href="about.html" class="nav-link active">
About Us
</a>
</li>
<li class="nav-item has-dropdown">
<a href="#" class="nav-link">
Service
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="service-one.html" class="nav-link">Service One</a>
</li>

<li class="nav-item">
<a href="service-details.html" class="nav-link">Service Details</a>
</li>
</ul>
</li>
<li class="nav-item has-dropdown">
<a href="#" class="nav-link">
Pages
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="#" class="nav-link">
Project
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="project.html" class="nav-link">Our Project</a>
</li>
<li class="nav-item">
<a href="project-details.html" class="nav-link">Single Project</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="team.html" class="nav-link">Our Team</a>
</li>
<li class="nav-item">
<a href="open-account.html" class="nav-link">Open Account</a>
</li>
<li class="nav-item">
<a href="apply-loan.html" class="nav-link">Apply Loan</a>
</li>
<li class="nav-item">
<a href="pricing.html" class="nav-link">Pricing Plan</a>
</li>
<li class="nav-item">
<a href="faq.html" class="nav-link">FAQ</a>
</li>
<li class="nav-item">
<a href="testimonials.html" class="nav-link">Testimonials</a>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
User Pages
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="my-account.html" class="nav-link">My Account</a>
</li>
<li class="nav-item">
<a href="login.html" class="nav-link">Login</a>
</li>
<li class="nav-item">
 <a href="register.html" class="nav-link">Register</a>
</li>
<li class="nav-item">
<a href="recover-password.html" class="nav-link">Recover Password</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="terms-of-service.html" class="nav-link">Terms of Service</a>
</li>
<li class="nav-item">
<a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
</li>
<li class="nav-item">
<a href="error-404.html" class="nav-link">404 Error Page</a>
</li>
</ul>
</li>
<li class="nav-item has-dropdown">
<a href="#" class="nav-link">
Blog
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="#" class="nav-link">
Blog Layout
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="blog-no-sidebar.html" class="nav-link">Blog Grid</a>
</li>
<li class="nav-item">
<a href="blog-left-sidebar.html" class="nav-link">Blog Left Sidebar</a>
</li>
<li class="nav-item">
<a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
</li>
</ul>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
Single Blog
<span class="iconify" data-icon="ri:arrow-down-s-line" data-flip="horizontal"></span>
</a>
<ul class="dropdown-menu">
<li class="nav-item">
<a href="blog-details-no-sidebar.html" class="nav-link">Blog Details No Sidebar</a>
</li>
<li class="nav-item">
<a href="blog-details-left-sidebar.html" class="nav-link">Blog Details Left Sidebar</a>
</li>
<li class="nav-item">
 <a href="blog-details-right-sidebar.html" class="nav-link">Blog Details Right Sidebar</a>
</li>
</ul>
</li>
</ul>
</li>
<li class="nav-item">
<a href="contact.html" class="nav-link">Contact Us</a>
</li>

</ul>

</div>
</nav>
<div class="mobile-bar-wrap">
<div class="mobile-sidebar">
<i class=""> <AiOutlineMenu /></i>
  
</div>
<button class="searchbtn xl-none" type="button">
<i class="flaticon-search"></i>
</button>
<div class="mobile-menu xl-none">
<a href="javascript:void(0)"><i class="ri-menu-line"></i></a>
</div>
</div>
</div>
<div class="search-area">
<div class="container">
<form action="#">
<div class="form-group">
<input type="search" placeholder="Search Here" autofocus/>
</div>
</form>
<button type="button" class="close-searchbox">
<i class="ri-close-line"></i>
</button>
</div>
</div>
</div>
</header>








		{/* <div className="App_1">
			<div className="book_container">
				<img src={book.img} alt="book_img" className="book_img" />
				<p className="book_name">{book.name}</p>
				<p className="book_author">By {book.author}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {book.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div> */}

<div>
                 <section className="pt-3 pb-3 page-info section-padding border-bottom bg-white single-product-header-bk ">
          
										 
<h2> Checkout Form</h2>
{/* <p>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p> */}
<div class="row1">
  <div class="col-75">
    <div class="container1">
      <form >
      
        <div class="row1">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div class="row1">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container1">
              <i class="fa fa-cc-visa" ></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard" ></i>
              <i class="fa fa-cc-discover" ></i>
            </div>
			<label for="cname">Amount</label>
			<input
        type="text"
		// ref={inputRef}
        id="message"
        name="message"
		placeholder="Amount"
        onChange={handleChange}
        value={message}
      />

            
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        
      </form> 
	  <button  onClick={handlePayment} className="btn1">
					buy now
				</button>
				{/* <button  onClick={handleClick} className="btn1">
					buy now
				</button> */}
				{/* <input type="submit" onClick={handlePayment} value="Continue to checkout" class="btn1"/> */}
	  {/* <div className="App_1">
			<div className="book_container">
				<img src={book.img} alt="book_img" className="book_img" />
				<p className="book_name">{book.name}</p>
				<p className="book_author">By {book.author}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {book.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div> */}
    </div>
  </div>
  
</div>

                </section> 
				
				



            </div>
		</div>




		

		<footer class="footer-wrap bg-rock">
<div class="container">
<img src="assets/img/footer-shape-1.png" alt="Image" class="footer-shape-one"/>
<img src="assets/img/footer-shape-2.png" alt="Image" class="footer-shape-two"/>
<div class="row pt-100 pb-75">
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="footer-widget">
<a href="/" class="footer-logo">
{/* <img src="assets/img/logo-white.png" alt="Image"/>
 */}
 <h1 class='text-white'>ActibePay</h1>
</a>
<p class="comp-desc">
On the other hand, we denounce whteous indig nation and dislike men wh beguiled moraized er hand consec teturus adipis iscing elit eiusmod tempordunt labore dolore magna aliqua consector tetur adip iscing.
</p>
<div class="social-link">
<ul class="social-profile list-style style1">
<li>
<a target="_blank" href="https://facebook.com">
<i><BsFacebook/></i>
</a>
</li>
<li>
<a target="_blank" href="https://twitter.com">
<i><AiFillTwitterCircle/></i>
</a>
</li>
<li>
<a target="_blank" href="https://linkedin.com">
<i><AiFillLinkedin/></i>
</a>
</li>
<li>
<a target="_blank" href="https://instagram.com">
<i><BsPinterest/></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
<div class="footer-widget">
<h3 class="footer-widget-title">Our Company</h3>
<ul class="footer-menu list-style">
<li>
<a href="about.html">
<Icon icon="bx:skip-next" />
Company &amp; Team
</a>
</li>
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Our Services
</a>
</li>
<li>
<a href="team.html">
<Icon icon="bx:skip-next" />
 News &amp; Blog
</a>
</li>
<li>
<a href="pricing.html">
<Icon icon="bx:skip-next" />
Pricing Plan
</a>
</li>
<li>
<a href="contact.html">
<Icon icon="bx:skip-next" />
Contact Us
</a>
</li>
<li>
<a href="privacy-policy.html">
<Icon icon="bx:skip-next" />
Privacy Policy
</a>
</li>
</ul>
</div>
</div>
<div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
<div class="footer-widget">
<h3 class="footer-widget-title">Products</h3>
<ul class="footer-menu list-style">
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Online Payment
</a>
</li>
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Deposit Skim
</a>
</li>
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Online Shopping
</a>
</li>
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Master Card
</a>
</li>
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Receive Money
</a>
</li>
<li>
<a href="service-one.html">
<Icon icon="bx:skip-next" />
Affiliate Program
</a>
</li>
</ul>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
<div class="footer-widget">
<h3 class="footer-widget-title">Subscribe</h3>
<p class="newsletter-text">Tablished fact that a reader will be distrated by the readable content</p>
<form action="#" class="newsletter-form">
<input type="email" placeholder="Your Email"/>
<button type="button">Subscribe</button>
</form>
</div>
</div>
</div>
</div>
<div class="copyright-text">
<p> <Icon icon="ant-design:copyright-circle-filled" /><script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear())</script> ActibePay. All Rights Reserved By <a href="/" target="_blank">2022</a></p>
</div>
</footer>

		</>
	);
}

export default App;
