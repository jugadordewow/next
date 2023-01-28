import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isEditable?: false;
   raiting: number;
   setRaiting?: (raiting:number) => void;
}

