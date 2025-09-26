const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");
const emptyCart = document.getElementById("empty-cart");
const purchaseList = document.getElementById("purchase-list");


const data = [
	{"id": 1,"name": "Apple","price": 20,},
	{"id": 2,"name": "Banana","price": 10,},
	{"id": 3,"name": "Orange","price": 15,}
]


let cart = [];

function renderProducts(){
	cartList.innerHTML = ""
	data.forEach((product, index) => {

		return cartList.innerHTML += ` 
			<div class="flex items-center justify-between gap-10 p-2 bg-black rounded-md">
				<span>${product.name}</span>
				<span>${product.price}</span>
				<button class="bg-green-400 py-2 px-5 rounded-md text-sm cursor-pointer hover:bg-green-600" 
				id="add-to-cart" onclick="addToCart(${index})">Add to Cart</button>

			</div>
		`
	})
}

function addToCart(id){
	const product = data[id]

	const existingProduct = cart.find(item => item.id === product.id)
	
	if(existingProduct){
		existingProduct.quantity += 1
	}else{
		cart.push({...product, quantity: 1})
	}

	totalPrice.innerText = `₱${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`

	purchaseListRender()
	emptyCart.style.display = "none"

}

function purchaseListRender(){

	purchaseList.innerHTML = ""
	if(cart.length === 0){
		emptyCart.style.display = "block"
		return
	}

	cart.forEach((item, index) => {
		return purchaseList.innerHTML += `
			<div class="flex items-center justify-between gap-10 p-2  rounded-md">
				<div>${item.name}</div>
				<div>${item.price}</div>
				<div>x ${item.quantity}</div>
				<div>₱${item.price * item.quantity}</div>
			</div>
		`
	})


}
purchaseListRender()
renderProducts();