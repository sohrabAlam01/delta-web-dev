let img = document.querySelector("#img");
let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
  let link = await getImage();
  img.setAttribute("src", link);
})


async function getImage() {

    try {
        let res = await axios.get(url);
        //console.log(res);
        return res.data.message;
    } catch (err) {
        return "Image not found";
    }

}