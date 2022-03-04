import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes <HTMLButtonElement>{
    children: ReactNode;
    variant: 'primary' | 'secondary';
}

export const Button2 = ({children, ...props}: Props) => {
    return (
        <button{...props}>
            {children}
        </button>
    )
}