import React, { useState, useEffect } from "react";
import BASE_URL from '../constants';
import { newPost } from '../api';



const MakePost = ({token}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescrip, setNewDescrip] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newTransport, setNewTransport] = useState(false);

    return (
        <article className='newPostArticle'>
            <h3>New Post</h3>
            <form onSubmit={(event) => {
                event.preventDefault();
                const data = newPost(token, newTitle, newDescrip, newPrice, newLocation, newTransport);
                setNewTitle('');
                setNewDescrip(''),
                setNewPrice(''),
                setNewLocation(''),
                setNewTransport(false);
                console.log(data);
            }}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type='text'
                    value={newTitle}
                    onChange={({target: {value}}) => setNewPostTitle(value)}
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
    )
}

export default MakePost;