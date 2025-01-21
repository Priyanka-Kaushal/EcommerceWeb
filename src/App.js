import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./productComponents/account";
import ProductViewPage from "./productComponents/productsViewPage";
import ProductOverview from "./productComponents/productOverview";
import CartPage from "./productComponents/cartPage"; 
import CheckoutPage from "./productComponents/CheckoutPage";
import { Provider } from "react-redux";
import store from "./prodRedux/store/store";
import ShippingOrder from "./productComponents/ShippingOrder";
import Footer from "../src/productComponents/layouts/Footer";
import PrivacyPolicy from "./productComponents/layouts/Privacy";
import TermsOfService from "./productComponents/layouts/Terms";
import Navbar from "./productComponents/layouts/Navbar";
import MaleCollection from "./productComponents/layouts/MaleCollection";
import OrgGirls from "./productComponents/layouts/OrgGirls";
import ViewDetails from "./productComponents/layouts/viewDetails";
import { TitleProvider } from "./productComponents/productContext";
// import Count from "./productComponents/count";
// import Header from './productComponents/layouts/Header';

function App() {
  return (
    
    
    <Provider store={store}>
      <Router>
      <Navbar />
      <TitleProvider>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/productPage" element={<ProductViewPage />} />
          <Route path="/product/:id" element={<ProductOverview />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/ShippingOrder" element={<ShippingOrder />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/boysCollection" element={<MaleCollection />} />
          <Route path="/girlsCollection" element={<OrgGirls />} />
          <Route path="/view-details/:id" element= {<ViewDetails />} />
          {/* extra code for learning purpose in classs, function, redux */}
          {/* <Route path="/count" element= {<Count />} />
          <Route path = "/Header" element  = {<Header />} /> */}
        </Routes>
        <Footer />
        </TitleProvider>
      </Router>
    </Provider>
  );
}

export default App;

