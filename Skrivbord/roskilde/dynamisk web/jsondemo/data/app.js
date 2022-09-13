document.addEventListener("DOMContentLoaded", () => {

fetch("/data/bicycles.json")  // den skal ta fatt i .json
.then(response => response.json()) // denna (response) kommer tillbaka med ett svar
.then(data => {
    console.log(data)

    data.bicycles.forEach(bicycle => {

        let link = document.createElement("a")
        link.setAttribute("href", `detail.html?=id${bicycle.id}`)
        link.innerHTML = `
        <h2>${bicycle.model}</h2>

        `


document.body.append(link)
    })

})

})