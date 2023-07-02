import { CloseOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Image, List, Typography } from "antd"
import { CartItem } from "../../../../services/interfaces"
import './CartItemComponent.scss'

interface CartItemProps {
    item: CartItem,
    onRemoveItem: (item: CartItem) => void,
    onChangeQuantity: (article: CartItem, quantity: number) => void,
}

export const CartItemComponent = ({ item, onRemoveItem, onChangeQuantity }: CartItemProps) => (<>
    <Button type='link'
        className="close-button"
        onClick={() => onRemoveItem(item)}>
        <CloseOutlined className="icon" />
    </Button>
    <List.Item.Meta
        avatar={
            <Image
                width={100}
                height={150}
                src={item.imageUrl}
            />}
        title={item.title}
        description={
            <div className="display-flex">
                <Button type='link'
                    disabled={item.quantity === 1}
                    onClick={() => { onChangeQuantity(item, item.quantity - 1) }}
                >
                    <MinusCircleOutlined className="icon" />
                </Button>
                <span className="quantity-text">
                    {item.quantity}
                </span>
                <Button
                    type='link'
                    onClick={() => { onChangeQuantity(item, item.quantity + 1) }}
                >
                    <PlusCircleOutlined className="icon" />
                </Button>
            </div>}
    />
    <Typography.Title level={4} className="price-text" >
        {item.price} $
    </Typography.Title>
</>)