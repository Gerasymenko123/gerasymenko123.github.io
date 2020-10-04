"use strict"

// let cartItem = document.createElement('div');
// cartItem.className = "cart-item";
// let picture = document.createElement('div');
// let imgFluid = document.createElement('img');
// let productName = document.createElement('div');
// let prices = document.createElement('div');
// // let productText = document.createTextNode('product 2 name');
// productName.innerText = 'product 2 name';
// productName.className = 'product-name';
// // productName.appendChild(productName);
// prices.innerText = 234;
// imgFluid.setAttribute('src', 'images/Exterior1.jpg');
// imgFluid.setAttribute('alt', 'product 2 name');
// imgFluid.className = "img-fluid w-100";
// picture.appendChild(imgFluid);
// cartItem.appendChild(picture);
// cartItem.appendChild(productName);
// cartItem.appendChild(prices);
// document.querySelector('.cart-items').appendChild(cartItem);


// let quantity = document.createElement('div');
// let border = document.createElement('div');
// let caretLeft = document.createElement('i');
// let amount = document.createElement('span');
// let caretRight = document.createElement('i');

// quantity.className = 'quantity';
// amount.textContent = 1;
// border.append(amount);

// caretLeft.className = 'fas fa-caret-left';
// caretRight.className = 'fas fa-caret-right';

// border.insertBefore(caretLeft, border.firstChild);
// border.insertBefore(caretRight, null);

// quantity.append(border);

// let parent = document.querySelector('.cart-item');
// // console.log(parent);
// parent.insertBefore(quantity, parent.lastChild);

// parent.querySelector('.product-name').insertAdjacentHTML('beforeend', '<div class="remove-btn text-right"><a href="#" class="reset-anchor m-auto"><i class="fas fa-trash-alt"></i></a></div>');

let cont = document.getElementById('cartItem').content;

document.querySelector('.add-to-cart').addEventListener('click', function(){
    document.querySelector('.cart-items').append(document.importNode(cont, true));
})