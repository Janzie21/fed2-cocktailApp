class Cocktail{
    constructor(holder,cocktailObject){
        this.holder = holder;
        this.cocktailObject = cocktailObject;
        this.start();

    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <div class="cocktail">
        <h2>Name: </h2>
        ${this.cocktailObject.strDrink}
        <h2>Glass used: </h2>
        ${this.cocktailObject.strGlass}
        <h2>How to: </h2>
        <p>${this.cocktailObject.strInstructions}</p>

        </div>

        `)
    }
}

export default Cocktail;