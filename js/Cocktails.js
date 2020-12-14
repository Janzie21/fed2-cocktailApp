import Cocktail from './Cocktail';

class Cocktails {
    constructor(holder,data){
        this.holder = holder;
        this.data = data;
        this.gridElement = this.start();
        this.renderCocktails();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend',`
        <div class ="cocktailList">
        
        
        </div>
        
        `);
        return this.holder.querySelector('.cocktailList')
    }

    renderCocktails = () => {
        this.gridElement.innerHTML = "";
        if(this.data.cocktails.length > 0) {
            this.data.cocktails.forEach((cocktail) => {
            new Cocktail(this.gridElement, cocktail);
              });
            }
        else {
            this.gridElement.innerHTML = "No cocktails selected";
            }
        }
    }

export default Cocktails;
