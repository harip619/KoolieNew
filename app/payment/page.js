'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Stripe from 'stripe';
import CheckoutForm from "./../../components/Home/CheckoutForm"
function Payment() {
    const Searchparam=useSearchParams();
    const amount=Searchparam.get("amount");
    
    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY)
    const options={
        mode:'payment',
        amount:Math.round(amount*100),
        currency:'inr'
    }
  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={amount}/>
    </Elements>
  )
}

export default Payment
