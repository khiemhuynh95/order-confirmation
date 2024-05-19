import * as React from 'react';
import { Html, Head, Body, Text, Link, Img, Section, Container} from "@react-email/components";
import {generateANumber, getCurrentFormattedTime ,generateApprovalCode} from "./utils"
// import '../public/css/main.css'
export function Email(props) {
  const { name, address, email, phone, order} = props;

  return (
    <Html lang="en">
      <Head>
         
      </Head>
      <Body>
      
      <Container style={title}>You have received this email from bxj210016@utdallas.edu in response to your Order.</Container>
      <Container style={containerStyle}>
            <Container style={textContainerStyle}>
                  <Container style={h1}>Order Receipt</Container>
                  <Section style={separator}/>
                  <Container style={h2}>Please present this receipt to the front desk, until your purchase has been fully activated on your comet card.</Container>
                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Order</th>
                           <td>{order}</td>
                     </tr>
                     <tr>
                           <th>Store</th>
                           <td>University Recreation - Membership Services</td>
                     </tr>
                     <tr>
                           <th>Date/Time</th>
                           <td>{getCurrentFormattedTime()}</td>
                     </tr>
                     <tr>
                           <th>Total</th>
                           <td>$8.00</td>
                     </tr>
                  </table>

                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Billed To:</th>
                           <td>Ship To:</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>{name}</th>
                           <td style={{fontWeight: 'normal'}}>{name}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>{address}</th>
                           <td style={{fontWeight: 'normal'}}>{address}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Garland, TX</th>
                           <td style={{fontWeight: 'normal'}}>Garland, TX</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>75040-4655</th>
                           <td style={{fontWeight: 'normal'}}>75040-4655</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>United States</th>
                           <td style={{fontWeight: 'normal'}}>United States</td>
                     </tr>
                  </table>

                  
                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Contact Email:</th>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>{email}</th>
                     </tr>

                  </table>
                  
                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Payment Information:</th>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Payment Type:</th>
                           <td style={{fontWeight: 'normal'}}>Credit Card</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Credit Card Number:</th>
                           <td style={{fontWeight: 'normal'}}>xxxxxxxxxxxx2660</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Reference Number:</th>
                           <td style={{fontWeight: 'normal'}}>{generateANumber(14)}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Card Type:</th>
                           <td style={{fontWeight: 'normal'}}>Discover</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Dev Info:</th>
                           <td style={{fontWeight: 'normal'}}>XXXXXX{generateANumber(3)}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Additional Amount:</th>
                           <td style={{fontWeight: 'normal'}}>---</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Processor Transaction ID:</th>
                           <td style={{fontWeight: 'normal'}}>{generateANumber(15)}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Approval Code:</th>
                           <td style={{fontWeight: 'normal'}}>{generateApprovalCode()}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Address Verification Result:</th>
                           <td style={{fontWeight: 'normal'}}>Y</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Security Code Validation Result:</th>
                           <td style={{fontWeight: 'normal'}}>M</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Validation Code:</th>
                           <td style={{fontWeight: 'normal'}}>0000</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>*** Card Not Present ***</th>
                     </tr>
                  </table>

                  <Section style={greenSep}/>
                                    
                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Shipping Information:</th>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Shipping Information:</th>
                           <td style={{fontWeight: 'normal'}}>{generateANumber(6)}</td>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>Delivery Method:</th>
                           <td style={{fontWeight: 'normal'}}>Electronic Payment</td>
                     </tr>

                  </table>

                  {/* Item table*/}
                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Item</th>
                           <th>Stock Number</th>
                           <th>Quantity</th>
                           <th>Unit Price</th>
                           <th>Detail Total</th>
                     </tr>
                     <tr>
                           <th>Non-Member Day Pass</th>
                           <th style={{fontWeight: 'normal'}}>6044442</th>
                           <th style={{fontWeight: 'normal'}}>1</th>
                           <th style={{fontWeight: 'normal'}}>$8.00</th>
                           <th style={{fontWeight: 'normal'}}>$8.00</th>
                     </tr>
                     <tr>
                        <th style={{fontWeight: 'normal'}}>Name: </th>
                        <td style={{fontWeight: 'normal'}}>{name}</td>
                     </tr>

                     <tr>
                        <th style={{fontWeight: 'normal'}}>Primary Phone:</th>
                        <td style={{fontWeight: 'normal'}}>+1 {phone}</td>
                     </tr>
                     <tr>
                        <th style={{fontWeight: 'normal'}}>Emergency Contact: </th>
                        <td style={{fontWeight: 'normal'}}>Nhu Nguyen</td>
                     </tr>
                     <tr>
                        <th style={{fontWeight: 'normal'}}>Address: </th>
                        <td style={{fontWeight: 'normal'}}>{address} Garland TX</td>
                     </tr>
                     <tr>
                           <th></th>
                           <th></th>
                           <th></th>
                           <th>Subtotal</th>
                           <th>$8.00</th>
                     </tr>
                     <tr>
                           <th></th>
                           <th></th>
                           <th></th>
                           <th>Tax</th>
                           <th>$0.00</th>
                     </tr>
                     <tr>
                           <th></th>
                           <th></th>
                           <th></th>
                           <th>Total</th>
                           <th>$8.00</th>
                     </tr>
                  </table>
                  
                  <Section style={greenSep}/>

                  <table style={table1} border="0" cellpadding="5" cellspacing="0" width="100%">
                     <tr>
                           <th>Return Policy Agreement:</th>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}>The University urges all users of the Student Activity Center, RCW and SPN to act in such a manner as to protect their own safety and the safety of others. The University further requires that all persons who participate in activities do so at their own risk and that each user sign the following agreement prior to use of the Student Activity Center, RCW and SPN "I fully understand that my use of the Student Activity Center, RCW and SPN is purely voluntary. I desire to participate and agree to act in a reasonable and prudent manner. As a condition to my use of the Student Activity Center, RCW and SPN I waive and release the State of Texas, The University of Texas System, The University of Texas at Dallas and their officers, employees and agents from any claim that I may have for any damage to property or injury to my person that may result in whole or in part from my use of the Student Activity Center, RCW and SPN facilities. I understand the University does not expressly or impliedly require participation in these activities.</th>
                     </tr>
                     <tr>
                           <th>Privacy Statement:</th>
                     </tr>
                     <tr>
                           <th style={{fontWeight: 'normal'}}> With few exceptions, you are entitled on your request to be informed about the information U. T. Dallas collects about you. Under Sections 552.021 and 552.023 of the Texas Government Code, you are entitled to receive and review the information. Under Section 559.004 of the Texas Government Code, you are entitled to have U. T. Dallas correct information about you that is held by us and that is incorrect.</th>
                     </tr>
                  </table>
                  
                  <Section style={greenSep}/>
                  <p>For questions, comments, or Order status, send email to <a href="mailto:bxj210016@utdallas.edu" style={footer} target="_blank">bxj210016@utdallas.edu</a> and refer to Order {order}. Visit us <a href="https://ezpay.utdallas.edu:443/C20239_ustores/web/index.jsp" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://ezpay.utdallas.edu:443/C20239_ustores/web/index.jsp&amp;source=gmail&amp;ust=1716000206294000&amp;usg=AOvVaw1bNvXqhkGIiZbu1Awdvss0">online</a>.</p>
            </Container>
            
         
      </Container>

      </Body>
    </Html>
  );
}

const title = {
   fcolor: '#666666',
   fontFamily: 'Arial',
   'font-size': '10px',
   'line-height': '100%',
   'line-width': '100%',
   'text-align': 'left',
   padding: '10px 0px'
}

const h1 = {
   color: '#333333',
   display: 'block',
   'text-align': 'left',
   font: 'bold 24px / 100% Arial',
   'font-size': '2em',
   'font-weight': 'bold',
   'unicode-bidi': 'isolate'
 };

 const separator = {
   border: 0,
   'border-top': '2px solid #fdb913',
   "margin-top": '10px',
   'margin-bottom': '10px',
 }

 const greenSep = {
   background: '#55a51c',
   display: 'block',
   height: '5px',
   margin: '5px 0px 10px',
   padding: '0px',
   'border-style': 'none'
 }

 const h2 = {
   color: '#515151',
   display: 'block',
   'text-align': 'left',
   margin: '0px',
   padding:'0px 0px 5px',
   font: 'bold 18px / 100% Arial'
 };

 const table1 = {
   display: 'table',
   'text-align': 'left',
   'border-collapse': 'separate',
   'box-sizing': 'border-box',
   'text-indent': 'initial',
   'unicode-bidi': 'isolate',
   font: 'bold 12px / 100% Arial',
   'table-layout': 'fixed',
   padding: '5px',
   'border-top': '1px solid #ccc',
   'margin-top': '10px'
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
   padding: '10px'
}

const footer = {
   color: '#333',
   margin: '0px 0px 5px',
   padding: '0px',
   font: 'normal 12px / 100% Arial',
   display: 'block'
}