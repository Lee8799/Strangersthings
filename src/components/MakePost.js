import React, { useState, useEffect } from "react";
import BASE_URL from '../constants';

async function newPost() {
    try {
        const response = await fetch(BASE_URL + '/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
            body: JSON.stringify({
            post: {
            title: newTitle,
            description: newDescrip,
            price: newPrice,
            willDeliver: newTransport
    }
  })
})
        const data = await result.json();
        return data;
  } catch (error) {
      console.error(error)
  }
}

const makePost = () => {
    
}
