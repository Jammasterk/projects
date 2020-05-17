import React, {Component} from "react"

class Deezer extends Component{
    constructor(props){
        super(props)
        this.state = {
          title: "Diamonds",
          name: "rihanna",
          picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/7d514d87a45a59d6094e028d750f3039/56x56-000000-80-0-0.jpg",
          preview:
            "https://cdns-preview-0.dzcdn.net/stream/c-00ef53b742b76cb70c83ff62e0f4aed7-6.mp3",
        };
    }

    componentDidMount(){
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Rihanna", {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
          },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    render(){
        return (
          <div>
            <h1>{this.state.title}</h1>
            <img src={this.state.picture_small} alt=""/>
            <audio  controls>
                <source src={this.state.preview}/>
            </audio>
          </div>
        );
    }
}

export default Deezer