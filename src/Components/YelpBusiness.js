// // import React, {Component} from "react"
// // import App from "../App"
// import axios from "axios";

// export default class YelpBusiness extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//          YelpData:[]
//         }
//     }
//     componentDidMount(){
//         axios.get("/api/YelpInfo").then(response => {
//           console.log("got yelp info")
//           this.setState({
//             YelpData: response.data
//           })
//         }).catch("Couldn't mount yelp")
//     }
// }