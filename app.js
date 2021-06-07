/* // FETCH method

fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    .then (res => {
        console.log("response", res);
        return res.json();
    })
    .then(data => {
        console.log("data parsed is:", data.ticker.price);
        
    })
    .catch (err => {
        console.log("oh no", err);
    }) */

    //AXIOS way

 /*    axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
        .then(res => {
            console.log(res.data.ticker.price);
        })
        .catch(err => {
            console.log(err);
        }) */

/* const getDataJoke = async () => {
   const res = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
    console.log(res.data.joke);
}

getDataJoke(); */


// SETTING HEADERS

const button = document.querySelector("button");
const jokes = document.querySelector("ul");

const getDataJoke = async () => {
    try {
        const res = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
        const newLi = document.createElement("li");
        newLi.append(res.data.joke);
        jokes.append(newLi);
    } catch (e) {
        console.log("no jokes sorry");
    }

}

button.addEventListener("click", () => {
    getDataJoke();
})
