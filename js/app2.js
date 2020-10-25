"use strict";

class Storage{
    static saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    }

    static saveStorageItem(key, item){
        localStorage.setItem(key, JSON.stringify(item));
    }

    static saveCart(cart){
        localStorage.setItem('basket', JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('basket')?JSON.parse(localStorage.getItem('basket')):[];
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === +(id));
    }
    static getProducts(){
        return JSON.parse(localStorage.getItem('products'));
    }
    static getCategories(){
        return JSON.parse(localStorage.getItem('categories'));
    }
}

class Product{
    makeModel(products){
        return products.map(item =>{
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const image = item.image;
            const category = item.category;
            return { id, name, price, image, category };
        });
    }
}

class Category{
    makeModel(categories){
        return categories.map(item =>{
            const id = item.id;
            const name = item.name;
            const image = item.image;
            return { id, name, image};
        });
    }
}

class App{
    cart = [];
    cartItems = document.querySelector('.cart-items');
    clearCart = document.querySelector('.clear-cart');
    sidebar = document.querySelector('.sidebar');
    cartTotal = document.querySelector('.cart-total');
    countItemsInCart = document.querySelector('.count-items-in-cart');

    constructor(){
        const sidebarToggle = document.querySelector('.sidebar-toggle');

        const closeBtn = document.querySelector('.close-btn');

        sidebarToggle.addEventListener('click', () => this.openCart());

        closeBtn.addEventListener('click', () => this.closeCart());

        

        this.cart = Storage.getCart();
    }

    getProduct = id => products.find(product => product.id === +(id));

    makeShowcase(products) {
        let result = '';
        products.forEach(item => result+=this.createProduct(item));
        document.querySelector('.showcase').innerHTML=result;
    }

    openCart(){
        document.querySelector('.over').classList.add('active');
        this.sidebar.classList.toggle('show-sidebar');
        this.cartItems.innerHTML='';
        this.cart = Storage.getCart();
        this.populateCart(this.cart);
        this.setCartTotal(this.cart);
        
    }

    closeCart(){
        this.sidebar.classList.toggle('show-sidebar');
        document.querySelector('.over').classList.remove('active');
    }

    createProduct(data){
        return `
        <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product text-center" data-id="${data.id}">
                    <div class="position-relative mb-3">
                           <a class="d-block"></a><img class="img-fluid w-100" src="${data.image}" alt="${data.name}"></a>
                            <div class="product-overlay">
                                <ul class="mb-0 list-inline">
                                    <li class="list-inline-item m-0 p-0"><a href="#" class="btn btn-sm btn-outline-dark"><i class="far fa-star like-it"></i></a></li>
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
    
    populateCart(cart){
        cart.forEach(item => this.createCartItem(item));
    }

    createCartItem(item){
        const div = document.createElement('div');
        div.className = "cart-item";
        div.setAttribute('id', 'id'+item.id);
    
        div.innerHTML = `
        
            <div class="picture product-img">
                <img src="${item.image}" alt="${item.name}" class="img-fluid w-100">
            </div>
            <div class="product-name">${item.name}</div>
            <div class="remove-btn text-right">
                <a href="#" class="reset-anchor m-auto">
                    <i class="fas fa-trash-alt" data-id="${item.id}"></i>
                </a>
            </div>
            <div class="quantity">
                <div class="border d-flex justify-content-around mx-auto">
                    <i class="fas fa-caret-left" data-id="${item.id}"></i>
                    <span class="border-1 p-1 amount">${item.amount}</span>
                    <i class="fas fa-caret-right" data-id="${item.id}"></i>
                </div>
            </div>
            <div class="prices">
                <span class="price">$ <spa class="product-price">${item.price}</spa></span>
                <span class="subtotal">$ <spa class="product-subtotal"></spa></span>
            </div>
        
        `;
        this.cartItems.append(div);
    }

    addProductToCart(){
        
        const addToCartButtons = [...document.querySelectorAll('.add-to-cart')];
        addToCartButtons.forEach(button => {
            button.addEventListener('click', event => {
                let product = this.getProduct(event.target.closest('.product').getAttribute('data-id'));

                let exist = this.cart.some(elem=>elem.id===product.id);
                if(exist){
                    this.cart.forEach(elem=>{
                        if(elem.id===product.id){
                            elem.amount +=1;
                        }
                    })
                }else{
                    let cartItem = { ...product, amount: 1};
                    this.cart = [...this.cart, cartItem];
                    +this.countItemsInCart.textContent++;
                    if (+this.countItemsInCart.textContent>0){
                        this.countItemsInCart.classList.add('notempty');
                    } else{
                        this.countItemsInCart.classList.remove('notempty');
                    }
                }

                Storage.saveCart(this.cart);
                
                // this.setCartTotal(this.cart);
            });
        });
    }

    clearAll(){
        this.cart = [];
        while(this.cartItems.children.length>0){
            this.cartItems.removeChild(this.cartItems.children[0]);
        }
        
        this.setCartTotal(this.cart);
    }

    filterItem = (cart, filteredItem) => cart.filter(item => item.id !== +(filteredItem.dataset.id));

    findItem = (cart, findingItem) => cart.find(item => item.id === +(findingItem.dataset.id));
    
    renderCart(){
        this.clearCart.addEventListener('click', () => this.clearAll());
        this.cartItems.addEventListener('click', event => {
            if(event.target.classList.contains('fa-trash-alt')){
                this.cart = this.filterItem(this.cart, event.target);
                event.target.closest('.cart-item').remove();
                this.setCartTotal(this.cart);
                Storage.saveCart(this.cart);
            } 
            else if (event.target.classList.contains('fa-caret-right')){
                let tmp = this.findItem(this.cart, event.target);
                tmp.amount = tmp.amount + 1;
                Storage.saveCart(this.cart);
                event.target.previousElementSibling.innerText = tmp.amount;
                this.setCartTotal(this.cart);
                
            } else if(event.target.classList.contains('fa-caret-left')){
                let tmp = this.findItem(this.cart, event.target);
                
                if(tmp !==undefined && tmp.amount >1){
                    tmp.amount = tmp.amount - 1;
                    event.target.nextElementSibling.innerText = tmp.amount;
                } else{
                    this.cart = this.filterItem(this.cart, event.target);
                    event.target.closest('.cart-item').remove();
                    // this.cartItems.removeChild(event.target.parentElement.parentElement.parentElement);
                }
                Storage.saveCart(this.cart);
                this.setCartTotal(this.cart);
            }
        })
    }

    setCartTotal(cart){
        let tmpTotal = 0;
        cart.map(item=>{
            tmpTotal = item.price*item.amount;
            this.cartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal.toFixed(2));
        })
        this.cartTotal.textContent = parseFloat(cart.reduce((previous, current)=>previous + current.price*current.amount, 0).toFixed(2));
        this.countItemsInCart.textContent = cart.reduce((previous, current)=>previous+current.amount,0);
    }

    renderLike(){
        const likeMe = document.querySelector('.like-me');
        let likeIt = [...document.querySelectorAll('.like-it')];
        likeIt.forEach(like=>{
            like.addEventListener('click', () => {
                +likeMe.textContent++;
                if(+likeMe.textContent>0){
                    likeMe.classList.add('notempty');
                }else{
                    likeMe.classList.remove('notempty');
                }
            });
        });
    }

    createCategory(category){
        return `
        <a href="#" class="category-item" data-category="${category.name}" href="#">
        <img src="${category.image}" alt="" class="img-fluid pt-3">
        <strong class="category-item-title category-item" data-category="${category.name}">${category.name}</strong></a>
        `;
    }

    makeCategories(categories){
        for (let i=0; i<3; i++){
            let div = document.createElement('div');
            div.className="col-md-4";
            if (i<2){
                div.classList.add(['mb-4', 'mb-md-0']);
            }
            if(i==0){
                div.innerHTML=this.createCategory(categories[i]);
            }else if(i==1){
                div.innerHTML=this.createCategory(categories[i])+this.createCategory(categories[i+1]);
            } else if(i==2){
                div.innerHTML=this.createCategory(categories[i+1]);
            }
            document.querySelector('.categories').append(div);
        }
    }

    renderCategory(){
        const categories = document.querySelector('.categories');
        categories.addEventListener('click', (event)=>{
            const target=event.target;
            if(target.classList.contains('category-item')){
                const category = target.dataset.category;
                const categoryFilter = items => items.filter(item=>item.category.includes(category));
                this.makeShowcase(categoryFilter(Storage.getProducts()));
            }else {
                this.makeShowcase(Storage.getProducts());
            }
            this.addProductToCart();
            this.renderCart();
        });
    }

    fetchData(dataBase, model){
        const baseUrl = `https://my-json-server.typicode.com/Gerasymenko123/Gerasymenko/${dataBase}`;
        fetch(baseUrl)
        .then(response => {
        if(response.status !== 200){
            console.error(`Looks like there was a problem. Status code: ${response.status}`);
            return;
        }
        response.json().then(dataJson=>{
            Storage.saveStorageItem(dataBase, model.makeModel(dataJson));
        })
    })
    .catch(err => console.error('Fetch Error:-S', err));
    }
}

function compareValue(key, order = 'asc'){
    return function innerSort(a, b){
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
            return 0;
        }
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase():a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase():b[key];

        let copmarison = 0;

        if(varA > varB){
            copmarison = 1;
        }else if(varA < varB){
            copmarison = -1;
        }
        return ((order === 'desc')? (copmarison * -1):copmarison);
    }
};

function categoriesList(categories){
    let result = '';
    categories.forEach(element => {
        result += `<li class="mb-2"><a class="reset-anchor category-item" href="#" data-category="${element.name}">${element.name}</a></li>`;
    });
    document.querySelector('.categories-list').innerHTML = result;
};

(function(){
    const app = new App();

    if(document.querySelector('.collections')){
        app.fetchData("categories", new Category());
        app.makeCategories(Storage.getCategories());
    }
    app.fetchData("products", new Product());
            
    app.makeShowcase(Storage.getProducts());
    app.addProductToCart();
    app.renderCart();
    app.renderLike();
    app.renderCategory();
    
    if(document.querySelector('.categories-list')){
        categoriesList(Storage.getCategories());
    }

    if(document.querySelector('.selectpicker')){
        let selectpicker = document.querySelector('.selectpicker');
        selectpicker.addEventListener('change', function(){
            console.log(this.value);

            switch (this.value) {
                case 'low-hidh':
                    app.makeShowcase(Storage.getProducts().sort(compareValue('price', 'asc')));
                    break;
                case 'high-low':
                    app.makeShowcase(Storage.getProducts().sort(compareValue('price', 'desc')));
                    break;
                case 'popularity':
                    app.makeShowcase(Storage.getProducts().sort(compareValue('id', 'desc')));
                    break;
                default:
                    app.makeShowcase(Storage.getProducts().sort(compareValue('id', 'asc')));
                    break;
            }
            
            app.addProductToCart();
            app.renderCart();
            app.renderCategory();
            app.renderLike();
        });
    }
    
})();

