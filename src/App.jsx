import './App.css'
import axios from 'axios'
import React from 'react'

const basreUrl = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

function App() {

  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get(basreUrl)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      }
      )
  }, []);

  console.log(posts);

  if (!posts) return null;

  return (
    <div className="App">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className='card'>
          <div className='card-header'>
            <img src={post.jetpack_featured_media_url} alt="" />
          </div>
          <div className="card-body">
            <h2>{post.title.rendered}</h2>
            <h3>{post.excerpt.rendered}</h3>
          </div>
          <div className="card-footer">
            <span className='date'>{post.date}</span>
          </div>
          <div className='flap'>

          </div>
        </div>
      ))}
    </div>
  )
}

export default App
