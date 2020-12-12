class Cocktail{
    constructor(holder,cocktailObject){
        this.holder = holder;
        this.cocktailObject = cocktailObject;
        this.start();

    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <div class="cocktail">

        ${this.cocktailObject.strGlass}

        </div>

        `)
    }
}

export default Cocktail;