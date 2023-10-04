import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Payment(){
    const onToken=(token)=>{
        console.log(token);
    };
    return(
        <div>
            <StripeCheckout
                token={onToken}
                name="Employment Payment"
                currency='AUDr'
                amount='1000'
                stripeKey="my_PUBLISHABLE_stripekey"
      />
        </div>
    )
}

export default Payment