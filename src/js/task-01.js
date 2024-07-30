'use strict'

const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);


categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');

  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
