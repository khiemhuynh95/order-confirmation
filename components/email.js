import * as React from 'react';
import { Html, Head, Body, Text, Link, Img, Section, Container} from "@react-email/components";
import {generateANumber, getCurrentFormattedTime ,generateApprovalCode} from "./utils"
// import '../public/css/main.css'
export function Email(props) {
  const { name, address, email, phone} = props;

  return (
    <Html lang="en">
      <Head>
         {/* <Link rel="stylesheet" href="https://raw.githack.com/khiemhuynh95/order-confirmation/master/public/css/main.css" /> */}
      </Head>
      <Body>
      <Container style={title}>You have received this email from bxj210016@utdallas.edu in response to your Order.</Container>
      <Container style={containerStyle}>
         
            <Container style={textContainerStyle}>
                  
                  <Container style={h1}>Order Receipt</Container>
                  <Container style={h2}>Please present this receipt to the front desk, until your purchase has been fully activated on your comet card.</Container>
                  
                  
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" id="m_2423147592073696879tempOrderNumberStore">
                     <tbody><tr>
                        <td valign="top">
                           <p><span class="m_2423147592073696879dataLabel">Order:</span><span class="m_2423147592073696879data">972183</span></p>
                        </td>
                     </tr>
                     <tr>
                        <td valign="top">
                           <p><span class="m_2423147592073696879dataLabel">Store:</span><span class="m_2423147592073696879data">University Recreation - Membership Services</span></p>
                        </td>
                     </tr>
                     <tr>
                        <td valign="top">
                           <p><span class="m_2423147592073696879dataLabel">Date/Time:</span><span class="m_2423147592073696879data">May 16, 2024 at 6:26:07 PM CDT</span></p>
                        </td>
                     </tr>
                     <tr>
                        <td valign="top">
                           <p><span class="m_2423147592073696879dataLabel">Total:</span><span class="m_2423147592073696879data">$8.00</span></p>
                        </td>
                     </tr>
                     </tbody></table>
                  <Container className="t m0 xb h8 yf ff4 fs5 fc3 sc0 lsd ws0">Order:<span className="lse">972183</span></Container>
                  <Container className="t m0 xb h8 y10 ff4 fs5 fc3 sc0 lsf ws0">Store:<span className="ls10">University Recreation - Membership Services</span></Container>
                  <Container className="t m0 xb h8 y11 ff4 fs5 fc3 sc0 ls11 ws0">Date/Time:<span className="ls12">{getCurrentFormattedTime()}</span></Container>
                  <Container className="t m0 xb h8 y12 ff4 fs5 fc3 sc0 ls13 ws0">Total:<span className="ls14">$8.00</span></Container>
                  <Container className="t m0 xb h8 y13 ff4 fs5 fc3 sc0 ls15 ws0">Billed To:</Container>
                  <Container className="t m0 xb h9 y14 ff3 fs5 fc3 sc0 ls16 ws0">{name}</Container>
                  <Container className="t m0 xb h9 y15 ff3 fs5 fc3 sc0 ls17 ws0">{address}</Container>
                  <Container className="t m0 xb h9 y16 ff3 fs5 fc3 sc0 ls18 ws0">Garland, TX</Container>
                  <Container className="t m0 xb h9 y17 ff3 fs5 fc3 sc0 ls19 ws0">75040-4655</Container>
                  <Container className="t m0 xb h9 y18 ff3 fs5 fc3 sc0 ls1a ws0">United States</Container>
                  <Container className="t m0 xc h8 y13 ff4 fs5 fc3 sc0 ls1b ws0">Ship To:</Container>
                  <Container className="t m0 xc h9 y14 ff3 fs5 fc3 sc0 ls16 ws0">{name}</Container>
                  <Container className="t m0 xc h9 y15 ff3 fs5 fc3 sc0 ls17 ws0">{address}</Container>
                  <Container className="t m0 xc h9 y16 ff3 fs5 fc3 sc0 ls18 ws0">Garland, TX</Container>
                  <Container className="t m0 xc h9 y17 ff3 fs5 fc3 sc0 ls19 ws0">75040-4655</Container>
                  <Container className="t m0 xc h9 y18 ff3 fs5 fc3 sc0 ls1a ws0">United States</Container>
                  <Container className="t m0 xa h8 y19 ff4 fs5 fc3 sc0 ls1c ws0">Contact Email:</Container>
                  <Container className="t m0 xa h9 y1a ff3 fs5 fc3 sc0 ls1d ws0">{email}</Container>
                  <Container className="t m0 x4 h8 y1b ff4 fs5 fc3 sc0 ls1e ws0">Payment Information:</Container>
                  <Container className="t m0 x4 h9 y1c ff3 fs5 fc3 sc0 ls1f ws0">Payment Type:<span className="ls20">Credit Card</span></Container>
                  <Container className="t m0 x4 h9 y1d ff3 fs5 fc3 sc0 ls21 ws0">Credit Card Number:<span className="ls22">xxxxxxxxxxxx2660</span></Container>
                  <Container className="t m0 x4 h9 y1e ff3 fs5 fc3 sc0 ls23 ws0">Reference Number:<span className="ls24">{generateANumber(14)}</span></Container>
                  <Container className="t m0 x4 h9 y1f ff3 fs5 fc3 sc0 ls25 ws0">Card Type:<span className="ls26">Discover</span></Container>
                  <Container className="t m0 x4 h9 y20 ff3 fs5 fc3 sc0 ls27 ws0">Dev Info:<span className="ls28">XXXXXX{generateANumber(3)}</span></Container>
                  <Container className="t m0 x4 h9 y21 ff3 fs5 fc3 sc0 ls29 ws0">Additional Amount:<span className="ls2a">---</span></Container>
                  <Container className="t m0 x4 h9 y22 ff3 fs5 fc3 sc0 ls2b ws0">Processor Transaction ID:<span className="ls2c">{generateANumber(15)}</span></Container>
                  <Container className="t m0 x4 h9 y23 ff3 fs5 fc3 sc0 ls2d ws0">Approval Code:<span className="ls2e">{generateApprovalCode()}</span></Container>
                  <Container className="t m0 x4 h9 y24 ff3 fs5 fc3 sc0 ls2f ws0">Address Verification Result:<span className="ls30">Y</span></Container>
                  <Container className="t m0 x4 h9 y25 ff3 fs5 fc3 sc0 ls31 ws0">Security Code Validation Result:<span className="ls32">M</span></Container>
                  <Container className="t m0 x4 h9 y26 ff3 fs5 fc3 sc0 ls33 ws0">Validation Code:<span className="ls34">0000</span></Container>
                  <Container className="t m0 x4 h9 y27 ff3 fs5 fc3 sc0 ls35 ws0">*** Card Not Present ***</Container>
                  <Container className="t m0 x4 h8 y28 ff4 fs5 fc3 sc0 ls36 ws0">Shipping Information:</Container>
                  <Container className="t m0 x4 h9 y29 ff3 fs5 fc3 sc0 ls37 ws0">Shipping Information:<span className="lse">{generateANumber(6)}</span></Container>
                  <Container className="t m0 x4 h9 y2a ff3 fs5 fc3 sc0 ls38 ws0">Delivery Method:<span className="ls39">Electronic Payment</span></Container>
                  <Container className="t m0 xa h8 y2b ff4 fs5 fc3 sc0 ls22 ws0">Item<span className="_ _1"> </span><span className="ls3a">Stock Number<span className="_ _2"> </span><span className="ls3b">Quantity<span className="_ _3"> </span><span className="ls3c">Unit Price<span className="_ _4"> </span><span className="ls3d">Detail Total</span></span></span></span></Container>
                  <Container className="t m0 xa h9 y2c ff4 fs5 fc3 sc0 ls3e ws0">Non-Member Day Pass<span className="_ _5"> </span><span className="ff3 ls24">6044442<span className="_ _6"> </span><span className="ls34">1<span className="_ _7"> </span><span className="ls14">$8.00<span className="_ _8"> </span>$8.00</span></span></span></Container>
                  <Container className="t m0 xa h9 y2d ff3 fs5 fc3 sc0 ls3f ws0">Name:: {name}<span className="_ _9"> </span><span className="ls40"> <span className="_ _a"> </span> <span className="_ _b"> </span> </span></Container>
                  <Container className="t m0 xa h9 y2e ff3 fs5 fc3 sc0 ls41 ws0">Primary Phone: +1 {phone}<span className="_ _c"> </span><span className="ls40"> <span className="_ _a"> </span> <span className="_ _b"> </span> </span></Container>
                  <Container className="t m0 xa h9 y2f ff3 fs5 fc3 sc0 ls42 ws0">Emergency Contact: Nhu Nguyen<span className="_ _d"> </span><span className="ls40"> <span className="_ _a"> </span> <span className="_ _b"> </span> </span></Container>
                  <Container className="t m0 xa h9 y30 ff3 fs5 fc3 sc0 ls43 ws0">Address: {address} Garland TX<span className="_ _e"> </span><span className="ls40"> <span className="_ _a"> </span> <span className="_ _b"> </span> </span></Container>
                  <Container className="t m0 xa h8 y31 ff4 fs5 fc3 sc0 ls40 ws0"> <span className="_ _f"> </span> <span className="_ _a"> </span> <span className="_ _a"> </span><span className="ls44">Subtotal:<span className="_ _10"> </span><span className="ls14">$8.00</span></span></Container>
                  <Container className="t m0 xa h8 y32 ff4 fs5 fc3 sc0 ls40 ws0"> <span className="_ _f"> </span> <span className="_ _a"> </span> <span className="_ _a"> </span><span className="ls45">Tax:<span className="_ _11"> </span><span className="ls14">$0.00</span></span></Container>
                  <Container className="t m0 xa h8 y33 ff4 fs5 fc3 sc0 ls40 ws0"> <span className="_ _f"> </span> <span className="_ _a"> </span> <span className="_ _a"> </span><span className="ls13">Total:<span className="_ _12"> </span><span className="ls14">$8.00</span></span></Container>
                  <Container className="t m0 xd h8 y34 ff4 fs5 fc3 sc0 ls3d ws0">Return Policy Agreement:</Container>
                  <Container className="t m0 xd h9 y35 ff3 fs5 fc3 sc0 ls46 ws0">The University urges all users of the Student Activity Center, RCW and SPN to act in such a manner as to</Container>
                  <Container className="t m0 xd h9 y36 ff3 fs5 fc3 sc0 ls47 ws0">protect their own safety and the safety of others. The University further requires that all persons who</Container>
                  <Container className="t m0 xd h9 y37 ff3 fs5 fc3 sc0 ls48 ws0">participate in activities do so at their own risk and that each user sign the following agreement prior to use of</Container>
                  <Container className="t m0 xd h9 y38 ff3 fs5 fc3 sc0 ls49 ws0">the Student Activity Center, RCW and SPN &quot;I fully understand that my use of the Student Activity Center,</Container>
                  <Container className="t m0 xd h9 y39 ff3 fs5 fc3 sc0 ls4a ws0">RCW and SPN is purely voluntary. I desire to participate and agree to act in a reasonable and prudent</Container>
                  <Container className="t m0 xd h9 y3a ff3 fs5 fc3 sc0 ls4b ws0">manner. As a condition to my use of the Student Activity Center, RCW and SPN I waive and release the</Container>
                  <Container className="t m0 xd h9 y3b ff3 fs5 fc3 sc0 ls4c ws0">State of Texas, The University of Texas System, The University of Texas at Dallas and their officers,</Container>
                  <Container className="t m0 xd h9 y3c ff3 fs5 fc3 sc0 ls4d ws0">employees and agents from any claim that I may have for any damage to property or injury to my person</Container>
                  <Container className="t m0 xd h9 y3d ff3 fs5 fc3 sc0 ls4e ws0">that may result in whole or in part from my use of the Student Activity Center, RCW and SPN facilities. I</Container>
                  <Container className="t m0 xd h9 y3e ff3 fs5 fc3 sc0 ls4f ws0">understand the University does not expressly or impliedly require participation in these activities.&quot;</Container>
                  <Container className="t m0 xd h9 y3f ff4 fs5 fc3 sc0 ls50 ws0">Privacy Statement<span className="ff3 ls51"> With few exceptions, you are entitled on your request to be informed about the</span></Container>
                  <Container className="t m0 xd h9 y40 ff3 fs5 fc3 sc0 ls52 ws0">information U. T. Dallas collects about you. Under Sections 552.021 and 552.023 of the Texas Government</Container>
                  <Container className="t m0 xd h9 y41 ff3 fs5 fc3 sc0 ls53 ws0">Code, you are entitled to receive and review the information. Under Container 559.004 of the Texas</Container>
                  <Container className="t m0 xd h9 y42 ff3 fs5 fc3 sc0 ls54 ws0">Government Code, you are entitled to have U. T. Dallas correct information about you that is held by us and</Container>
                  <Container className="t m0 xd h9 y43 ff3 fs5 fc3 sc0 ls55 ws0">that is incorrect.</Container>
                  <Container className="t m0 xd h9 y44 ff3 fs5 fc3 sc0 ls56 ws0">For questions, comments, or Order status, send email to <span className="fc5 ls57">bxj210016@utdallas.edu<span className="_ _13"> </span></span><span className="ls58"> and refer to Order</span></Container>
                  <Container className="t m0 xd h9 y45 ff3 fs5 fc3 sc0 ls59 ws0">972183. Visit us <span className="fc5 ls5a">online<span className="_ _14"> </span></span><span className="ls40">.</span></Container>
          
            </Container>
            <Container className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></Container>
         
      </Container>
      <Container className="loading-indicator">
      </Container>
      </Body>
    </Html>
  );
}

const title = {
   fcolor: '#666666',
   'font-family': 'Arial',
   'font-size': '10px',
   'line-height': '100%',
   'text-align': 'left'
}

const h1 = {
   color: '#333333',
   display: 'block',
   'text-align': 'left',
   font: 'bold 24px / 100% Arial',
   'border-bottom': '2px solid #fdb913',
   margin: '0px 0px 10px',
   padding: '0px 0px 5px'
 };

 const h2 = {
   color: '#515151',
   display: 'block',
   'text-align': 'left',
   margin: '0px',
   padding:'0px 0px 5px',
   font: 'bold 18px / 100% Arial'
 };

 const table1 = {
   display: 'table-row-group',
   'vertical-align': 'middle',
   'unicode-bidi': 'isolate',
   'border-color': 'inherit',
   'border-top': '1px solid #ccc',
   'font-weight': 'bold'
 }

 const tr1 = {
   display: 'table-row',
   'unicode-bidi': 'isolate',
   'border-color': 'inherit',
 }

 const imgStyle={
   position: 'absolute',
	border: 0,
	margin: 0,
   left: 0,
   top: 0,
   right: 0,
   width: '595px',
	'user-select': 'none'
 }

const sidebarStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	width: '250px',
	padding: 0,
	margin: 0,
	overflow: 'auto'
}

const containerStyle = {
   border: '1px solid #ccc',
   'margin-bottom': '15px',
   'background-color': '#fff'
}

const textContainerStyle = {
   margin: '10px'
}