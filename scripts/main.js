import { Navigation, bagQuantity, loveButton } from './navigation/nav.js';
import { loaderEffect } from './loader/loader.js';
import { fadeup } from './fade-up/fadeup.js';
import { brandsss } from './brand-effects/brands.js';
import { renderShopItems } from './shopItems/shop.js';
import {  renderThree } from './zayra.js';
import { cart, favourites, renderCart } from '../data/cart.js';

fadeup();
brandsss();
renderThree();
cart;
favourites;
bagQuantity;
loveButton;


if (window.location.pathname.includes('shop.html')) {
  renderShopItems();
};





