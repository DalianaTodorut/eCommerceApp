import { Divider, List, Typography } from "antd";
import { useCartItemList } from "./useCartItemList";
import { Summary } from "./components/Summary/Summary";
import { CartItemComponent } from "./components/CartItemComponent/CartItemComponent";


export const CartItemList = () => {
    const { list, onChangeQuantity, total, onRemoveItem, onSubmitCartItems } = useCartItemList();

    return (
        <>
            <Typography.Title level={1} style={{ textAlign: 'center' }}>
                My cart
            </Typography.Title>
            <Divider />
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item) => (
                    <List.Item>
                       <CartItemComponent item={item} 
                       onRemoveItem={onRemoveItem}
                        onChangeQuantity={onChangeQuantity } />
                    </List.Item>
                )}
            />
           {/* {
            list.map((item ) => (
                <CartItemComponent item={item} 
                onRemoveItem={onRemoveItem}
                 onChangeQuantity={onChangeQuantity } />
            ))
           } */}

            {list.length > 0 &&
                <Summary total={total}
                    onSubmitCartItems={onSubmitCartItems}
                />
            }
        </>

    );
}