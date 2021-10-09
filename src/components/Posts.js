import React from 'react';
import ReactDOM from 'react-dom';
import makeHeaders from '../api';


// const Posts = () => {
//     const [posts, setPosts] = useState([]);
//     console.log('posts: ', posts);

    useEffect(() => {
    export async function fetchPosts(token) {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts', {headers: makeHeaders()}) 
    const data = await response.json();
    setPosts(data.data.posts);
    console.log('data: ', data.data.posts);
}
fetchPosts(token);
}, [token])
    


//     return <>
//     <div>
//         Hello World
//     </div>

//     {
//         posts.map((post, idx) => <div key={idx}>
//             <h3>{post.title}</h3>
//             <p>Description: {post.description}</p>
//             <li>Price: {post.price}</li>
//             <li>Seller: {post.author.username}</li>
//         </div>)
//     }
//     </>
// }





