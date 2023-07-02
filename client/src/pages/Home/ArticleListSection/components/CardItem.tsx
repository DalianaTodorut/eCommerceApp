import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Card, Image } from "antd"
import Meta from "antd/es/card/Meta"
import { useAddToCart } from "./useCartItem"
import './CardItem.scss'

interface CardItemProps {
    title: string,
    price: number,
    imageUrl: string
}
export const CardItem = ({ title, price, imageUrl }: CardItemProps) => {
    const { onAddItemToCart } = useAddToCart();

    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={<Image width={300} height={400} src={imageUrl} />}
            actions={[
                <Button
                    key={title}
                    type="link"
                    className="add-to-cart-button"
                    onClick={() => onAddItemToCart(title)}>
                    Add to cart <ShoppingCartOutlined />
                </Button>]}
        >
            <Meta
                title={title}
                description={`${price} $`} />
        </Card>);
}