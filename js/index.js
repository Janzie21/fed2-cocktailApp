import Header from './Header';
import Footer from './Footer';
import Formulier from './Formulier';
import Cocktails from './Cocktails';

const data = {
    cocktails: [],
    cocktailDetail: {}
}

new Header(document.body, 'Better drunk then sober', 'A place to look up all your favourite cocktails');

const cocktails = new Cocktails()

new Formulier(document.body, data);
setInterval(function(){
    cocktails.reRenderCocktails()
},1000)
new Footer(document.body);

