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



// let i = 0;

// do {
//     console.log(addToCart[i]);
//     i++;
// } while (i<addToCart.length);

// while (i<addToCart.length){
//     console.log(addToCart[i]);
//     i++;
// }

// const sidebarToggle = document.querySelector('.sidebar-toggle');
// const sidebar = document.querySelector('.sidebar');
// const closeBtn = document.querySelector('.close-btn');
// const countItemsInCart = document.querySelector('.count-items-in-cart');
// const cartItems = document.querySelector('.cart-items');

// const clearCart = document.querySelector('.clear-cart');
// let cart = [];
// console.dir(sidebarToggle);

// function subtotals(){
//     let itemsInCart = document.querySelectorAll('.cart-item');
//         for (let item of itemsInCart) {
//             const price = item.querySelector('.product-price').textContent;
//             let quantity = item.querySelector('.quantity').textContent;
//             item.querySelector('.subtotal').textContent=quantity*price;
//         };
// }

// sidebarToggle.addEventListener('click', function(){
//     // if (!sidebar.classList.contains('show-sidebar')){
//     //     sidebar.classList.add('show-sidebar');
//     // }
//     document.querySelector('.over').classList.add('active');
//     sidebar.classList.toggle('show-sidebar');
//     subtotals();
// });

// closeBtn.addEventListener('click', function(){
//     // if (sidebar.classList.contains('show-sidebar')) {
//     //     sidebar.classList.remove('show-sidebar');
//     // }
//     sidebar.classList.toggle('show-sidebar');
//     document.querySelector('.over').classList.remove('active');
// });

// function createCartItem(item){
//     const div = document.createElement('div');
//     div.className = "cart-item";
//     div.setAttribute('id', item.id);


//     div.innerHTML = `
    
//         <div class="picture product-img">
//             <img src="${item.image}" alt="${item.name}" class="img-fluid w-100">
//         </div>
//         <div class="product-name">${item.name}</div>
//         <div class="remove-btn text-right">
//             <a href="#" class="reset-anchor m-auto">
//                 <i class="fas fa-trash-alt" data-id="${item.id}"></i>
//             </a>
//         </div>
//         <div class="quantity">
//             <div class="border d-flex justify-content-around mx-auto">
//                 <i class="fas fa-caret-left" data-id="${item.id}"></i>
//                 <span class="border-1 p-1 amount">${item.amount}</span>
//                 <i class="fas fa-caret-right" data-id="${item.id}"></i>
//             </div>
//         </div>
//         <div class="prices">
//             <span class="price">$ <spa class="product-price">${item.price}</spa></span>
//             <span class="subtotal">$ <spa class="product-price"></spa></span>
//         </div>
    
//     `;
//     cartItems.append(div);
//     // template.querySelector('.product-name').textContent = item.querySelector('.product-name').textContent;
//     // template.querySelector('.product-price').textContent = item.querySelector('.product-price').textContent;
//     // template.querySelector('.product-img img').setAttribute('src', item.querySelector('.img-fluid').getAttribute('src'));
//     // return template;
// }

// function getProduct(id){
//     return products.find(product => product.id === +(id));
// }

// function addProductToCart(){
//     const countItemsInCart = document.querySelector('.count-items-in-cart');
//     const addToCartButtons = [...document.querySelectorAll('.add-to-cart')];
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', evant => {
//             let cartItem = { ...getProduct(evant.target.closest('.product').getAttribute('data-id')), amount: 1};
//             cart = [...cart, cartItem];

//             createCartItem(cartItem);
//             countItemsInCart.textContent++;

//             if (+countItemsInCart.textContent>0){
//                 countItemsInCart.classList.add('notempty');
//             } else{
//                 countItemsInCart.classList.remove('notempty');
//             }
//             subtotals();
//         });
//     });
// }

// function clearAll(){
//     cart = [];
//     while(cartItems.children.length>0){
//         cartItems.removeChild(cartItems.children[0]);
//     }
//     subtotals();
// }

// const filterItem = (cart, filteredItem) => cart.filter(item => item.id !== +(filteredItem.dataset.id));

// const findItem = (cart, findingItem) => cart.find(item => item.id === +(findingItem.dataset.id));

// function renderCart(){
//     clearCart.addEventListener('click', () => clearAll());
//     cartItems.addEventListener('click', event => {
//         if(event.target.classList.contains('fa-trash-alt')){
//             cart = filterItem(cart, event.target);
//             cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
//             subtotals();
//         } else if (event.target.classList.contains('fa-caret-right')){
//             let tmp = findItem(cart, event.target);
//             tmp.amount = tmp.amount + 1;
//             event.target.previousElementSibling.innerText = tmp.amount;
//             subtotals();
//         } else if(event.target.classList.contains('fa-caret-left')){
//             let tmp = findItem(cart, event.target);
//             tmp.amount = tmp.amount - 1;
//             if(tmp.amount >0){
//                 event.target.nextElementSibling.innerText = tmp.amount;
//             } else{
//                 cart = filterItem(cart, event.target);
//                 cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
//             }
//             subtotals();
//         }
//     })
// }

// function createProduct(data){
//     return `
//     <div class="col-xl-3 col-lg-4 col-sm-6">
//         <div class="product text-center" data-id="${data.id}">
//                 <div class="position-relative mb-3">
//                        <a class="d-block"></a><img class="img-fluid w-100" src="${data.image}" alt="${data.name}"></a>
//                         <div class="product-overlay">
//                             <ul class="mb-0 list-inline">
//                                 <li class="list-inline-item m-0 p-0"><a href="#" class="btn btn-sm btn-outline-dark like-it"><i class="far fa-star"></i></a></li>
//                                 <li class="list-inline-item m-0 p-0"><a href="#" class="btn btn-sm btn-dark add-to-cart">Add To Cart</a></li>
//                                 <li class="list-inline-item mr-0"><a href="#" class="btn btn-sm btn-outline-dark"><i class="fas fa-expand"></i></a></li>
//                             </ul>
//                         </div>
//                 </div>
//                 <h5 class="product-name reset-anchor">${data.name}</h5>
//                 <p class="small product-price">${data.price}</p>
//         </div>
//     </div>
//     `;
// }



// const template = document.getElementById('cartItem').content;
// let addToCart = document.querySelectorAll('.add-to-cart');


// for (let i=0; i<addToCart.length;i++){
//     addToCart[i].addEventListener('click', function(e){

//         let item = e.target.closest('.product');
//         // todo
//         let content = addProductToCart(template, item);
//         document.querySelector('.cart-items').append(document.importNode(content, true));
//     //     countItemsInCart.textContent++;

//     //     if (+countItemsInCart.textContent>0){
//     //         countItemsInCart.classList.add('notempty');
//     //     } else{
//     //         countItemsInCart.classList.remove('notempty');
//     //     }
//     })
// };

// cartItems.addEventListener('click', (event) => {
//     if (event.target.classList.contains('fa-caret-right')){
//         +event.target.previousElementSibling.innerText++;
//         subtotals();
//     }
//     else if (event.target.classList.contains('fa-caret-left')){
//         +event.target.nextElementSibling.innerText--;
//         subtotals();
//     }
//     // console.dir(event.target);
// });

// var count = document.getElementsByClassName('far fa-star');
// for(i=0;i<count.length;i++){
//     document.getElementsByClassName('far fa-star').item(i).addEventListener("click", function a(){
//         let curVal = likeMe.textContent;
//         likeMe.textContent =+(curVal) + 1;
//     });
// };

// (function(){
//     sidebarToggle.addEventListener('click', () => {
//         document.querySelector('.over').classList.add('active');
//         sidebar.classList.toggle('show-sidebar');
//         subtotals();
//     });
//     closeBtn.addEventListener('click', () => {
//         sidebar.classList.toggle('show-sidebar');
//         document.querySelector('.over').classList.remove('active');
//     });

//     let result = '';
//     products.forEach(function(item){
//         result+=createProduct(item);
//     });
//     document.querySelector('.showcase').innerHTML=result;

// subtotals(){
    //     let itemsInCart = document.querySelectorAll('.cart-item');
    //         for (let item of itemsInCart) {
    //             const price = item.querySelector('.product-price').textContent;
    //             let quantity = item.querySelector('.quantity').textContent;
    //             item.querySelector('.subtotal').textContent=quantity*price;
    //         };
    // }

    // let itemsInCart = document.querySelectorAll('.cart-item');
        // for (let item of itemsInCart) {
        //     const price = item.querySelector('.product-price').textContent;
        //     let quantity = item.querySelector('.quantity').textContent;
        //     item.querySelector('.product-subtotal').textContent=quantity*price;
        //     };

        // let itemsTotal = 0;
        // cart.map(item => {
        //     tmpTotal += item.price*item.amount;
        //     itemsTotal += item.amount;
        // });