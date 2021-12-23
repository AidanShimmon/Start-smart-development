import React from "react";
import { Link } from 'gatsby'

import * as styles from "./button.module.scss"

const Button = ({text, link, id}) => {
    return (
        <Link
            className={styles.button}
            to={link}
            id={id}
        >
            {text}
        </Link>
    )
}

export default Button;