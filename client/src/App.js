import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import FoodListing from "./pages/FoodListing";
import FoodDetails from "./pages/FoodDetails";
import { useSelector } from "react-redux";
import Contact from "./components/Contact";
import OrderConfirmation from "./components/OrderConfirmation";
// import Order from "./components/Order";
const Container = styled.div``;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar
            setOpenAuth={setOpenAuth}
            openAuth={openAuth}
            currentUser={currentUser}
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/favorite"  element={<Favourites />} />
            <Route path="/cart"  element={<Cart />} />
            <Route path="/dishes/:id"  element={<FoodDetails />} />
            <Route path="/dishes"  element={<FoodListing />} />
            <Route path="/contact"  element={<Contact />} />
            {/* <Route path="/order-details/:orderId" element={<OrderDetails />} /> */}
            <Route path="/orders" element={<OrderConfirmation />} />
          
          </Routes>
          {openAuth && (
            <Authentication setOpenAuth={setOpenAuth} openAuth={openAuth} />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
