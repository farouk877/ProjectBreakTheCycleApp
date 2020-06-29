import { PayPalButton } from "react-paypal-button-v2";
import React, {Component} from 'react';

export default class ExamplePaypal extends Component {
        
        constructor(props) {
          super(props)
          this.state = {amount: "11.00"}

          this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleSubmit(event) {
          alert('Donation Amount: ' + this.state.value);
          // event.preventDefault();
          amount = this.state.value
        }

        render() {
          return (
            <PayPalButton
              amount="11.00"
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                console.log("Transaction completed by " + details.payer.name.given_name);
       
                // OPTIONAL: Call your server to save the transaction
                // return fetch("/paypal-transaction-complete", {
                //   method: "post",
                //   body: JSON.stringify({
                //     orderId: data.orderID
                //   })
                // });
              }}
              options={{
                clientId: "AXY9h5mWwerWSUJHRyQkGAqCBFd-AoHmHgHPf7OisSg3Ki2WtNQxiuT0Gmt3WT_4amdlQKhXapJZID8_"
              }}
            />
            
          );
        }
      }