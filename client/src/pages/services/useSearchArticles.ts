import axios, { AxiosResponse } from 'axios';
import { useArticlesContext } from "./ArticlesContext"
import { BACKEND_URL } from '../../config'
import { Article } from './interfaces';
import { message } from 'antd';


export const useSearchArticles = () => {
    const { setArticles} = useArticlesContext('useFetchArticles');

    
    const errorNotification = () => {
        message.open({
          type: 'error',
          content: 'Oops, something went wrong. Please try again later.',
        });
      };


    const onSearchArticles = (param: string) => {
        axios.get(`${BACKEND_URL}/${param}`)
            .then((response: AxiosResponse<Article[]>) => {
                setArticles(response.data);
            }).catch((err) => {
                console.error(err);
                errorNotification();
            });
    }

    return { onSearchArticles };
}

