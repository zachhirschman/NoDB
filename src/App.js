import React, { Component } from 'react';
import './App.css';
import axios from "axios"
// import YelpBusiness from "./Components/YelpBusiness"
import LocalBusiness from "./Components/localBusiness"
import DeleteButton from './Components/DeleteButton'
import CreateButton from "./Components/CreateButton"
import GetWeather from "./Components/getWeather"
import FunctionalComponent from "./Components/functionalComponent"

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      businesses:[],
      weather:[],
      NumInSpace:[],
      showMain:false,
      showButton:true,
      news:[]
    }
    this.updatePost=this.updatePost.bind(this)
    this.createPost=this.createPost.bind(this)
    this.deletePost=this.deletePost.bind(this)
    this.toggleView=this.toggleView.bind(this)
    this.getWeather=this.getWeather.bind(this)
    this.getNumInSpace=this.getNumInSpace.bind(this)
    this.getNews=this.getNews.bind(this)
  }

 // READ DATA
  componentDidMount(){
    axios.get("/api/businesses").then(response => {
      console.log("Got businesses")
      this.setState({
        businesses:response.data
      })
      console.log(this.state.businesses)
    }).catch(error => {console.log("Couldn't mount businesses")})
  }

  //MAKE AXIOS POST REQUEST
  createPost = (name,imageUrl,rating) =>{
    let body={name,imageUrl,rating}
    axios
    .post(`/api/businesses/`,body)
    .then(response =>{
      console.log("made connection to post",body)
      console.log(name,imageUrl,rating)
      this.setState({
        businesses:response.data
      })
    }).catch((err) => console.log("Error making post" + err))
  }

  //MAKE AXIOS DELETE REQUEST
  deletePost(id){
    axios
    .delete(`/api/businesses/${id}`)
    .then(response => {
      console.log("made connection to delete")
      this.setState({
        businesses:response.data
      })
      console.log(this.state.businesses)
    }).catch((error) => console.log(error))
  }

  updatePost(id,imageUrl){
    let body = {id,imageUrl}
    axios
    .put(`/api/businesses/`,body)
    .then(response =>{
      this.setState({businesses:response.data})
    }).catch(error =>{console.log("Couldnt edit post")})
  }

  toggleView(){
    this.setState({showMain:true,showButton:false})
  }
  getWeather(){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Phoenix,us&units=imperial&appid=a4685a100f1fbb0e9a1a73abb377da5c`)
    .then(response =>{
      console.log("Made connection to weather",response)
      alert(response.data.weather[0].description + "               "+ response.data.main.temp  + " fahrenheit")
    })
  }
  getNumInSpace(){
    axios.get(`http://api.open-notify.org/astros.json`).then(response =>{
      console.log("Made connection")
      this.setState({
        NumInSpace:response.data.people
      })
      console.log(this.state.NumInSpace)
      console.log(response.data.people)
    }).catch(error =>{console.log("Error")})
  }

  getNews(){
    axios.get(`https://newsapi.org/v2/everything?q=trump&from=2018-12-28&sortBy=publishedAt&apiKey=473d39c37165433ba0dba0ce2bb393bd`)
    .then(response => {
      console.log("Made connection to news",response.data)
      alert(response.data.articles[2].title)
    }).catch(error =>{console.log("error")})
  }


  render(){
    const {businesses} = this.state


    const button = (<div className="buttonWrapper">
      <button className="button" onClick={()=>this.toggleView()}>Get businessess near me </button>
    </div>
      
    )
  

    const mainPage = (
      <body>
      
      
      <header className= "header">
      <h2 className = "foobar">FooBar</h2>
      <CreateButton
            createPostFn={this.createPost}/>
      <DeleteButton
            deletePostFn={this.deletePost}/>
      <button className = "NewsButton" onClick={this.getNews}>Get a news story</button>            
      
      <button className = "spaceButton" onClick = {this.getNumInSpace}>Who is in space right now?</button>
      <span>
        <h4 className = "spacePeople">{this.state.NumInSpace.length==0?"": this.state.NumInSpace[0].name + ", "+ this.state.NumInSpace[1].name +", and "+ this.state.NumInSpace[2].name }</h4>
      </span>

      <button className="weatherButton" onClick={this.getWeather}>Get weather in Phoenix</button>

      <button className = "adviceButton" onClick={(e) => console.log(FunctionalComponent())}>Get Advice</button>
      
      </header>
        {
      businesses.map(business =>(
       <div>
        <LocalBusiness  id={business.id}
                        name={business.name}
                        imageUrl={business.imageUrl}
                        rating={business.rating}
                        updatePostFn ={this.updatePost}/>   
      </div>))
        }
    </body>
    )

    return(
      <div className="AppContainer">
        {this.state.showButton? button:null}
        {this.state.showMain? mainPage:null}
      </div>
    )
  }
}

