import React, { useEffect, useState } from "react";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import { useCart } from "../Global/Cartcontext";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
    "pk_test_51QtRmcQTJeQQ3mJDSk0mQn16RR65B3TySZGLHZxmJWKFcHC2uNH4SmRq3w5szdjZUufyVFNY1W0dZ8X05nrrAtIe00PFUJ5DhW"
);

const PaymentForm = ({ totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://furniro-ng8e.onrender.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: totalAmount * 100 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
            .catch((error) =>
                console.error("Erreur de création du PaymentIntent :", error)
            );
    }, [totalAmount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            console.error(result.error.message);
            setPaymentStatus(`❌ Payment failed: ${result.error.message}`);
        } else {
            if (result.paymentIntent.status === "succeeded") {
                setPaymentStatus("✅ Payment successful!");
                setTimeout(() => {
                    navigate("/success");
                }, 2000);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="payment-warning">
                <p className='payment-warning-text'>
                    🚨 <strong>Demo Mode:</strong> This is a demo application. Payments
                    are processed using Stripe's <strong>TEST mode</strong>. Use Stripe
                    test cards only. No real transactions will be made.
                </p>
                <p className='payment-warning-text'>
                    Example test card: <strong>4242 4242 4242 4242</strong>
                    <br />
                    Exp: <strong>Any future date</strong> | CVC:{" "}
                    <strong>Any 3 digits</strong> | ZIP: <strong>Any</strong>
                </p>
            </div>
            <CardElement />
            <button className='payment_Btn' type="submit" disabled={!stripe || !clientSecret}>
                Pay Now
            </button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </form>
    );
};

const Payment = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <h2>Your cart is empty</h2>;
    }

    const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="payment-container">
            <h1>Secure Payment</h1>
            <Elements stripe={stripePromise}>
                <PaymentForm totalAmount={totalAmount} />
            </Elements>
        </div>
    );
};

export default Payment;
