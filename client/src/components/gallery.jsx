// import axios from "axios";
import { React,useState } from "react";
import { Icon } from '@iconify/react';
import {AiOutlineArrowUp,AiOutlineMenu,AiFillPhone,AiFillLinkedin, AiFillTwitterCircle,AiFillBank, AiOutlineGlobal, AiFillCheckCircle,AiFillMail} from 'react-icons/ai';
 import {BsFillCreditCard2BackFill ,BsPinterest, BsFacebook,BsCheckAll, BsFillPlayBtnFill , BsFillFileBarGraphFill}  from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {ImCross} from 'react-icons/im';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {MdPayment} from 'react-icons/md';
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


<section class="hero-wrap style3 bg-squeeze">
<img src="assets/img/hero/hero-shape-10.png" alt="Image" class="hero-shape-one"/>
<img src="assets/img/hero/hero-shape-15.png" alt="Image" class="hero-shape-two"/>
<img src="assets/img/hero/hero-shape-14.png" alt="Image" class="hero-shape-three"/>
<img src="assets/img/hero/hero-shape-11.png" alt="Image" class="hero-shape-four animationFramesTwo"/>
<div class="hero-slider-one owl-carousel">
<div class="hero-slide-item">
<div class="container">
<div class="row gx-5 align-items-center">
<div class="col-md-6">
<div class="hero-content" data-speed="0.10" data-revert="true">
<span>Instant Money Transfer</span>
<h1>Transfer Money Across World In Real Time</h1>
<p>Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.</p>
<div class="hero-btn">
<a href="service-one.html" class="btn style1">Get Started</a>
<a class="play-video" data-fancybox href="https://www.youtube.com/watch?v=DGo-OhDWIKQ">
<span class="play-btn"> <i class=""><BsFillPlayBtnFill /></i></span>
<span class="sm-none">Watch Video</span>
</a>
</div>
</div>
</div>
<div class="col-md-6">
<div class="hero-img-wrap">
<img src="assets/img/hero/hero-shape-13.png" alt="Image" class="hero-shape-five bounce"/>
<img src="assets/img/hero/hero-shape-12.png" alt="Image" class="hero-shape-six moveHorizontal"/>
<img src="assets/img/hero/hero-slide-1.png" alt="Image" class="hero-img"/>
</div>
</div>
</div>
</div>
</div>
<div class="hero-slide-item">
<div class="container">
<div class="row gx-5 align-items-center">
<div class="col-md-6">
<div class="hero-content" data-speed="0.10" data-revert="true">
<span>Online Payment System</span>
<h1>Secured &amp; Easy Online Payment Solution </h1>
<p>Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.</p>
<div class="hero-btn">
<a href="service-one.html" class="btn style1">Get Started</a>
<a class="play-video" data-fancybox href="https://www.youtube.com/watch?v=DGo-OhDWIKQ">
<span class="play-btn"> <i class=""><BsFillPlayBtnFill /></i></span>
<span class="sm-none">Watch Video</span>
</a>
</div>
</div>
</div>
<div class="col-md-6">
<div class="hero-img-wrap">
<img src="assets/img/hero/hero-shape-13.png" alt="Image" class="hero-shape-five bounce"/>
<img src="assets/img/hero/hero-shape-12.png" alt="Image" class="hero-shape-six moveHorizontal"/>
<img src="assets/img/hero/hero-slide-2.png" alt="Image" class="hero-img"/>
</div>
</div>
</div>
</div>
</div>
<div class="hero-slide-item">
<div class="container">
<div class="row gx-5 align-items-center">
<div class="col-md-6">
<div class="hero-content" data-speed="0.10" data-revert="true">
<span>Global Money Transfer</span>
<h1>Move Your Money In Easy Secured Steps</h1>
<p>Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.</p>
<div class="hero-btn">
<a href="service-one.html" class="btn style1">Get Started</a>
<a class="play-video" data-fancybox href="https://www.youtube.com/watch?v=DGo-OhDWIKQ">
<span class="play-btn"> <i class="flaticon-play-button-arrowhead"></i></span>
<span class="sm-none">Watch Video</span>
</a>
</div>
</div>
</div>
<div class="col-md-6">
<div class="hero-img-wrap">
<img src="assets/img/hero/hero-shape-13.png" alt="Image" class="hero-shape-five bounce"/>
<img src="assets/img/hero/hero-shape-12.png" alt="Image" class="hero-shape-six moveHorizontal"/>
<img src="assets/img/hero/hero-slide-3.png" alt="Image" class="hero-img"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<div class="service-charge-wrap bg-stratos ptb-100">
<div class="container">
<form action="#" class="charge-form">
<div class="row justify-content-center">
<div class="col-lg-4 col-md-6">
<div class="form-group">
<label for="send_money">Your Send Money</label>
<input type="number" id="send_money" name="send_money" placeholder="1000"/>
<select>
<option value="1">INR</option>
<option value="2">USD</option>
</select>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="form-group">
<label for="recieved_money">Recipient Gets</label>
<input type="number" id="recieved_money" name="recieved_money" placeholder="1000"/>
<select>
<option value="1">INR</option>
<option value="2">USD</option>
</select>
</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="form-group form-btn">
<button type="submit" class="btn style1 w-100 d-block">Get Estimation</button>
</div>
</div>
<div class="col-lg-12">
<p><span>82.50</span> Exchange Rate <span>5.50</span> Transition Fees</p>
<p>By clicking continue, I am agree with <a href="terms-of-service.html" class="link style1">Terms & Policy</a></p>
</div>
</div>
</form>
</div>
</div>


<section class="feature-wrap pt-100 pb-75">
<div class="container">
<div class="row justify-content-center">
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="feature-card style3">
<div class="feature-info">
<div class="feature-title">
<span><img src="assets/img/feature/feature-icon-1.png" alt="Image"/></span>
<h3>Create An Account</h3>
</div>
<p>Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.</p>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="feature-card style3">
<div class="feature-info">
<div class="feature-title">
<span><img src="assets/img/feature/feature-icon-2.png" alt="Image"/></span>
<h3>Attach bank Account</h3>
</div>
<p>Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.</p>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="feature-card style3">
<div class="feature-info">
<div class="feature-title">
<span><img src="assets/img/feature/feature-icon-3.png" alt="Image"/></span>
<h3>Send Money</h3>
</div>
<p>Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="why-choose-wrap style1 pb-100 bg-bunting">
<div class="container">
<div class="row gx-5 align-items-center">
<div class="col-lg-6">
<div class="wh-img-wrap">
<img src="assets/img/why-choose-us/wh-img-1.png" alt="Image"/>
<img class="wh-shape-one bounce" src="assets/img/why-choose-us/wh-shape-1.png" alt="Image"/>
<img class="wh-shape-two animationFramesTwo" src="assets/img/why-choose-us/wh-shape-2.png" alt="Image"/>
</div>
</div>
<div class="col-lg-6">
<div class="wh-content">
<div class="content-title style1">
<span>Why Choose Us</span>
<h2>Get World Class &amp; Fastest Online Payment Service</h2>
<p>There are many variations of passages of Lorem Ipsum amet avoilble but majority have suffered alteration in some form, by injected humur or randomise words which don't sure amet sit dolor quras alto lorem.</p>
</div>
<div class="feature-item-wrap">
<div class="feature-item">
<span class="feature-icon">
<i class=""><BsFillFileBarGraphFill /></i>
</span>
<div class="feature-text">
<h3>Low Costing</h3>
<p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui praesent sapien pelle tesque.</p>
</div>
</div>
<div class="feature-item">
<span class="feature-icon">
<i><AiFillBank /></i>
</span>
<div class="feature-text">
<h3>Safe &amp; Secure</h3>
<p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui praesent sapien pelle tesque.</p>
</div>
</div>
<div class="feature-item">
<span class="feature-icon">
<i><HiOutlineDesktopComputer /></i>
</span>
<div class="feature-text">
<h3>Live Support</h3>
<p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui praesent sapien pelle tesque.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<div class="counter-wrap">
<div class="container">
<div class="counter-card-wrap">
<div class="counter-card">
<div class="counter-text">
<div class="counter-num">
<span class="odometer" data-count="5430"></span>
</div>
<p>Happy Customers</p>
</div>
</div>
<div class="counter-card">
<div class="counter-text">
<div class="counter-num">
<span class="odometer" data-count="25"></span>
</div>
<p>Years in Banking</p>
</div>
</div>
<div class="counter-card">
<div class="counter-text">
<div class="counter-num">
<span class="odometer" data-count="2597"></span>
</div>
<p>Our Branches</p>
</div>
</div>
<div class="counter-card">
<div class="counter-text">
<div class="counter-num">
<span class="odometer" data-count="40467"></span>
</div>
<p>Successful Projects</p>
</div>
</div>
</div>
</div>
</div>

 
<section class="service-wrap style3 ptb-100 bg-rock">
<div class="container">
<img src="assets/img/service-shape-1.png" alt="Image" class="service-shape-one"/>
<img src="assets/img/service-shape-2.png" alt="Image" class="service-shape-two"/>
<div class="section-title style1 text-center mb-40">
<span>Our Services</span>
<h2 class="text-white">Get Your Raxa online Banking</h2>
</div>
<div class="row gx-5 align-items-center">
<div class="col-md-6">
<div class="service-card style3">
<span class="service-icon">
<i><MdPayment /></i>
</span>
<div class="service-info">
<h3><a href="service-details.html">Mobile Banking</a></h3>
<p>Is simply dummy text of the printing and setting type the industry's standard dummy text ever since then nowpri nter took a galley alto.</p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="service-card style3">
<span class="service-icon">
<i><HiOutlineDesktopComputer/></i>
</span>
<div class="service-info">
<h3><a href="service-details.html">Secure Payment</a></h3>
<p>Is simply dummy text of the printing and setting type the industry's standard dummy text ever since then nowpri nter took a galley alto.</p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="service-card style3">
<span class="service-icon">
<i class=""><BsFillCreditCard2BackFill /></i>
</span>
<div class="service-info">
<h3><a href="service-details.html">Saving Account</a></h3>
<p>Is simply dummy text of the printing and setting type the industry's standard dummy text ever since then nowpri nter took a galley alto.</p>
</div>
</div>
</div>
<div class="col-md-6">
<div class="service-card style3">
<span class="service-icon">
<i><AiFillBank /></i>
</span>
<div class="service-info">
<h3><a href="service-details.html">Personal Savings</a></h3>
<p>Is simply dummy text of the printing and setting type the industry's standard dummy text ever since then nowpri nter took a galley alto.</p>
</div>
</div>
</div>
</div>
<div class="text-center mt-20">
<a href="service-one.html" class="btn style1">View All Services</a>
</div>
</div>
</section>


<section class="shopping-wrap ptb-100">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6 col-12 order-lg-1 order-2">
<div class="shopping-content">
<img src="assets/img/shopping/shopping-shape-1.png" alt="Image" class="shopping-shape-one moveHorizontal"/>
<img src="assets/img/shopping/shopping-shape-2.png" alt="Image" class="shopping-shape-two bounce"/>
<div class="content-title style1 ">
<span>Online Shopping</span>
<h2>Shop Online Make In Online Banking Payments</h2>
<p>There are many variations of passages of Lorem Ipsum amet avoilble but majority have suffered alteration in some form, by injected humur or randomise words which don't sure amet sit dolor quras alto lorem.</p>
</div>
<ul class="content-feature-list list-style">
<li><i><BsCheckAll /> </i>Cards that work all across the world.</li>
<li><i><BsCheckAll /> </i>Highest Returns on your investments.</li>
<li><i><BsCheckAll /> </i>No ATM fees. No minimum balance. No overdrafts.</li>
</ul>
<a href="register.html" class="btn style1">Signup Today</a>
</div>
</div>
<div class="col-lg-6 col-12 order-lg-2 order-1">
<div class="shopping-img-wrap">
<img src="assets/img/shopping/shopping-1.png" alt="Image"/>
<img src="assets/img/shopping/shopping-shape-3.png" alt="Image" class="shopping-shape-three"/>
</div>
</div>
</div>
</div>
</section>


<section class="testimonial-wrap ptb-100  bg-albastor">
<div class="container">
<div class="row">
<div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
<div class="section-title style1 text-center mb-40">
<span>Our Testimonials</span>
<h2>What Our Client Says</h2>
</div>
</div>
</div>
<div class="testimonial-slider-three owl-carousel">
<div class="testimonial-card style3">
<span class="quote-icon">
<i class="flaticon-quotation-mark"></i>
</span>
<p class="client-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.</p>
<div class="testimonial-card-thumb">
<div class="client-info-wrap">
<div class="client-img">
<img src="assets/img/testimonials/client-7.jpg" alt="Image"/>
</div>
<div class="client-info">
<h4>Shonda Leer</h4>
<span>Director, BAT</span>
</div>
</div>
</div>
</div>
<div class="testimonial-card style3">
 <span class="quote-icon">
<i class="flaticon-quotation-mark"></i>
</span>
<p class="client-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.</p>
<div class="testimonial-card-thumb">
<div class="client-info-wrap">
<div class="client-img">
<img src="assets/img/testimonials/client-1.jpg" alt="Image"/>
</div>
<div class="client-info">
<h4>Alex Cruis</h4>
<span>CEO, IBAC</span>
</div>
</div>
</div>
</div>
<div class="testimonial-card style3">
<span class="quote-icon">
<i class="flaticon-quotation-mark"></i>
</span>
<p class="client-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.</p>
<div class="testimonial-card-thumb">
<div class="client-info-wrap">
<div class="client-img">
<img src="assets/img/testimonials/client-2.jpg" alt="Image"/>
</div>
<div class="client-info">
<h4>Marion Ott</h4>
<span>Founder, Olleo</span>
</div>
</div>
</div>
</div>
<div class="testimonial-card style3">
<span class="quote-icon">
<i class="flaticon-quotation-mark"></i>
</span>
<p class="client-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.</p>
<div class="testimonial-card-thumb">
<div class="client-info-wrap">
<div class="client-img">
<img src="assets/img/testimonials/client-3.jpg" alt="Image"/>
</div>
<div class="client-info">
<h4>Harry Jackson</h4>
<span>Enterpreneur</span>
</div>
</div>
</div>
</div>
<div class="testimonial-card style3">
<span class="quote-icon">
<i class="flaticon-quotation-mark"></i>
</span>
<p class="client-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.</p>
<div class="testimonial-card-thumb">
<div class="client-info-wrap">
<div class="client-img">
<img src="assets/img/testimonials/client-4.jpg" alt="Image"/>
</div>
<div class="client-info">
<h4>Brock Lee</h4>
<span>Developer</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="app-wrap  ptb-100 bg-rock">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-7 col-md-8">
<div class="app-content sm-center">
<div class="content-title style2">
<h2>You Can Find All Things You Need In Our App</h2>
</div>
</div>
</div>
<div class="col-lg-5 col-md-4 text-md-end sm-center">
<div class="app-btn">
<a href="https://play.google.com/store/apps"><img src="assets/img/play-store.png" alt="Image"/></a>
<a href="https://www.apple.com/app-store/"><img src="assets/img/apple-store.png" alt="Image"/></a>
</div>
</div>
</div>
</div>
</section>


<section class="goal-wrap ptb-100">
<div class="container">
<div class="row gx-5 align-items-center">
<div class="col-lg-6">
<div class="goal-img-wrap">
<img src="assets/img/goal/goal-shape-1.png" alt="Image" class="goal-shape-three bounce"/>
<img src="assets/img/goal/goal-shape-2.png" alt="Image" class="goal-shape-one"/>
<img src="assets/img/goal/goal-shape-3.png" alt="Image" class="goal-shape-two"/>
<img src="assets/img/goal/goal-1.jpg" alt="Image"/>
</div>
</div>
<div class="col-lg-6">
<div class="goal-content">
<div class="content-title style1">
<span>Goal Setting</span>
<h2>Manage Your Money With Online Banking Solution</h2>
<p>There are many variations of passages of Lorem Ipsum amet avoilble but majority have suffered alteration in some form, by injected humur or randomise words which don't sure amet sit dolor quras alto lorem.</p>
</div>
<ul class="content-feature-list style1 list-style">
<li><span><i><AiFillCheckCircle /> </i></span>Learn To Budget</li>
<li><span><i><AiFillCheckCircle /> </i></span>Create An Emergency Fund</li>
<li><span><i><AiFillCheckCircle /> </i></span>Get Out Of Debt</li>
<li><span><i><AiFillCheckCircle /> </i></span>Save And Invest Your Money</li>
</ul>
</div>
</div>
</div>
</div>
</section>


{/* <section class="blog-wrap pt-100 pb-75 bg-albastor">
<div class="container">
<div class="section-title style1 text-center mb-40">
<span>Latest Insights From Raxa</span>
<h2>Our Latest Articles</h2>
</div>
<div class="row justify-content-center">
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="blog-card style1">
<div class="blog-img">
<img src="assets/img/blog/blog-1.jpg" alt="Image"/>
</div>
<div class="blog-info">
<ul class="blog-metainfo  list-style">
<li><i class="flaticon-user"></i> <a href="posts-by-author.html">Reanne Carnation</a></li>
<li><i class="flaticon-calendar"></i>02 Jan, 2022</li>
</ul>
<h3><a href="blog-details-right-sidebar.html">5 Things To Know About Your Online Banking</a></h3>
<a href="blog-details-right-sidebar.html" class="link style1">Read More
<i class="flaticon-right-arrow"></i>
</a>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="blog-card style1">
<div class="blog-img">
<img src="assets/img/blog/blog-2.jpg" alt="Image"/>
</div>
<div class="blog-info">
<ul class="blog-metainfo  list-style">
<li><i class="flaticon-user"></i> <a href="posts-by-author.html">Phil Heath</a></li>
<li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
</ul>
<h3><a href="blog-details-right-sidebar.html">Tips For Saving Money &amp; Better Investment Policy</a></h3>
<a href="blog-details-right-sidebar.html" class="link style1">Read More
<i class="flaticon-right-arrow"></i>
</a>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-6 col-md-6">
<div class="blog-card style1">
<div class="blog-img">
<img src="assets/img/blog/blog-3.jpg" alt="Image"/>
</div>
<div class="blog-info">
<ul class="blog-metainfo  list-style">
<li><i class="flaticon-user"></i><a href="posts-by-author.html">Phil Heath</a></li>
<li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
</ul>
<h3><a href="blog-details-right-sidebar.html">The Fedaral Bank Appoints New Director To The Board</a></h3>
<a href="blog-details-right-sidebar.html" class="link style1">Read More
<i class="flaticon-right-arrow"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section> */}


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