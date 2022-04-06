import { React, useState, useEffect } from 'react'

const Users = () => {
    const [userId, setId] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userEmail, setEmail] = useState("");


    const handleUserSubmit = (event) => {
      event.preventDafault()
    }




  return (
    <div>

        {/* ADDING NEW USER */}
        <form className="userForm" onSubmit={handleUserSubmit}>

            <input 
                type="text"
                placeholder="First name..."
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <br/>
            <br/>

            <input 
              type="text"
              placeholder="Last name..."
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <br/>
            <br/>

            <input 
              type="email"
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



        </form>
    </div>
  )
}

export default Users;