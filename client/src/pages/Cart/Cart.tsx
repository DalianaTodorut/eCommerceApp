import { MenuComponent } from "../components/Menu/MenuComponent";
import { CartItemList } from "./CartItemList/CartItemList";

export const Cart = () => {

    return (
        <>
            <MenuComponent searchBarIsHidden={true} />
            <CartItemList />
        </>
    );
}