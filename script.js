let cartIcon = document.querySelector(".bi-cart4");
let cartcontainer = document.querySelector(".cartShop");
let x = document.querySelector(".closeBox");


// fetch api
let products = [
    {
        "price": 22,
        "Title": "Kung Fu Panda",
        "Year": "2008",
        "imdbID": "tt0441773",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "price": 35,
        "Title": "Kung Fu Panda 2",
        "Year": "2011",
        "imdbID": "tt1302011",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "price": 10,
        "Title": "Kung Fu Panda 3",
        "Year": "2016",
        "imdbID": "tt2267968",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_SX300.jpg"
    },
    {
        "price": 28,
        "Title": "Kung Fu Panda: Secrets of the Furious Five",
        "Year": "2008",
        "imdbID": "tt1287845",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQwMWNmYWUtY2E5NS00OTlkLWI2Y2MtNzhjZDUyYmZhZDVjXkEyXkFqcGdeQXVyNjc2MjYzMTY@._V1_SX300.jpg"
    },
    {
        "price": 30,
        "Title": "Kung Fu Panda: Legends of Awesomeness",
        "Year": "2011–2016",
        "imdbID": "tt1545214",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZmMwNDktZTQyNi00MmI3LTkxZGUtYjEzYjM0ODgyNmU2XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg"
    },
    {
        "price": 45,
        "Title": "Kung Fu Panda Holiday",
        "Year": "2010",
        "imdbID": "tt1702433",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGNjYzAzZjAtNjExNy00ZDVmLWI5ODktM2Q3NjBiZTIyYzNmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"
    },
    {
        "price": 50,
        "Title": "The Amazing Panda Adventure",
        "Year": "1995",
        "imdbID": "tt0112342",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmUyZWJmZDktMjE0Yy00MjUwLTlmMmUtNTk0YjFkODUxZTVkXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
    },
    {
        "price": 33,
        "Title": "Kung Fu Panda: Secrets of the Masters",
        "Year": "2011",
        "imdbID": "tt1980162",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjZmMWU3NDgtYTQ0MC00YzdlLTg0YWUtMDRkMTVlMzhhYTRlXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"
    },
    {
        "price": 68,
        "Title": "Kung Fu Panda: Secrets of the Scroll",
        "Year": "2016",
        "imdbID": "tt5513770",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA2ZmJjNDUtOWJjZC00ZWY5LTg1MGUtODMzODVkZmIyYTE1XkEyXkFqcGdeQXVyNjIzODI5OTQ@._V1_SX300.jpg"
    },
    {
        "price": 56,
        "Title": "Panda! Go Panda!",
        "Year": "1972",
        "imdbID": "tt0069058",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjdiMGYwMjgtNjdmZC00ZjdkLThhMjgtMjBhZTQzMzE5MGM2XkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
    }
]

let mass = "";
products.map((vall) => {
    mass += ` <div class="card m-3 p-1" style="width: 18rem;">
    <img src=${vall.Poster} alt="shopImges">
     <div class="card-body">
       <h5 class="card-title text-center">${vall.Title}</h5>
       <p class="card-text">${vall.Year}</p>

       <div class="sumBox">
         <span class="kurs">$</span>
         <span class="summa">${vall.price}</span>
       </div>

       <div class="wied">
       <button class="btn btn-primary btn">Add to Cart</button>
       <div class="likeBox">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
       </div>
     </div>

     </div>
   </div>`
})
document.querySelector(".containerBox").innerHTML = mass;
// fetch api end


cartIcon.onclick = () => {
    cartcontainer.classList.add("active")
};

x.onclick = () => {
    cartcontainer.classList.remove("active")
}

// xarid qilingan mahsulotni o'chirish
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCardButtons = document.getElementsByClassName("removeBox");
    // console.log(removeCardButtons);
    for (var i = 0; i < removeCardButtons.length; i++) {
        var button = removeCardButtons[i];
        button.addEventListener('click', rem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var inputvall = quantityInputs[i]
        inputvall.addEventListener("change", quantityChanged);
    }
}

// quantity changet function
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function rem(event) {
    var btnClick = event.target;
    btnClick.parentElement.remove();
    updatetotal();
}

let totalPrise = document.getElementsByClassName('total-price');
// update total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0]
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priseElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priseElement.innerText.replace("$", ""))
        var quantity = quantityElement.value;
        total = total + price * quantity;
        totalPrise.innerHTML = total;
    }
}

/////////////////////////////////////

let cart = document.querySelectorAll(".btn")
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', function () {
        cartNumbers(products[i])
        totalCost(products[i]);
    })
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".countItem").textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".countItem").textContent = 1;
    }
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost')
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);

    }
    else {
        localStorage.setItem('totalCost', product.price);
    }
}




function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector(".countItem").textContent = productNumbers;
}
onloadCartNumbers();


window.addEventListener("scroll", () => {
    let sm = Math.ceil(window.scrollY)
    if (sm >= 30) {
        document.querySelector('.navbar').style.boxShadow = "0 10px 12px rgba(225, 225, 225, 225)";
    }
    else {
        document.querySelector('.navbar').style.boxShadow = "0 10px 12px transparent";
    }
})