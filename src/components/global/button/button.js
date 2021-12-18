import React from "react";
import { Link } from 'gtaby'

const Button = ({text, link, className, id}) => {
    return (
        <Link
            className={className}
            to={link}
            id={id}
        >
            {text}
        </Link>
    )
}

export default Button;