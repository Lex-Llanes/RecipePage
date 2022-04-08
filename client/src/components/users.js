import { React, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';

const Users = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUsername] = useState("");
    const [userEmail, setEmail] = useState("");


    const handleUserSubmit = async (event) => {
      event.preventDefault()
      try {
        const body = { firstName, lastName, userName, userEmail }
        const response = await fetch("http://localhost:8080/user", 
          {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          }
        )
        console.log(response)
      } catch (error) {
        console.error(error.message)
      }
    }

    console.log(firstName)
    console.log(lastName)
    console.log(userName)
    console.log(userEmail)


  return (
    <div>

        {/* ADDING NEW USER */}
        <Form onSubmit={handleUserSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
                size="sm"
                type="text"
                placeholder="First name..."
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <br/>
            <br/>
            </Form.Group>

            <input 
              type="text"
              placeholder="Last name..."
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <br/>
            <br/>

            <input 
              type="text"
              placeholder="Username..."
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br/>
            <br/>

            <input 
              type="text"
              placeholder="Email..."
              value={userEmail}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br/>
            <br/>

            <input
              type="submit"
              value="Submit"
            />
            <br/>
            <br/>

            <span>-----------------------------------------------</span>

            <br/>
            <br/>
            <br/>



        </Form>
    </div>
  )
}

export default Users;