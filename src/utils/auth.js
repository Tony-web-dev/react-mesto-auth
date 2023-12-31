const baseUrl = "https://auth.nomoreparties.co";

function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
}

export function authentication(email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(res => checkResponse(res));
}

export function authorization(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password, 
    }),
  }).then(res => checkResponse(res));
}

export function getUserAuth(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(res => checkResponse(res));
}
