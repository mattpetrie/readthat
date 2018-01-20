import decode from 'jwt-decode';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const CLIENT_DOMAIN = process.env.REACT_APP_AUTH0_CLIENT_DOMAIN;
const REDIRECT = process.env.REACT_APP_AUTH0_REDIRECT;
const SCOPE = 'read:allposts';
const AUDIENCE = 'readthat';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN,
  scope: 'openid profile email',
});

///

export function getProfile() {
  const dataNamespace = 'https://www.readthat.io/';
  const dataParams = ['email', 'nickname', 'picture', 'first', 'last'];
  let profile = {};
  const token = getDecodedIdToken();
  dataParams.forEach(param => {
    profile[param] = token[dataNamespace + param];
  })
  profile.authorId = token.sub;
  return profile;
}

export function getDecodedAccessToken() {
  return decode(getAccessToken());
}

export function getDecodedIdToken() {
  return decode(localStorage.getItem(ID_TOKEN_KEY));
}

///

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function logout(history) {
  clearIdToken();
  clearAccessToken();
  history.push('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  return accessToken;
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  const loggedIn = !!idToken && !isTokenExpired(idToken);
  return loggedIn;
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
