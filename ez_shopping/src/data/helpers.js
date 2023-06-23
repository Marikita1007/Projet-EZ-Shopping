//function that gets the total count of each product
export const getTotalQuantity = (cart) => {
	let sum = 0;
	Object.values(cart).forEach((product) => {
		sum += product.quantity;
	});
	return sum;
};

//function that gets the total price
export const getTotalPrice = (cart) => {
	let sum = 0;
	Object.values(cart).forEach((product) => {
		sum += product.price;
	});
	return sum;
}
