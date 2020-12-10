import Header from './Header';
import Footer from './Footer';
import Formulier from './Formulier';


const data = {
    cocktails: [],
    cocktailDetail: {}
}

new Header(document.body, 'Better drunk then sober', 'A place to look up all your favourite cocktails');
new Formulier(document.body, data);
new Footer(document.body);
