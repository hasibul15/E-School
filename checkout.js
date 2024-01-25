const itemsList = document.querySelectorAll('.card');
const cart = document.querySelector('.card-checkout');
const calculationDiv = document.querySelector('.calculation-div');
const totalItems = document.querySelector('.total-items');
const totalPrice = document.querySelector('.total-price');
let crossBtns;
let checkoutItems = [];
let currentId = 0;

function updateCart() {
    totalItems.textContent = checkoutItems.length;
    let total = 0;
    cart.innerHTML = '';
    checkoutItems.forEach(function (item) {
        
        total += parseFloat(item.price);
        cart.innerHTML += `<div class="flex justify-between mb-4">
                            <div class="flex">
                                <img src="${item.image}" class="rounded-lg w-16 h-16 mr-4"  alt="">
                                <div class="flex flex-col gap-1">
                                    <span>${item.title}</span>
                                    <span>${item.price}</span>
                                </div>
                            </div>
                            <div>
                                <img src="./assets/x.png" data-key=${item.id} class="cross-btn cursor-pointer" height="50" alt="">
                            </div>
                        </div>
                        `;
    });
    totalPrice.textContent = total;
    crossBtns = document.querySelectorAll('.cross-btn');
    addListenersToCrossBtns();
}
function addListenersToCrossBtns() {
    crossBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            let key = btn.dataset.key;
            checkoutItems = checkoutItems.filter(function (item) {
                return item.id != key;
            });

            updateCart();
        });
    });
}

itemsList.forEach(function (item) {
    let addToCartBtn = item.querySelector('.self-start');
    addToCartBtn.addEventListener('click', function () {
        let image = item.querySelector('img').src;
        let title = item.querySelector('h3').textContent;
        let price = parseInt(item.querySelector('.price').textContent.split(" ")[0]);

        let checkoutItem = {
            id: currentId++,
            image: image,
            title: title,
            price: price
        };

        checkoutItems.push(checkoutItem);
        updateCart();
        
    });
});
