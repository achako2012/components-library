import React from 'react';
import './button.module.scss'
import styles from "./button.module.scss";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    className?: string
}

export const Button =
    ({
         size,
         label,
         onClick,
         className,
         ...props
     }: ButtonProps) => {

        const classes = `${ styles.wrapper } ${ className }`

        return (
            <button
                type="button"
                className={ classes }
                onClick={ onClick }
                { ...props }
            >
                { label }
            </button>
        );
    };
