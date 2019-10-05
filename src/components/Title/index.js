import React from "react";
import "./style.css";

export function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export function Subtitle(props){
  return <h3 className="subtitle">{props.children}</h3>;
}

