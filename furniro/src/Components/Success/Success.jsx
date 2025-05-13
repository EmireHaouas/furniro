import { Link } from "react-router-dom";
import "./Success.css";
import Warranty from "../Global/Warranty";

const Success = () => {
    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Thank You for Your Purchase!</h1>
                <p>
                    Your payment was successful. You will receive a confirmation email
                    shortly.
                </p>
                <Link to="/">
                    <button>Back to Home</button>
                </Link>
            </div>

            <Warranty />
        </div>
    );
};

export default Success;
