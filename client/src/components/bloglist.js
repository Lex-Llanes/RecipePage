import { React, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";


const BlogList = () => {
    const [blogList, setBlogList] = useState([]);


    async function getBlogs () {
        const response = await fetch("http://localhost:8080/blog");
        const data = await response.json();

        setBlogList(data)
        console.log(blogList)
    }


    // useEffect(() => {getBlogs();
    // }, []);

    return (
        <div>
            <Button onClick={getBlogs} variant="info">Get All Blogs</Button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Blog Number</th>
                    <th>Description</th>
                    <th>Recipe</th>
                    <th>Date</th>
                    <th>User ID</th>
                </tr>
                </thead>
                <tbody>
                {blogList.map(list => (
                    <tr>
                        <td>{list.blog_id}</td>
                        <td>{list.blog_text}</td>
                        <td>{list.blog_recipe}</td>
                        <td>{list.blog_date}</td>
                        <td>{list.users_id}</td>
                    </tr>
                ))}

                </tbody>
            </Table>

        </div>
    )
}


export default BlogList;