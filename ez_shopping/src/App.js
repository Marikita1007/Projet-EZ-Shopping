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
        // On fait un call API pour récupérer les 151 1ers pokemons
        fetch(
            'https://fakestoreapi.com/products',
            { method: 'GET' }
        )
            .then( response => response.json() )// on recupere le json de la reponse de l'API
            // .then(json => console.log(json))
            .then( data => {
                console.table(data);
                // on stock les pokemons recupérés dans un variable
                let APIProducts = data;
                // on enregistre les pokemons de l'API dans le state
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
