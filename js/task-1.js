const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Namber of categories : ${items.length}`);

items.forEach(item => { 
    const title = item.querySelector('h2').innerText;
    const elementsCount = item.querySelectorAll('ul >li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
    
});

