import React, {Component} from "react"
import App from "../App"
import "../App.css"

export default class getWeather extends Component{
    constructor(){
        super()
        this.state={
            input:"",
            form:false
        }
        this.getWeather=this.getWeather.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.toggleForm=this.toggleForm.bind(this)
    }
    getWeather(){
        this.props.getWeatherFn(this.state.input);
    }
    handleChange(value){
        this.setState({
            input:value
        })
    }
    toggleForm(){
        this.setState({
            form:true
        })
    }

    render(){
        const weatherForm = (<div>
            <input placeholder ="Enter Zipcode" onChange ={(e) => this.handleChange(e.target.value)}></input>
            <button onClick ={this.getWeather}>Submit</button>
        </div>)
        console.log(this.props.weatherInfo[0])
        return(
            <div className="WeatherInfo">
                <button onClick = {this.toggleForm}>Get Weather</button>
                <img src={this.props.icon}></img>
                <h3>{this.props.main}</h3>
                <h3>{this.props.description}</h3>
                {this.state.form? weatherForm:null}
            </div>
        )
    }
}