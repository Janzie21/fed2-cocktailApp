import Header from './Header';
import Footer from './Footer';
import Formulier from './Formulier';
import Cocktails from './Cocktails';

const data = {
    cocktails: [],
    cocktailDetail: {}
};



new Header(document.body, 'Better drunk then sober', 'A place to look up all your favourite cocktails');

new Formulier(document.body, data);

const cocktails = new Cocktails(document.body, data);

window.addEventListener('getCocktails', cocktails.renderCocktails);

new Footer(document.body);

