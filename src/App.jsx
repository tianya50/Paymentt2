import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./styles.css";

export default function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </PayPalScriptProvider>
  );
}
