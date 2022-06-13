let pokeA = document.querySelector('#pokeA')
let spritesA = document.querySelector('#spritesA')
let pokeB = document.querySelector('#pokeB')
let spritesB = document.querySelector('#spritesB')
let changeA = document.querySelector('#changeA')
let changeB = document.querySelector('#changeB')

let random = (min,max) => {
    return Math.round(Math.random() * (max - min) + min)
}

let fetchPokeA = async () => {
    let pick = random(1,150)

    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pick}`)
    let data = await resp.json()
    let pic = data.sprites.front_default

    changeA.addEventListener('click', () => {
        pokeA.innerHTML = data.name
        spritesA.innerHTML = `<img src="${pic}"/>`
    })     
}
fetchPokeA()

let fetchPokeB = async () => {
    let pick = random(1,150)

    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pick}`)
    let data = await resp.json()
    let pic = data.sprites.front_default

    changeB.addEventListener('click', () => {
        pokeB.innerHTML = data.name
        spritesB.innerHTML = `<img src="${pic}"/>`
    })
}
fetchPokeB()


