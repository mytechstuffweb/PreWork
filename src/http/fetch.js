const BACKEND = "https://api.thecatapi.com/v1/";
const PATH = "https://api.thecatapi.com/v1/images/search";

const HEADERS = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_6YCXEGJ1O7TNiM1HJGR9dje6sCZo9tGfj43HXOasHqDMZ7SY9aMgYvEpc8TzQB2K"
});

const DEBUG = false;

export async function getBreeds() {
    const path = `${ BACKEND }breeds`;
    DEBUG && console.log("In getBreeds() path = ", path);

    let requestOptions = {
      method: 'GET',
      headers: HEADERS,
      redirect: 'follow'
    };

    DEBUG && console.log("Awaiting fetch()...");
    const response = await fetch(path, requestOptions);
    DEBUG && console.log("response =", response);

    DEBUG && console.log("Awaiting response.json()...");
    const data = await response.json();
    DEBUG && console.log("data = ", data);

    if (response.ok) {
        return data;
    } else {
        const errorMsg = `HTTP error ${ response.status }. ${ response.statusText }`;
        console.log(errorMsg);

        throw new Error(errorMsg);
    }    
}

export async function getData(endpoint = "images/search", breedId = "", limit) {
    const path = `${ BACKEND }${ endpoint }?breed_id=${ breedId }&limit=${ limit }`;
    console.log("In getData() path = ", path);

    let requestOptions = {
      method: 'GET',
      headers: HEADERS,
      redirect: 'follow'
    };

    DEBUG && console.log("Awaiting fetch()...");
    const response = await fetch(path, requestOptions);
    DEBUG && console.log("response =", response);

    DEBUG && console.log("Awaiting response.json()...");
    const data = await response.json();
    DEBUG && console.log("data = ", data);

    if (response.ok) {
        return data;
    } else {
        const errorMsg = `HTTP error ${ response.status }. ${ response.statusText }`;
        console.log(errorMsg);

        throw new Error(errorMsg);
    }    
}

    