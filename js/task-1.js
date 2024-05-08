const categories = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryItems = categoryItem.querySelectorAll('ul li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
