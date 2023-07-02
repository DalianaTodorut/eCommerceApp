import { useMemo } from "react";
import { useArticlesContext } from "../../services/ArticlesContext"

export const useMenu = () => {
    const { cartItems } = useArticlesContext('useMenu');

    const numberOfItemsInCart = useMemo(() =>
        cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
        [cartItems]);

    return { numberOfItemsInCart }
}