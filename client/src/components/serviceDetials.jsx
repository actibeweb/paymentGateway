






import { Icon } from '@iconify/react';
import {AiOutlineArrowUp,AiOutlineDown,AiOutlineMenu,AiFillPhone,AiOutlineCheck,AiFillLinkedin, AiFillTwitterCircle,AiFillBank, AiOutlineGlobal, AiFillCheckCircle,AiFillMail} from 'react-icons/ai';
 import {BsFillCreditCard2BackFill ,BsPinterest, BsFacebook,BsCheckAll, BsFillPlayBtnFill , BsFillFileBarGraphFill}  from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {ImCross} from 'react-icons/im';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {MdPayment} from 'react-icons/md';
import React, {useState} from 'react';
// import logo from './logo.svg';
import '../App.css';
import {FaGooglePay,FaCcStripe,FaPaypal} from 'react-icons/fa';
import {SiPaytm,SiRazorpay,SiSamsungpay} from 'react-icons/si';
import StripeCheckout from "react-stripe-checkout";
import {BiUpArrowAlt} from 'react-icons/bi';
export default function Gallery() {
	var integer;
	const [message, setMessage] = useState('');
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
		  var message_parse = parseInt(message);
	const [product ,setProduct] = useState({
		name: "React From Fb",
		price: 10,
		productBy: "Facebook"
	  });
	
	
	  const makePayment = token => {
		const body = {
		  token,
		  product
		}
		const headers = {
		  "Content-Type": "application/json"
		}
	
		return fetch(`http://localhost:8282/payment`, {
		  method: "POST",
		  headers,
		  body: JSON.stringify(body)
		}).then(response => {
		  console.log("RESPONSE ", response);
		  const {status} = response;
		  console.log("STATUS ", status)
		}).catch(error => console.log(error));
	
	  };

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
<h2>Service Details</h2>
<ul class="breadcrumb-menu list-style">
<li><a href="index.html">Home </a></li> 
<li><a href="service-one.html">Service </a></li>
<li>Service Details</li>
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


<div class="service-details-wrap ptb-100">
<div class="container">
<div class="row gx-5">
<div class="col-xl-8 col-lg-12">
<div class="service-desc">
<a class="service-img mb-25 d-block" data-fancybox="gallery" href="assets/img/service/single-service-1.jpg">
<img src="assets/img/service/single-service-1.jpg" alt="Image"/>
</a>
<h2>Mobile Banking</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quasi, porro expedita dolores quas nesciunt repellat sed. Nostrum sunt obcaecati totam distinctio libero ea aliquam hic a consectetur, et facere rem repudiandae maxime dolorem ad, saepe harum blanditiis.</p>
<p>Consectetur, et facere rem repudiandae maxime dolorem ad, saepe harum blanditiis laborum voluptatum amet sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio omnis dolor numquam dignissimos consectetur amet sit lorem ipsum dolor sit amet consec.</p>
<h2>How Online Banking Works</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio omnis dolor numquam dignissimos enim assumenda itaque nemo tenetur dolores incidunt, animi quo quae odit corporis, nihil architecto inventore. </p>
<ul class="content-feature-list style2 list-style">
<li><i class=""><AiOutlineCheck /></i>Opening accounts </li>
<li><i class=""><AiOutlineCheck /></i>Transferring funds </li>
<li><i class=""><AiOutlineCheck /></i>Applying for loans </li>
<li><i class=""><AiOutlineCheck /></i>Depositing checks </li>
<li><i class=""><AiOutlineCheck /></i>Staying informed </li>
<li><i class=""><AiOutlineCheck /></i>24/7 on time services </li>
</ul>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio omnis dolor numquam dignissimos enim assumenda itaque nemo tenetur dolores incidunt, animi quo quae odit corporis, nihil architecto inventore. </p>
<h2>More Asked Question</h2>
<div class="accordion" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<span>
<i class=""><AiOutlineDown/></i>
{/* <i class=""><BiUpArrowAlt /></i> */}
</span>
What Is Bank Account?
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
<div class="single-product-text">
<p>It is a long established fact that a reader will be distracted by the readable conten of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less no content here', making it look like readable English.</p>
</div>
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<span>
<i class=""><AiOutlineDown/></i>

{/* <i class="ri-arrow-up-s-line minus"></i> */}
</span>
How Do I Activate My Card?
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
<p>It is a long established fact that a reader will be distracted by the readable conten of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less no content here', making it look like readable English.</p>
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<span>
<i class=""><AiOutlineDown/></i>

{/* <i class="ri-arrow-up-s-line minus"></i> */}
 </span>
How Do I Change My Passwoed?
</button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body">
<p>It is a long established fact that a reader will be distracted by the readable conten of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less no content here', making it look like readable English.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-12">
<div class="sidebar">
<div class="sidebar-widget style2">
<h4>All Services</h4>
<div class="category-box style2">
<ul class="list-style">
<li>
<a href="service-category.html">
RozarPay
<span><i class=""><SiRazorpay/></i></span>
</a>
</li>
<li>
<a href="service-category.html">
PhonePay
<span><i class=""><SiSamsungpay /></i></span>
</a>
</li>
<li>
<a href="service-category-three.html">
GooglePay
<span><i class=""><FaGooglePay /></i></span>
</a>
</li>
<li>
<StripeCheckout 
  
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name="Buy React" 
        amount={message_parse * 100}
        shippingAddress
        billingAddress
         >
		
<a onClick={handleClick}>
Stripe
<span><i class=""><FaCcStripe /></i></span>
</a>

          {/* <button className="btn-large blue m4">Credit Cards</button> */}
        </StripeCheckout>
</li>
<li>
<a href="error.html">
Paypal
<span><i class=""><FaPaypal/></i></span>
</a>
</li>
<li>
<a href="scanner.html">
Scanner
<span><i class=""><SiPaytm/></i></span>
</a>
</li>
</ul>
 </div>
</div>
<div class="sidebar-widget style2">
<h4>Business Hours </h4>
<div class="schedule-widget">
<ul class="list-style">
<li>
<h6>Mon-Thurs</h6>
<p>8:00 AM - 5:00 PM</p>
</li>
<li>
<h6>Fri-Sat</h6>
<p>8:00 AM - 3:00 PM</p>
</li>
<li>
<h6>Sun</h6>
<p>Closed</p>
</li>
</ul>
</div>
</div>
<div class="sidebar-widget style3">
<div class="contact-widget-form">
<div class="overlay op-95 bg-rock"></div>
<h4>Lets Talk</h4>
<form action="#">
<div class="form-group">
<input type="text" placeholder="Name"/>
</div>
<div class="form-group">
<input type="email" placeholder="Email"/>
</div>
<div class="form-group">
<input type="phone" placeholder="Phone"/>
</div>
<div class="form-group">
<textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message"></textarea>
</div>
<button class="btn style1 d-block w-100" type="submit">Send Message</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
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


</div>


<a href="javascript:void(0)" class="back-to-top bounce"><i class=""><AiOutlineArrowUp/></i></a>

</div>
        

        );
    }
