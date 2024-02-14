import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import  "./main-layout.css";
export const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <header>
        <Header />
        <main className="container">{children}</main>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
