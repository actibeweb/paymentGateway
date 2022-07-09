
import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import "./styleThree.css";

export default function App() {
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
      var message_parse = parseInt(message);
			setMessage('New value');
		  };
		

  const paymentRequest = {
    
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "INR",
      countryCode: "IN"
    }
  };

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("buy");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(240);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = window === window.top;

  return (
    <div>
    


      

      <div class="container-contact100">
<div class="wrap-contact100">
<form class="contact100-form validate-form">
<span class="contact100-form-title">
ActibePay
</span>
<div class="wrap-input100 validate-input" data-validate="Name is required">
<span class="label-input100">Your Name</span>
<input class="input100" type="text" name="name" placeholder="Enter your name"/>
<span class="focus-input100"></span>
</div>
<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<span class="label-input100">Email</span>
<input class="input100" type="text" name="email" placeholder="Enter your email addess"/>
<span class="focus-input100"></span>
</div>
<div class="wrap-input100 input100-select">
<span class="label-input100">Needed Services</span>
<div>
<select class="selection-2 label-input100" name="service" onChange={event => setButtonType(event.target.value)}>

          {/* <span>Service</span> */}
          {/* <select
            value={buttonType}
            
          > */}
            <option value="buy">buy</option>
            <option value="plain">plain</option>
            <option value="donate">donate</option>
          </select>
      

</div>
<span class="focus-input100"></span>
</div>
{/* <div class="wrap-input100 input100-select">
<span class="label-input100">Budget</span>
<div>
<select class="selection-2" name="budget">
<option>Select Budget</option>
<option>1500 $</option>
<option>2000 $</option>
<option>2500 $</option>
</select>
</div>
<span class="focus-input100"></span>
</div> */}
<div class="wrap-input100 validate-input" data-validate="Message is required">
<span class="label-input100">Message</span>
<textarea class="input100" name="message" placeholder="Your message here..."></textarea>
<span class="focus-input100"></span>
</div>
<div class="container-contact100-form-btn">
<div class="wrap-contact100-form-btn">
{/* <div class="contact100-form-bgbtn"></div> */}
<div className="contact100-form-btn">
        <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: buttonWidth, height: buttonHeight }}
        />
      </div>

</div>
</div>
</form>
</div>
</div>
<div id="dropDownSelect1"></div>
        {/* <label className="control">
          <span>Button color</span>
          <select
            value={buttonColor}
            onChange={event => setButtonColor(event.target.value)}
          >
            <option value="default">default</option>
            <option value="black">black</option>
            <option value="white">white</option>
          </select>
        </label> */}
        {/* <label className="control">
          <span>Service</span>
          <select
            value={buttonType}
            onChange={event => setButtonType(event.target.value)}
          >
            <option value="buy">buy</option>
            <option value="plain">plain</option>
            <option value="donate">donate</option>
          </select>
        </label> */}
        {/* <label> */}
          {/* {/* <input
            type="checkbox"
            checked={buttonSizeMode === "fill"}
            onChange={event =>
              setButtonSizeMode(event.target.checked ? "fill" : "static")
            } 
          /> */}
          
        {/* </label> */}
        {/* <label className="control">
          <span>
            Button width <span className="value">({buttonWidth}px)</span>
          </span>
          <input
            type="range"
            min="160"
            max="800"
            value={buttonWidth}
            onChange={event => setButtonWidth(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label> */}
        {/* <label className="control">
          <span>
            Button height <span className="value">({buttonHeight}px)</span>
          </span>
          <input
            type="range"
            min="40"
            max="100"
            value={buttonHeight}
            onChange={event => setButtonHeight(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label> */}
      {/* </form> */}

      
    </div>
  );
}