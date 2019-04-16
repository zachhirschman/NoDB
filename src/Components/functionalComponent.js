import React, {Component} from "react"
import Axios from "axios";

export default function adviceGetter(){
    Axios.get("https://api.adviceslip.com/advice").then(response => {
        return alert(response.data.slip.advice)
    })
}
