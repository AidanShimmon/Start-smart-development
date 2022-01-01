import React from "react";
import Header from "../header/header"
import Footer from "../footer/footer"

import * as styles from "./layout.module.scss"

const Layout = ({ children }) => {
    return (
        <div className={styles.main} id="home">
            <Header />
            <main className={styles.main__content}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout