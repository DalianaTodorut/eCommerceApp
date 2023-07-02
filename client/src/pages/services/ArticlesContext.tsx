import { Article, CartItem } from "./interfaces";
import { createContext, useContext, useEffect, useState } from "react";

interface Props {
    children: React.ReactNode,
}

export const ArticlesContext = createContext<{
    articles: Article[],
    setArticles: React.Dispatch<React.SetStateAction<Article[]>>,
    cartItems: CartItem[],
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
} | undefined>(undefined);
ArticlesContext.displayName = 'ArticlesContext';

export const useArticlesContext = (usageName: string) => {
    const articlesContext = useContext(ArticlesContext);

    if(articlesContext === undefined) {
        throw new Error(`${usageName} must be used within an ArticlesContextProvider`);
    }

    return articlesContext;
}

const ArticlesContextProvider = ({children}: Props) => {
    const initialStateCartItems = () => JSON.parse(localStorage.getItem('cartItems')|| '[]') ?? [];
    const [articles, setArticles] = useState<Article[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>(initialStateCartItems);
    const articlesContextValue = {
        articles,
        setArticles,
        cartItems,
        setCartItems
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <ArticlesContext.Provider value={articlesContextValue}>
            {children}
        </ArticlesContext.Provider>
    )
};

export default ArticlesContextProvider;