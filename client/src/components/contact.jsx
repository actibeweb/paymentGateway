// import axios from "axios";
import { React,useState } from "react";
import { Icon } from '@iconify/react';
import {AiOutlineArrowUp,AiOutlineMenu,AiFillPhone,AiFillLinkedin, AiFillTwitterCircle,AiFillBank, AiOutlineGlobal, AiFillCheckCircle,AiFillMail} from 'react-icons/ai';
 import {BsFillCreditCard2BackFill ,BsPinterest, BsFacebook,BsCheckAll, BsFillPlayBtnFill , BsFillFileBarGraphFill}  from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {ImCross} from 'react-icons/im';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {MdPayment} from 'react-icons/md';
import Contact from './contact_Second';
import {BiUpArrowAlt} from 'react-icons/bi';
// import "./gallery.css";

// export function Gallery() {
// 	const [book, setBook] = useState({
// 		name: "The Fault In Our Stars",
// 		author: "John Green",
// 		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
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

// 	return (
// 		<div className="App">
// 			<div className="book_container">
// 				<img src={book.img} alt="book_img" className="book_img" />
// 				<p className="book_name">{book.name}</p>
// 				<p className="book_author">By {book.author}</p>
// 				<p className="book_price">
// 					Price : <span>&#x20B9; {book.price}</span>
// 				</p>
// 				<button onClick={handlePayment} className="buy_btn">
// 					buy now
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// // export default Gallery;

export default function Gallery() {

	return(
		<div className="">
		
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


<div class="content-wrapper">

<div class="breadcrumb-wrap bg-spring">
<img src="assets/img/breadcrumb/br-shape-1.png" alt="Image" class="br-shape-one xs-none"/>
<img src="assets/img/breadcrumb/br-shape-2.png" alt="Image" class="br-shape-two xs-none"/>
<img src="assets/img/breadcrumb/br-shape-3.png" alt="Image" class="br-shape-three moveHorizontal sm-none"/>
<img src="assets/img/breadcrumb/br-shape-4.png" alt="Image" class="br-shape-four moveVertical sm-none"/>
<div class="container">
<div class="row align-items-center">
<div class="col-lg-7 col-md-8 col-sm-8">
<div class="breadcrumb-title">
<h2>Contact Us</h2>
<ul class="breadcrumb-menu list-style">
<li><a href="/">Home </a></li>
 <li>Contact</li>
</ul>
</div>
</div>
<div class="col-lg-5 col-md-4 col-sm-4 xs-none">
<div class="breadcrumb-img">
<img src="assets/img/breadcrumb/br-shape-5.png" alt="Image" class="br-shape-five animationFramesTwo"/>
<img src="assets/img/breadcrumb/br-shape-6.png" alt="Image" class="br-shape-six bounce"/>
<img src="assets/img/breadcrumb/breadcrumb-1.png" alt="Image"/>
</div>
</div>
</div>
</div>
</div>


<section class="contact-wrap pt-100">
<div class="container">
<div class="row justify-content-center pb-75">
<div class="col-lg-4 col-md-6">
<div class="contact-item">
<span class="contact-icon">
<i class="flaticon-map"></i>
</span>
<div class="contact-info">
<h3>Our Location</h3>
<p>Near Samsung Company, Sector 81 Noida, UP.</p>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="contact-item">
<span class="contact-icon">
<i class="flaticon-email-2"></i>
</span>
<div class="contact-info">
<h3>Email Us</h3>
<a href="/cdn-cgi/l/email-protection#2048454c4c4f60524158410e434f4d"><span class="__cf_email__" data-cfemail="7119141d1d1e31031009105f121e1c">[email&#160;protected]</span></a>
<a href="/cdn-cgi/l/email-protection#33404643435c41477341524b521d505c5e"><span class="__cf_email__" data-cfemail="c2b1b7b2b2adb0b682b0a3baa3eca1adaf">[email&#160;protected]</span></a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="contact-item">
<span class="contact-icon">
<i class="flaticon-phone-call"></i>
</span>
<div class="contact-info">
<h3>Call us</h3>
<a href="tel:+919319695241">(+91) 9319695241</a>

</div>
</div>
</div>
</div>
<div class="comp-map pb-100">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.183915995885!2d77.39335040219089!3d28.551982018691998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7d41bf32d5%3A0x3f9b363194a323e4!2sSamsung%20India%20Electronics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1657082764081!5m2!1sen!2sin" ></iframe>
</div>
</div>
{/* <div class="contact-form-area ptb-100 bg-albastor">
<img src="assets/img/contact-shape-1.png" alt="Image" class="contact-shape-one animationFramesTwo"/>
<img src="assets/img/contact-shape-2.png" alt="Image" class="contact-shape-two bounce"/>
 <div class="container">
<div class="row">
<div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
<div class="content-title style1 text-center mb-40">
<span>Send Us A Message</span>
<h2>Do You have Any Questions?</h2>
</div>
<div class="contact-form">
<form class="form-wrap" id="contactForm">
<div class="row">
<div class="col-md-6">
<div class="form-group">
<input type="text" name="name" placeholder="Your Name*" id="name" required data-error="Please enter your name"/>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<input type="email" name="email" id="email" required placeholder="Your Email*" data-error="Please enter your email*"/>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<input type="number" name="phone" id="phone" required placeholder="Phone Number" data-error="Please enter your phone number"/>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<input type="text" name="msg_subject" placeholder="Subject" id="msg_subject" required data-error="Please enter your subject"/>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-12">
<div class="form-group v1">
<textarea name="message" id="message" placeholder="Your Messages.." cols="30" rows="10" required data-error="Please enter your message"></textarea>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-12 text-center">
<button type="submit" class="btn style1 w-100 d-block">Send Message </button>
<div id="msgSubmit" class="h3 text-center hidden"></div>
<div class="clearfix"></div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div> */}
</section>
<Contact/>
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


</div>

<a href="javascript:void(0)" class="back-to-top bounce"><i class=""><AiOutlineArrowUp/></i></a>

		</div>
        

	);
}