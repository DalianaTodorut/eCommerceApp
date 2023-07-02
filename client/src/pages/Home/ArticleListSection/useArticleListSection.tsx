import { useEffect } from "react";
import { useArticlesContext } from "../../services/ArticlesContext"
import { useSearchArticles } from "../../services/useSearchArticles";


export const useArticleListSection = () => {

    const {articles, cartItems} = useArticlesContext('useArticleListSection');
    const {onSearchArticles} = useSearchArticles();

    useEffect(() => {
        onSearchArticles('');
    })

    return {articles,cartItems};
}