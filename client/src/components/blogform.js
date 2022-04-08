import { React, useState, useEffect } from 'react'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Blog = (props) => {
    const [userName, setUserName] = useState("")
    const [text, setText] = useState("");
    const [recipe, setRecipe] = useState("");
    const [date, setDate] = useState("");
    //The foreign key will be the user's ID which
    const [foreignKey, setFK] = useState(0)



    const getUserData = async (event) => {
        event.preventDefault()
        let getDate = Date()
        setDate(getDate)
        console.log(date)
        try {
            const response = await fetch(`http://localhost:8080/users/?userName=${userName}`)
            const data = await response.json()
            console.log(data)
            setUserName(data[0].username)
            setFK(data[0].users_id)
            console.log(foreignKey, userName)

        } catch (error) {
            console.error(error.message)
        }
    }

    // useEffect(() => {
    //     const currentDate = Date()
    //     setDate(currentDate)
    //     console.log(date)
    // })

    const handleBlogSubmit = async (event) => {
        event.preventDefault()
        try {
            console.log(date)
            const body = { text, recipe, date, foreignKey }

            const response = await fetch("http://localhost:8080/blog", 
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )
            return response;
        } catch (error) {
            console.error(error.message)
        }
    }


  return (

    <div>

        <button onClick={getUserData}>Get User</button>
        <br/>
        <br/>






        {/* FORM TO SUBMIT NEW BLOG ENTRY */}
        <form onSubmit={handleBlogSubmit}>

            <input 
                name="Username"
                className="bloginputs"
                id="bloginputs"
                type="text"
                required
                placeholder="Username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <br/>
            <br/>

            <h2>{userName}</h2>
            <textarea 
                name="Text"  
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
                name="Recipe"
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
                name="Submit Button"
                type="submit"
                value="Submit"
            />

        </form>


    </div>
  )
}


export default Blog;