import {baseURL} from "./settings.js";
function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}

function apiFacade() {
 /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
 
const login = (user, password) => {
    //console.log("login" + user + password);
    const options = makeOptions("POST", true,{username: user, password: password });
    return fetch(baseURL + "/login", options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })
}

const addEvent = (time,location,dish,pricePrPerson) => {
    const options = makeOptions("POST", true,{time: time, location: location, dish: dish, pricePrPerson: pricePrPerson });
    return fetch(baseURL + "/dinnerevent/create", options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })
}

const deleteEvent = (id) => {
    const options = makeOptions("DELETE", true,{id: id});
    return fetch(baseURL + "/dinnerevent/delete/" + id, options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })
}

const updateEvent = (id,time,location,dish,pricePrPerson) => {
    const options = makeOptions("PUT", true,{id: id, time: time, location: location, dish: dish, pricePrPerson: pricePrPerson });
    return fetch(baseURL + "/dinnerevent/update/" + id, options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })
}

const addFamilyToMember = (familyName, email) => {
    const options = makeOptions("POST", true,{familyName});
    return fetch(baseURL + "/member/assignment/" + email, options)
      .then(handleHttpErrors)
        .then(res => {setToken(res.token) })
}

const addEventToFamily = (familyName,eventid) => {
    const options = makeOptions("POST", true,{familyName: familyName});
    return fetch(baseURL + "/dinnerevent/assignment/" + eventid, options)
        .then(handleHttpErrors)
        .then(res => {setToken(res.token) })
}

const fetchData = (ressource) => {
    const options = makeOptions("GET",true); //True add's the token
   return fetch(baseURL + ressource, options).then(handleHttpErrors);
}
const makeOptions= (method,addToken,body) =>{
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && loggedIn()) {
     opts.headers["x-access-token"] = getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts;
 }
 const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
const getToken = () => {
  return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
}
function readJwtToken (token) {
    console.log('TOKEN: ',token);
    // console.log('TOKEN opened with atob: ',window.atob(token));
    var base64Url = token.split('.')[1];
    // console.log(base64Url);
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // console.log(base64);
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(jsonPayload);
    return JSON.parse(jsonPayload);
}

 return {
     makeOptions,
     setToken,
     getToken,
     loggedIn,
     login,
     logout,
     fetchData,
     readJwtToken,
     addEvent,
     deleteEvent,
     updateEvent,
     addFamilyToMember,
     addEventToFamily,
 }
}
const facade = apiFacade();
export default facade;
