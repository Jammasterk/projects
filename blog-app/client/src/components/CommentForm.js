import React, {useState} from 'react'
import TextAreaAutoSize from 'react-textarea-autosize'

const initInputs = {
    author: "",
    comment: ""
}

export default function Comment(props){
    const [inputs, setInputs] = useState(initInputs)
    const addComment = props

    function handleChange(e) {
      const { name, value } = e.target;
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }));
    }

    function handleSubmit(e) {
      e.preventDefault();
      addComment(inputs);
      setInputs(initInputs);
    }

    const {author, comment} = inputs
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
            placeholder="User Name"
            />

            <TextAreaAutoSize 
            name="comment"
            value={comment}
            onChange={handleChange}
            placeholder="Add Comment"
            />
            <button>Add Comment</button>
        </form>
    )

}