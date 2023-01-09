import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'large' | 'small';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary',
    href?: string
}