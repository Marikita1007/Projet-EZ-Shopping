export async function apiGetProducts() {
	return await fetch("https://fakestoreapi.com/products", {
		method: "GET",
	}).then((response) => response.json());
}

export async function apiAddProductToCart(id) {
	return await fetch(`https://fakestoreapi.com/products/${id}`, {method: "GET"}).then(
		(response) => response.json()
	);
}
