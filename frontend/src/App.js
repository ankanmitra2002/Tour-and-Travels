import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Components/ProfileManagement/LoginPage.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./Components/Booking/BookingPage";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import PaymentOptions from "./Components/Payment/PaymentOptions";
import DebitCardPayment from "./Components/Payment/DebitCardPayment";
import CreditCardPayment from "./Components/Payment/CreditCardPayment";
import UpiPayment from "./Components/Payment/UpiPayment";
import BookedTours from "./Components/Booking/BookedTours";
import ProfilePage from "./Components/ProfileManagement/ProfilePage.js";
import { useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import UpdateBookingPage from "./Components/Booking/UpdateBookingPage.js";
const App = () => {
  const location = useLocation();
  const showNavbarRoutes = ["/", "/login", "/booked-tours", "/profile"];
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);
  return (
    <Router>
      {shouldShowNavbar && <Navbar />}
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/booking-details" component={BookingPage} />
        <Route path="/payment-options" component={PaymentOptions} />
        <Route path="/payment/upi" component={UpiPayment} />
        <Route path="/payment/credit-card" component={CreditCardPayment} />
        <Route path="/payment/debit-card" component={DebitCardPayment} />
        <Route path="/booked-tours" component={BookedTours} />
        <Route path="/update-booking" component={UpdateBookingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/">
          <Home />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
