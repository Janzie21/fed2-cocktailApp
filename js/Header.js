class Header {
    constructor(holder, cocktailAppName, description){
        this.holder = holder;
        this.cocktailAppName = cocktailAppName;
        this.description = description;
        this.start()
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <header>
        <h1>${this.cocktailAppName} | ${this.description}<h1>
        </header>
        `);
    }
}

export default Header;