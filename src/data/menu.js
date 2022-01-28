import {data} from "../API/menujson";

if(!localStorage.getItem('menu')) {
    localStorage.setItem('menu', JSON.stringify(data));
}
export const menu = JSON.parse(localStorage.getItem('menu'));

export function Keywords() {
    const dirtyKeywords = menu.map(product => product.keywords).flat();
    const uniqueKeywords = [...new Set(dirtyKeywords)];
    return uniqueKeywords;
}

export function filterMenu(keyword) {
    return menu.filter(product => product.keywords.includes(keyword));
}

export function findProduct(id) {
    return menu.find(elem => elem.id === `${id}`);
}