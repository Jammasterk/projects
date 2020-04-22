import React, {useState} from 'react'
import TextAreaAutosize from "react-textarea-autosize"


export default function PostForm(props){

 const initInputs = {
      title: props.title || "",
      author: props.author || "",
      post: props.post || "",
      imgUrl: props.imgUrl || ""
  };
    const [inputs, setInputs] = useState(initInputs);
 
    function handleChange(e){
        const {name, value} = e.target 
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputs)
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    const {title, author, post, imgUrl} = inputs
    return (
      <form onSubmit={handleSubmit}>
        <div className="text">
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Blogi title"
          />
          <br />
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
            placeholder="Author"
          />
        </div>
        <div className="btmform">
          <TextAreaAutosize
            className="textareaautosize"
            name="post"
            value={post}
            onChange={handleChange}
            placeholder="Blog Entry"
          />
          <input
            align="middle"
            className="image"
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            placeholder="Image Upload"
          />
          <button className="addPost">{props.btnTxt}</button>
  
        </div>
      </form>
    );
}

