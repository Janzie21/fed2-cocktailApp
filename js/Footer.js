class Footer {
    constructor(holder){
        this.holder = holder;
        this.start()
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <footer>
        <p> © Copyright fed2 - Cocktail app Nick Janssen</p>
        </footer>
        `)
    }
}

export default Footer;