import React, {useState} from "react"
import { MDBInput } from "mdbreact";


function BlogForm(props){

    const initInputs = {
        title: props.title || "",
        author: props.author || "",
        content: props.content || "",
        image: props.image || "",
        tags: props.tags || ""

    };
         const [inputs, setInputs] = useState(initInputs);
         const {addNewBlog} = props

        function handleChange(e) {
          const { name, value } = e.target;
          setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
          }));
        }

        function handleSubmit(e) {
          e.preventDefault();
          addNewBlog(inputs);
        //   props.submit(inputs, props._id);
          setInputs(initInputs);
        }

    const {title, author, content, image, tags} = inputs

    return (
      <div>
        <form onSubmit={handleSubmit} className="w-75 m-auto">
          <MDBInput
            label="Title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <MDBInput
            label="Author"
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
          <MDBInput
            label="Image"
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
          <MDBInput
            type="textarea"
            label="Content"
            rows="5"
            name="content"
            value={content}
            onChange={handleChange}
          />
          <MDBInput
            label="Tag"
            type="text"
            name="tags"
            value={tags}
            onChange={handleChange}
          />
          
          <button>Submit</button>
        </form>
      </div>
    );
}

export default BlogForm