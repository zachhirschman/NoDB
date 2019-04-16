import React, {Component} from "react"
import "./localBusiness.css"

export default class localBusiness extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl:"",
            id:"",
            editForm:false
        }
        this.toggleEdit=this.toggleEdit.bind(this)
        this.handleIdChange=this.handleIdChange.bind(this)
        this.editPost=this.editPost.bind(this)
        this.handleUrlChange=this.handleUrlChange.bind(this)
    }
    toggleEdit(){
        this.setState({
            editForm:true
        })
    }
    handleUrlChange(value){
        this.setState({
            imageUrl:value
        })
    }
    handleIdChange(value){
        this.setState({
            id:value
        })
    }
    editPost(){
        this.props.updatePostFn(this.state.id,this.state.imageUrl)
        this.setState({imageUrl:""})
        this.setState({
            editForm:false
        })
    }


    render(){
        const editForm =(
            <div>
            <input placeholder="Enter id to change: " onChange={(e)=> this.handleIdChange(e.target.value)}></input>
            <input placeholder="Enter new Url: " onChange={(e)=> this.handleUrlChange(e.target.value)}></input>
            <button onClick={this.editPost}>Submit Changes:</button>
            </div>
        )
        return(
            <div className="posts">

            <div className= 'imgWrapper'>
                <img className="" src={this.props.imageUrl}></img>
            </div>

                <h2>{this.props.name}</h2>
                <h2>{this.props.rating}</h2>
                <h2>{this.props.id}</h2>
                <button onClick={() => this.toggleEdit()}>Edit Image</button>
                {this.state.editForm? editForm:null}
            </div>
        )
    }

}