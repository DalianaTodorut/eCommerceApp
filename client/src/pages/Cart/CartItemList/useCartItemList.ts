import { useMatch } from "react-router-dom";
import { useArticlesContext } from "../../services/ArticlesContext"
import { CartItem } from "../../services/interfaces";
import { useMemo } from "react";

export const useCartItemList = () => {
    const {cartItems,setCartItems} = useArticlesContext('useCartItemList');

    
    const onChangeQuantity = (article:CartItem, quantity:number) => {
        const chosenArticleList = [...cartItems];
        const index = chosenArticleList.indexOf(article);
        const chosenArticle =  {...article, quantity};
        chosenArticleList[index] = chosenArticle;
        setCartItems(chosenArticleList);
       
    }

    const onRemoveItem = (article:CartItem) => {
        const chosenArticleList = [...cartItems];
        const index = chosenArticleList.indexOf(article);
        
        if(index !== undefined){
            chosenArticleList.splice(index, 1);
            setCartItems(chosenArticleList);
        }
    }

    const onSubmitCartItems = () => {
        setCartItems([]);
    }

    const total = useMemo(() =>
        cartItems.reduce((total, item) => total + (item.quantity * item.price), 0),
        [cartItems]);

    
    return {
        onChangeQuantity, list:cartItems, total, onRemoveItem, onSubmitCartItems
    }
}