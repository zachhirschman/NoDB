import React, {Component} from "react"

export default class DeleteButton extends Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            Input:false
        }
        this.deletePost=this.deletePost.bind(this)
        this.toggleInput=this.toggleInput.bind(this)
    }
    updateId(value){
        this.setState({id:value})
    }
    deletePost(){
        this.props.deletePostFn(this.state.id)
        this.setState({id:""})
        this.setState({Input:false})
    }
    toggleInput(){
        this.setState({Input:true})
    }
    render(){
        const deleteForm =(
        <div>
        <input className="deleteButton" placeholder="Input the Id number of the post to delete" onChange={(e)=> this.updateId(e.target.value)}></input>
                            <button onClick={this.deletePost}>Submit</button>
        </div>
                            )
        return(
            <div>
                <button onClick={this.toggleInput}>Delete</button>
                {this.state.Input? deleteForm:null}
            </div>
        )
    }
}