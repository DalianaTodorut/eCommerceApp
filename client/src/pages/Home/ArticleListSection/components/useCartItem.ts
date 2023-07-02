import { CartItemList } from "../../../Cart/CartItemList/CartItemList";
import { useArticlesContext } from "../../../services/ArticlesContext"

export const useAddToCart = () => {
    const {setCartItems, articles, cartItems} = useArticlesContext('useAddToCart');

    const onAddItemToCart = (articleName: string) => {

        //if cartItem exists in the list => change quantity
        let cartItem = cartItems.find(cartItem => cartItem.title === articleName);
        if(cartItem) {
            const chosenArticleList = [...cartItems];
            const index = chosenArticleList.indexOf(cartItem);
            cartItem = {...cartItem, quantity: cartItem.quantity + 1};
            chosenArticleList[index] = cartItem;
            setCartItems(chosenArticleList);
            return;
        }

        const selectedItem = articles.find(article => article.title === articleName);
        if(selectedItem) {
            setCartItems(prev => [...prev, {...selectedItem, quantity: 1}]);
        }
       
    }

    return {onAddItemToCart};
}