import React, {Component} from "react"
import App from "../App"
import "./createButton.css"

export default class CreateButton extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            imageUrl:"",
            rating:"",
            showForm: false
        }
        this.toggleFormView=this.toggleFormView.bind(this)
        this.createPost=this.createPost.bind(this)
    }
    toggleFormView(){
        this.setState({showForm:true})
    }
    createPost(){
        this.props.createPostFn(this.state.name,this.state.imageUrl,this.state.rating)
        this.setState({
            name:"",
            imageUrl:"",
            rating:"",
            showForm:false
        })
    }

    render(){
        const inputForm = (<div className="formWrapper">
            <input placeholder="Enter a name: " onChange={(e) => this.setState({name:e.target.value})}></input>
            <input placeholder="Enter a image Url : " onChange={(e) => this.setState({imageUrl:e.target.value})}></input>
            <input placeholder="Enter a rating: " onChange={(e) => this.setState({rating:e.target.value})}></input>
            <button onClick={this.createPost}>Submit</button>
        </div>)
        return(
            <div>
                
            <div className = "createWrapper">
                <button onClick={()=>this.toggleFormView()}>Submit a new business: </button>
            </div>
                {this.state.showForm? inputForm:null}
            </div>
        )
    }
}