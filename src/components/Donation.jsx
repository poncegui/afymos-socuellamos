
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// export default function App() {
//   const [price, setPrice] = useState(0);
//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: price
//           }
//         }
//       ]
//     });
//   };

//   const onApprove = (data, actions) => {
//     return actions.order.capture();
//   };
//   function handleChange(e) {
//     setPrice(e.target.value);
//   }
//   return (
//     <section>
//       <div className="App">
//         <h1>realizar donación de {price} €</h1>
//         <input
//           type="text"
//           onChange={handleChange}
//           value={price}
//           style={{ margin: 20 }}
//         />
//         <br />
//         <PayPalButton
//           createOrder={(data, actions) => createOrder(data, actions)}
//           onApprove={(data, actions) => onApprove(data, actions)}
//         />
//       </div>
//     </section>
//   );
// }