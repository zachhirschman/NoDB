
let id =10;
let businesses = [
  
    {
        id:1,
        name:"Seamus McCaffrey's Irish Pub and Restaurant",
        imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/02/67/02/9e/filename-seamus1-jpg.jpg",
        rating:4.3
    },
    {
        id:2,
        name:"Vegan House",
        imageUrl:"https://cdn2.gbot.me/photos/Z8/xB/1535300179/-Postcard_of_Vegan_House-20000000016329521-500x375.jpg",
        rating:4.5
    },
    {
        id:3,
        name:"Even Stevens Sandwiches",
        imageUrl:"https://evenstevens.com/static/media/uploads/locations/az_phx_2.jpg",
        rating:4.4
    },
    {
        id:4,
        name:"Hanny's",
        imageUrl:"https://i.pinimg.com/originals/54/07/dc/5407dc9a8b93c44f31902d633f26c23c.jpg",
        rating:4.4
    },
    {
        id:5,
        name:"Thai Basil Signature Downtown Phoenix",
        imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/04/a0/58/76/thai-basil-signature.jpg",
        rating: 4.1
    },
    {
        id: 6,
        name: "Province Urban Kitchen & Bar",
        imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0d/94/4d/d4/dining-room-at-night.jpg",
        rating: 4.4
    },
    {
        id:7,
        name:"Noodle Bar",
        imageUrl:"https://s3-media3.fl.yelpcdn.com/bphoto/sM6PaBMys39rDBP0rmoZ2g/ls.jpg",
        rating:"4.2"
    },
    {
        id:8,
        name:"Subway",
        imageUrl:"https://s3-media3.fl.yelpcdn.com/bphoto/o6oGBmNLsim9pynRGXLNsA/ls.jpg",
        rating:3.9
    },
    {
        id:9,
        name:"Chipotle Mexican Grill",
        imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/08/6f/f0/6f/chipotle-mexican-grill.jpg",
        rating:4.0
    },
    {
        id:10,
        name:"Five Guys",
        imageUrl:"https://s3-media4.fl.yelpcdn.com/bphoto/0gYEWYyjJBrn-fQlizQJ0g/348s.jpg",
        rating:4.3
    },
]

module.exports = {
    create: (req,res) =>{
        var {name,imageUrl,rating} = req.body
        console.log(req.body)
        if(imageUrl ==""){
            imageUrl = "https://media.giphy.com/media/l41lIgxc4UadncZFK/giphy.gif"
        }
        businesses.push({id:id+1,name,imageUrl,rating})
        id++
        res.status(200).json(businesses)
    },
    read: (req,res) =>{
        res.status(200).json(businesses)
    },
    update:(req,res) =>{
        const {id,imageUrl} =req.body
        console.log(req.body)
        const IdtoUpdate = id
        let postIndex = businesses.findIndex(eachPost => eachPost.id == IdtoUpdate)
        let thePost = businesses[postIndex]
        businesses[postIndex]={
            id:IdtoUpdate,
            imageUrl:imageUrl
        }
        res.status(200).json(businesses)    
    },
    delete: (req,res) =>{
        const IdToDelete = req.params.id
        console.log(IdToDelete);
        let postIndex = businesses.findIndex(post => post.id == IdToDelete)
        businesses.splice(postIndex,1)
        res.status(200).json(businesses)
      }

}


