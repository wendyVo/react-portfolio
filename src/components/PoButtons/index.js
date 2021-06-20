import React from "react";
import {Button} from "react-mdl";
import "./style.css";

export function PoButtons({btnText, onPress}) {
    return(
        <Button className="btnBlue" onClick={onPress}>{btnText}</Button>
    );
};

export function LinkButtons({btnLink, btnText}){
    return(
        <Button className="btnBlue"><a href={btnLink} target="_blank">{btnText}</a></Button>
    )
}

