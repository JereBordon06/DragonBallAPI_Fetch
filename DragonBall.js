

function pintarData(resultado){
    resultado.items.forEach(item => {
        let img = document.createElement("img")
        let nombre = document.createElement("p")
        let ki = document.createElement("p")
        let race = document.createElement("p")
        let gender = document.createElement("p")
        let div = document.createElement("div")

        div.classList.add("div")
        document.body.appendChild(div)
        
        img.src = item.image
        nombre.textContent = item.name
        ki.textContent = item.ki
        race.textContent = item.race
        gender.textContent = item.gender

        img.classList.add("imagen")
        nombre.classList.add("p")
        ki.classList.add("p")
        race.classList.add("p")
        gender.classList.add("p")

        div.appendChild(img)
        div.appendChild(nombre)
        div.appendChild(ki)
        div.appendChild(race)
        div.appendChild(gender)
    });
}
fetch("https://dragonball-api.com/api/characters?limit=15")
.then((resultado) => resultado.json())
.then((resultado => pintarData(resultado)))
