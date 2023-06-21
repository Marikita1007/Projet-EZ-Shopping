import './App.scss';
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";// Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";// Bootstrap Bundle JS
import {useContext, useEffect} from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsContext from "./data/ProductsContext";
//test comment
const App = () => {

    const [state, dispatch] = useContext(ProductsContext);

    useEffect(() => {
        fetch(
            'https://fakestoreapi.com/products',
            { method: 'GET' }
        )
            .then( response => response.json() )
            .then( data => {
                let APIProducts = data;
                dispatch( { type: 'SET_PRODUCTS', payload: APIProducts} )
            })
    }, [])

    

    return (
        <>
            <Header/>
            <main id="app_ez_shopping">
                <ProductsList />
            </main>
        </>
    )
}
export default App;
