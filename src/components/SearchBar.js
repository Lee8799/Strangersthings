import React, {useState, useEffect} from 'react';
import { fetchPosts } from '../api';

function postMatches(post, text) {
    post.title.toLowerCase().includes(text)
    post.description.toLowerCase().includes(text)
    post.author.username.toLowerCase().includes(text)
    post.price.toLowerCase().includes(text)
    post.location.toLowerCase().includes(text)
}

//cannot get this component to work!!!!!//

const SearchBar = ({token, setPosts}) => {
    const [search, setSearch] = useState('');
    const [postsDisplay, setPostsDisplay] = useState([]);

    useEffect(() => {
        fetchPosts(token, setPosts)
    }, [token, setPosts])


    return (
        <>
        <form>
            <div>
                <input
                type='text'
                value={search}
                onChange={({target : {value}}) => {
                    const filteredPosts = posts.filter((post) => 
                        postMatches(post, value.toLowerCase()));
                    const postsToDisplay = value.length ? filteredPosts : posts;
                    setPostsDisplay(postsToDisplay) 
                }}
                />
            </div>
        </form>
        
        {postsDisplay.map((post, index) => {
            return (
                <div key={index}>
                    <div className="displayPostTitle">
                        {post.title}
                    </div>
                </div>
            )
        })
        }
        </>
    )
}

export default SearchBar;