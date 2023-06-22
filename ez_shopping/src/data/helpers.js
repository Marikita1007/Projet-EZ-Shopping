//function that gets the total count of each product
export const getTotalQuantity = (cart) => {
	let sum = 0;
	Object.values(cart).forEach((product) => {
		sum += product.quantity;
	});
	return sum;
};
