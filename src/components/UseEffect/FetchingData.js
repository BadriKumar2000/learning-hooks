import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingData() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromFetchButton, setIdFromFetchButton] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromFetchButton}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromFetchButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setIdFromFetchButton(id)}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default FetchingData;
