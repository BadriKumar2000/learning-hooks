import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingDataOne() {
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setError(false);
        setPost(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  });

  return (
    <div>
      {isLoading ? "Page is Loading" : post.title}
      {error && "Something went wrong"}
    </div>
  );
}

export default FetchingDataOne;
