import { Badge, Col } from 'antd';
import { SearchBar } from "../../Home/components/SearchBar/SearchBar";
import { Header } from "antd/es/layout/layout";
import { ShoppingCartOutlined } from "@ant-design/icons";
import './Menu.scss';
import { useMenu } from "./useMenu";
import { Link } from "react-router-dom";

interface MenuComponentProps {
    searchBarIsHidden?: boolean
}

export const MenuComponent = ({ searchBarIsHidden }: MenuComponentProps) => {
    const { numberOfItemsInCart } = useMenu();

    return (
        <Header className='header'>
            <Col xs={22} md={18} className="menu-text">
                <Link to='/'>
                    My Shop
                </Link>
            </Col>
            <Col xs={0} md={5}>
                {!searchBarIsHidden && <SearchBar />}
            </Col>
            <Col xs={2} md={1} className="cart-icon">
                <Link to='/cart'>
                    <Badge count={numberOfItemsInCart}>
                        <ShoppingCartOutlined className="shopping-cart" />
                    </Badge>
                </Link>
            </Col>
        </Header>
    )
}

MenuComponent.defaultProps = {
    searchBarIsHidden: false
}