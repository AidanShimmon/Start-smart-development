import React from "react";

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
    return (
        <div className="main">
            <Header />
            <main className="main__content">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout