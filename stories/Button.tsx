import React from 'react';
import classes from '../styles/button.module.scss'

interface ButtonProps {
    label: string;

}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                           label,
                           ...props
                       }: ButtonProps) => {
    return (
        <button className={ classes.button }>{ label }</button>
    );
};
