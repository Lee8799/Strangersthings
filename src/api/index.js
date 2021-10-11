
import { BASE_URL } from '../constants';

//GET USER//

//to getUser's info, fetch the API info about user using this token as auth, then parse the data and let the results be equal to data. then, set the state of user to data.data.username
export async function getUser(token, setUser){
  try { console.log(token)
    const result = await fetch(BASE_URL + '/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    const data = await result.json();
    console.log(data);
    setUser(data.data.username);
    
} catch(error) {
  console.error(error);
  }
}


//FETCH POSTS//
export async function fetchPosts(token, setPosts) {
  try{
      const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts', {
          headers: makeHeaders(token)
      }) 
  const data = await response.json();
  const dataposts = data.data.posts;
  setPosts(dataposts);
  console.log('data: ', data.data.posts);
}catch (error){
  console.error(error)
}
}

//MAKE NEW POST//
export async function newPost(token, newTitle, newDescrip, newPrice, newTransport) {
  try{
      const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts', {
          method: "POST",
          headers: makeHeaders(token),
          body: JSON.stringify({
            post: {
              title: newTitle,
              description: newDescrip,
              price: newPrice,
              location: newLocation,
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

//LOGOUT//
export function logout(setToken) {
  localStorage.removeItem("token")
  setToken(null);
}

//MAKEHEADERS//
export function makeHeaders(token) {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (token) {
    headers['Authorization'] = 'Bearer ' + token
  }
  return headers;
}


