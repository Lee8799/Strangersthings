
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


