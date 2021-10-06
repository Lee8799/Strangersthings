
import { BASE_URL } from '../constants';

export async function getUser(token, setUser){
    fetch(BASE_URL + 'users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer' + {token}
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}