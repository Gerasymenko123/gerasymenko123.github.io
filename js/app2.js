



// let i = 0;

// do {
//     console.log(addToCart[i]);
//     i++;
// } while (i<addToCart.length);

// while (i<addToCart.length){
//     console.log(addToCart[i]);
//     i++;
// }

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const countItemsInCart = document.querySelector('.count-items-in-cart');
const cartItems = document.querySelector('.cart-items');
const likeIt = document.querySelector('.like-it');
const likeMe = document.querySelector('.like-me');
// console.dir(sidebarToggle);

function subtotals(){
    let itemsInCart = document.querySelectorAll('.cart-item');
    for (let item of itemsInCart){
        let price = item.querySelector('.product-price').textContent;
        let quantity = item.querySelector('.amount').textContent;
        item.querySelector('.subtotal').textContent = quantity*price;
    }
}

sidebarToggle.addEventListener('click', function(){
    // if (!sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.add('show-sidebar');
    // }
    document.querySelector('.over').classList.add('active');
    sidebar.classList.toggle('show-sidebar');
    subtotals();
});

closeBtn.addEventListener('click', function(){
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
    document.querySelector('.over').classList.remove('active');
});

function addProductToCart(template, item){
    template.querySelector('.product-name').textContent = item.querySelector('.product-name').textContent;
    template.querySelector('.product-price').textContent = item.querySelector('.product-price').textContent;
    template.querySelector('.product-img img').setAttribute('src', item.querySelector('.img-fluid').getAttribute('src'));
    return template;
}

function createProduct(data){
    return `
    <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="product text-center">
                                <div class="position-relative mb-3">
                                    <a class="d-block"></a><img class="img-fluid w-100" src="${data.image}.jpg">
                                <div class="product-overlay">
                                    <ul class="mb-0 list-inline">
                                        <li class="list-inline-item m-0 p-0"><a href="#" class="btn btn-sm btn-outline-dark like-it"><i class="far fa-star"></i></a></li>
                                        <li class="list-inline-item m-0 p-0"><a href="#" class="btn btn-sm btn-dark add-to-cart">Add To Cart</a></li>
                                        <li class="list-inline-item mr-0"><a href="#" class="btn btn-sm btn-outline-dark"><i class="fas fa-expand"></i></a></li>
                                    </ul>
                                </div>
                                </div>
                                <h5 class="product-name reset-anchor">${data.name}</h5>
                                <p class="small product-price">${data.price}</p>
                            </div>
                        </div>
    `;
}

let result = '';
products.forEach(function(item){
    result+=createProduct(item);
});

document.querySelector('.showcase').innerHTML=result;

const template = document.getElementById('cartItem').content;
let addToCart = document.querySelectorAll('.add-to-cart');

for (let i=0; i<addToCart.length;i++){
    addToCart[i].addEventListener('click', function(e){

        let item = e.target.closet('.product');
        let content = addProductToCart(template, item);
        document.querySelector('.cart-items').append(document.importNode(content, true));
        countItemsInCart.textContent++;

        if (+countItemsInCart.textContent>0){
            countItemsInCart.classList.add('notempty');
        } else{
            countItemsInCart.classList.remove('notempty');
        }
    })
};

cartItems.addEventListener('click', function(event){
    if (event.target.classList.contains('fa-caret-right')){
        +event.target.previousElementSibling.innerText++;
        subtotals();
    }
    else if (event.target.classList.contains('fa-caret-left')){
        +event.target.nextElementSibling.innerText--;
        subtotals();
    }
    // console.dir(event.target);
});

var count = document.getElementsByClassName('far fa-star');
for(i=0;i<count.length;i++){
    document.getElementsByClassName('far fa-star').item(i).addEventListener("click", function a(){
        let curVal = likeMe.textContent;
        likeMe.textContent =+(curVal) + 1;
    });
};

