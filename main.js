player1 = {
    name: 'Sonya',
    hp: 100,
    weapon:['pistol','automaton'],
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    attack: function(){
        console.log(this.name + 'fight')
    }
}

player2 = {
    name: 'Kitana',
    hp: 100,
    weapon: ['knife','sword'],
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    attack: function(){
        console.log(this.name + 'fight')
    }
}

function createPlayer(numberOfPlayer, infoPlayer){
    const player = document.createElement('div')
    player.classList.add(numberOfPlayer)
    const progressbar = document.createElement('div')
    progressbar.classList.add('progressbar')
    const life = document.createElement('div')
    life.classList.add('life')
    life.style.width = infoPlayer.hp + '%'
    const name = document.createElement('div')
    name.classList.add('name')
    name.innerText = infoPlayer.name
    const character = document.createElement('div')
    character.classList.add('character')
    const img = document.createElement('img')
    img.src = infoPlayer.img
    const arenas = document.querySelector('.arenas')
    player.appendChild(progressbar)
    player.appendChild(character)
    progressbar.appendChild(life)
    progressbar.appendChild(name)
    character.appendChild(img)
    arenas.appendChild(player)
}

createPlayer('player1', player1)
createPlayer('player2', player2)