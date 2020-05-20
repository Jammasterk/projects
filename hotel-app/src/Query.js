import React, {Component} from "react"
import Form from "./Form"
import axios from "axios"

class Query extends Component {
  state = {
    title_short: undefined,
    artist: undefined,
    preview: undefined, 
    picture_medium: undefined,
    link: undefined
  };

  getSong = async e => {
    e.preventDefault();
    const artist = e.target.elements.artist.value;
    const link = e.target.elements.link
    // const title = e.target.elements.title.value;
    axios({
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/search?q+${link}}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
        useQueryString: true,
      },
      params: {
        q: artist,
      },
    })
      .then((response) => {
        // const artist = response.data.name
        console.log(response);
        this.setState({
          // name: response.data.artist,
          title: response.data.album.title_short,
          preview: response.data.preview,
          picture_medium: response.data.artist,
          link: response.data.link
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Form getSong={this.getSong} {...this.state} />
      </div>
    );
  }
}
export default Query;

