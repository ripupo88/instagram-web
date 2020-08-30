import { PayPalButton } from "react-paypal-button-v2";

export const PaypalBasic = () => {
    return (
        <PayPalButton
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
                alert(
                    "Transaction completed by " + details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                        orderID: data.orderID,
                    }),
                });
            }}
            options={{
                clientId:
                    "Aa0YZMHZduwYf68AgRIsAlEmyIvXBEUp2VBQK3dvfiC5tqZ_EnXrZbgUwPG6senXc8hhzD05jaWeFUo8",
            }}
        />
    );
};
