import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbars from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import TabaccoContextProvider from "./Context/TabaccoContext";
import CartContextProvider from "./Context/CartContext";
import AuthContextProvider from "./Context/AuthContextProvider.js";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <CartContextProvider>
            <TabaccoContextProvider>
              <Navbars />
              <MainRoutes />
              <Footer />
            </TabaccoContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
