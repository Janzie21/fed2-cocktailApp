class Formulier {
    constructor(holder,data){
        this.holder = holder;
        this.data = data;
        this.start()
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
        `)
    }
}

export default Formulier;