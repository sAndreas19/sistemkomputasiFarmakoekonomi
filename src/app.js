import data from './public/data/DATA.json'
import './component/restaurant-list.js';
import './component/restaurant-item.js';

const restaurantListElement = document.querySelector('restaurant-list');
const restaurants = data.restaurants;
const hamburgerButton = document.querySelector('#hamburgerButton');
const drawerElement = document.querySelector('.navbar-item');
const mainElement = document.querySelector('main');

hamburgerButton.addEventListener('click', e => {
    drawerElement.classList.toggle('open');
    console.log('succes')
    e.stopPropagation();
})

mainElement.addEventListener('click', e => {
    drawerElement.classList.remove('open');
    e.stopPropagation();
})

restaurants.forEach(restaurant => {
    const restaurantItemElement = document.createElement('restaurant-item');
    restaurantItemElement.note = restaurant;
    restaurantListElement.appendChild(restaurantItemElement);
});
