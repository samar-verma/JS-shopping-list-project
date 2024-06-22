const form = document.getElementById('form');
const itemInput = document.getElementById('item-input');
const button = document.getElementById('btn');
const list = document.getElementById('item-list');
const liList = document.querySelectorAll('list');
const clear = document.getElementById('clear-btn');
const filter = document.getElementById('filter');


// adding item to list function
function addItem(e) {
    e.preventDefault();
    item = itemInput.value;
    if (item === '') {
        alert('please fill item');
    } 
     else {
        const li = document.createElement('li');
        li.className ='item';
        li.innerText =item;
        list.appendChild(li);


    }
    itemInput.value ='';
    // return li;

};




// filter item function
function filterItems(e) {
    const items = list.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
  
    items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();
  
      if (itemName.indexOf(text) != -1) {
        item.style.display = 'flex';
      } else if (list.forEach) {

      } else {
        item.style.display = 'none';
      }
    });
  };


  // clear all function
  function clearItems() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  
  };


filter.addEventListener('input', filterItems);
clear.addEventListener('click', clearItems);
button.addEventListener('click', addItem);
console.log(list.querySelectorAll('li'));
console.log(liList);
