class Cocktails {
    constructor(holder,data){
        this.holder = holder;
        this.data = data;
        this.start()
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend',`
        <div class ="cocktaillist">
        
        
        </div>
        
        `)
    }

}

export default Cocktails;
