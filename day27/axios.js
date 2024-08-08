//axios.get(url): it is used to get the parsed data into JSON, we do not need to parse

let url = "https://type.fit/api/quotes";
/*
async function getquote() {
    let res = await axios.get(url); //it returns the json data
    console.log(res);
    let data = res.data;
    let rand = Math.floor(Math.random() * 15);
    console.log("quote:", data[rand].text);
    console.log("authot:", data[rand].author);
}
*/
//sending headers with api request

let url2 = "https://icanhazdadjoke.com/";

async function getJoke() {

    try {
        const config = { headers: { Accept: "application/json" } };
        //without passing the header : it will use the default header value
        // let res = await axios.get(url2);
        // console.log(res);
        let res = await axios.get(url2, config);
        console.log(res);   //json format

    }catch(err){
        console.log("ERROR");
    }
}