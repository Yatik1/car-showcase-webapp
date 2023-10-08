import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit";
}