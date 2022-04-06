import { React, useState, useEffect } from 'react'

const Blog = (props) => {
    const [text, setText] = useState("");
    const [recipe, setRecipe] = useState("");
    const [date, setDate] = useState("");
    const [foreignKey, setFK] = useState(0)


    const handleBlogSubmit = (event) => {
        event.preventDafault()
    }


  return (
    <div>

        <form onSubmit={handleBlogSubmit}>

            <textarea   
                className="bloginputs"
                id="blodinputs"
                type="textarea"
                rows="8"
                cols="32"
                placeholder="Enter story..."
                value={text}
                onChange={(event)=> setText(event.target.value)}
            />
            <br/>
            <br/>

            <textarea 
                className="bloginputs"
                id="bloginputs"
                type="textarea"
                rows="8"
                cols="32"
                placeholder="Enter instructions..."
                value={recipe}
                onChange={(event) => setRecipe(event.target.value)}
            />
            <br/>
            <br/>


            <input
                type="submit"
                value="Submit"
            />






        </form>




    </div>
  )
}


export default Blog;