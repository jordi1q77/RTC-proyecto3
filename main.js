import './style.css';
import "./node_modules/cubeslider/css/cubeslider.css";
import "./public/components/burger/burger.css";
import { buscar, addEventSearch} from './public/components/search/search';
import { createPinterestSection} from './public/components/pinterest/pinterest';
import { toggleMenu } from './public/components/burger/burger';
import { showCube } from './public/components/cube/cube';

const photoInit = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfU6UlZG4uramgGVf4_4j_j__VP1I_xszdtQ&s", "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/94/bc/a6/94bca613-2c5e-4941-5ce1-b05bd61a2a5b/AppIcon-0-0-1x_U007emarketing-0-6-0-0-85-220.png/1200x630wa.png"];
//creating slider

var menu = document.querySelector('.hamburger');
menu.addEventListener('click', toggleMenu, false);

showCube(photoInit);
addEventSearch();
createPinterestSection();
buscar("rana");
//cargarTopics();