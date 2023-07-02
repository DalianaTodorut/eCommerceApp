
import Search from 'antd/es/input/Search';
import { useSearchArticles } from '../../../services/useSearchArticles';
import './SearchBar.scss';


export const SearchBar = () => {
    const {onSearchArticles} = useSearchArticles();
  
    return (
        <div className='search-bar'>
            <Search
                placeholder="Search..."
                onSearch={onSearchArticles}
            />
        </div>
    )
}