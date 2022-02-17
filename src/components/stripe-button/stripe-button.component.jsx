import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price *100;
  const publishableKey = 'pk_test_51KTl6NAC5Vxk48KIFCb9V5jbsvmZx05R036P5zYDElKWDy1io4JpmBEVxMOISOT00FajmI3M18ZsLIN17jIWGKAK00er9h5tLe'

  const onToken = token =>{
    console.log(token);
    alert('Paymen successful');
  }
  return(
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;