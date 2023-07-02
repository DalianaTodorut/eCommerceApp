import { render, screen } from "@testing-library/react";
import { CartItemComponent } from "./CartItemComponent";

const item = {
    id: 1,
    quantity: 1,
    price: 10,
    title: 'Book',
    imageUrl: '',
}

test('renders cart item component with props', () => {
    render(<CartItemComponent item={item} onChangeQuantity={() => { }} onRemoveItem={() => { }} />);
    expect(screen.getByRole("button", { name: 'minus-circle' })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: 'minus-circle' })).toBeDisabled();
    expect(screen.getByRole("button", { name: 'plus-circle' })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: 'close' })).toBeInTheDocument();
    expect(screen.getByText(/Book/)).toBeInTheDocument();
    expect(screen.getByText(/10 /)).toBeInTheDocument();
});