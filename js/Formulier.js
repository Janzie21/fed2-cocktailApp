class Formulier {
    constructor(holder,data){
        this.holder = holder;
        this.data = data;
        this.formEl = this.start();
        this.setUpEvents();
        
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <form action="">
        <input
          type="text"
          name="searchString"
          id="searchString"
          placeholder="How would you like to get druk today?. eg: Long island ice tea"
        />
        <input id="submitBtn" type="submit" value="search" />
      </form>
        `);
        return this.holder.querySelector('form')
    }

   setUpEvents(){
       this.formEl.addEventListener('submit', this.getData.bind(this))
   }

   getData(e){
       e.preventDefault();
       const searchVal = this.formEl.querySelector('#searchString').value;
       fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchVal)
       .then(response => response.json)
       .then(data => {
           this.data.cocktails = data.results;
           console.log(this.data);
       })
       .catch(console.log())
   }
}

export default Formulier;