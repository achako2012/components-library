import React from "react";

import styles from "./textInput.module.scss"

interface TextInputProps {
    placeholderText: string;
    legend: string;
    id: string;
    state: string;
    setState: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}


export const TextInput =
    ({
         placeholderText,
         legend,
         id,
         state,
         setState,
         className,
         ...props
     }: TextInputProps) => {

        const classes = `${ styles.wrapper } ${ className }`;

        return (
            <fieldset className={ classes }>
                <legend className={ styles.legend }>{ legend }</legend>
                <div className='input-elements'>
                    <input
                        type="text"
                        id={ id }
                        placeholder={ placeholderText }
                        value={ state }
                        onChange={ (event) => setState(event) }
                        { ...props }/>
                </div>
            </fieldset>
        );
    };
