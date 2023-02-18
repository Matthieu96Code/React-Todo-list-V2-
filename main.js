class Character {
    constructor () {
        this.name
        this.utility
    }
}

class Village {
    constructor () {
        this.population
    }

    display () {
        
    }

}

function htmlPart (name, utility) {
    const characterClass = document.querySelector('#characters-class')

    const characterArticle = document.createElement('article');
    characterArticle.className = 'character-article';
    characterArticle.innerHTML = `
                            <p> ${name} </p>
                            <p> ${utility} </p>
                            <button style="margin-bottom:10px" type="button">Remove</button>
                            <div style="background-color:black; height:0.5px; margin-bottom:10px"></div>
                            `
    characterClass.appendChild(characterArticle);
}