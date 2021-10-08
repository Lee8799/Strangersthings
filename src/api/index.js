
import { BASE_URL } from '../constants';

//GET USER//
export async function getUser(token, setUser){
  try {
    const result = await fetch(BASE_URL + '/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + {token}
        }
    })
    const data = await result.json();
    console.log(data);
    return data;
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

}

//