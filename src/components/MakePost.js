import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { newPost } from '../api';


const MakePost = ({token, setPosts, posts}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescrip, setNewDescrip] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newTransport, setNewTransport] = useState(false);
    const history = useHistory();
    function toListings() {
        history.push('/posts');
    }

    if(token) {
    return(
        <article className='newPostArticle'>
            <h3>Create New Listing</h3>
            <form onSubmit={async (event) => {
                event.preventDefault();
                try {
                    const result = await newPost(token, newTitle, newDescrip, newPrice, newLocation, newTransport);
                    setPosts([...posts, result])
                    alert(`Post ${result.success? 'successful!' : 'unsuccessful - try again!'}`);
                    toListings();
                    
                }
                catch (error) {
                    console.log(error)
                } 
            }}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type='text'
                    value={newTitle}
                    onChange={({target: {value}}) => setNewTitle(value)}
                    className="form-control"
                    id='postTitle'
                    placeholder='title'
                />
                    <label htmlFor="postDescrip">Description:</label>
                    <input
                    type='text'
                    value={newDescrip}
                    onChange={({target: {value}}) => setNewDescrip(value)}
                    className="form-control"
                    id='postDescrip'
                    placeholder='description'
                    />
                        <label htmlFor="postPrice">Price:</label>
                        <input
                        type='text'
                        value={newPrice}
                        onChange={({target: {value}}) => setNewPrice(value)}
                        className="form-control"
                        id='postPrice'
                        placeholder='price'
                        />
                            <label htmlFor="postLocation">Location:</label>
                            <input
                            type='text'
                            value={newLocation}
                            onChange={({target: {value}}) => setNewLocation(value)}
                            className="form-control"
                            id='postLocation'
                            placeholder='location'
                            />
                                <div>
                                <label htmlFor="postDeliver">Willing to Deliver?</label>
                                <input
                                type='checkbox'
                                value={newTransport}
                                onChange={({target: {value}}) => setNewTransport(!newTransport)}
                                id='postDeiver'
                                />
                                </div>
                                <button className="submitNewPost">Submit</button>
            </form>
        </article>
    ) }
    else {
        return(
            <h3>Please <Link to='/login'>login </Link>to create a new listing.</h3>
        )
    }
}

export default MakePost;