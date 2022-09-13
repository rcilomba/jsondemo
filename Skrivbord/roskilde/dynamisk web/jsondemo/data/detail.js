/*document.addEventListener("DOMContentLoaded", () =>{

let params = new URLSearchParams(window.location.search)
let id = params.get("id")
let color = params.get("color")

console.log(id, color)

 fetch(`/data/${id}.json`)
     .then()
     .then()




})*/

document.addEventListener("DOMContentLoaded", () =>{

     let params = new URLSearchParams(window.location.search)
     let id  = params.get("id")
    

    console.log(id)

    fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let article = document.createElement("article")

        article.innerHTML=`
        <h1>${data.model}</h1>
        <p>${data.type} fra ${data.manufacturer}</p>
        <h2>Features</h2>
        <ul class="featurelist"></ul>
        
        
        `
        document.body.append(article);

        let list = document.querySelector(".featurelist")
        console.log(list)

        data.features.forEach(feature => {
            let item = document.createElement("li")
            item.innerText = feature;
            list.append(item)

        });

        
       
    })

    
})

//127.0.0.1:5500/data/detail.html?id=1&color=orange