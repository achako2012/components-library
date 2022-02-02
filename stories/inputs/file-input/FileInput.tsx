import React from 'react';
import styles from './fileInput.module.scss'

interface FileInputProps {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const FileInput =
    ({
         label,
         onChange,
         className,
         ...props
     }: FileInputProps) => {
        const classes = `${styles.wrapper} ${ className }`

        return (
            <div className={ classes }>
                <label htmlFor="file" className={ styles.label }>
                    <input type="file"
                           id="file"
                           onChange={ (event) => onChange(event) }
                           { ...props }/>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 74.207 74.207">
                        <path d="M57.746,14.658h-2.757l-1.021-3.363c-0.965-3.178-3.844-5.313-7.164-5.313H28.801c-3.321,0-6.201,2.135-7.165,5.313
		l-1.021,3.363h-4.153C7.385,14.658,0,22.043,0,31.121v20.642c0,9.077,7.385,16.462,16.462,16.462h41.283
		c9.077,0,16.462-7.385,16.462-16.462V31.121C74.208,22.043,66.823,14.658,57.746,14.658z M68.208,51.762
		c0,5.769-4.693,10.462-10.462,10.462H16.462C10.693,62.223,6,57.53,6,51.762V31.121c0-5.769,4.693-10.462,10.462-10.462h8.603
		l2.313-7.621c0.192-0.631,0.764-1.055,1.423-1.055h18.003c0.659,0,1.23,0.424,1.423,1.057l2.314,7.619h7.204
		c5.769,0,10.462,4.693,10.462,10.462L68.208,51.762L68.208,51.762z"/>
                        <path d="M37.228,25.406c-8.844,0-16.04,7.195-16.04,16.04c0,8.844,7.195,16.039,16.04,16.039s16.041-7.195,16.041-16.039
		C53.269,32.601,46.073,25.406,37.228,25.406z M37.228,51.486c-5.536,0-10.04-4.504-10.04-10.039c0-5.536,4.504-10.04,10.04-10.04
		c5.537,0,10.041,4.504,10.041,10.04C47.269,46.982,42.765,51.486,37.228,51.486z"/>
                    </svg>
                    <p>{ label }</p>
                </label>
            </div>
        );
    };
