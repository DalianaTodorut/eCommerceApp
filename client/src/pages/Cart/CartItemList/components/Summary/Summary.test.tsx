import { render, screen } from "@testing-library/react";
import { Summary } from "./Summary";

test('renders summary row with props', () => {
    render(<Summary total={200} onSubmitCartItems={() => {}} />);
    expect(screen.getByRole("button", {name: 'Submit'})).toBeInTheDocument();
    expect(screen.getByText(/Total/)).toBeInTheDocument();
    expect(screen.getByText(/200/)).toBeInTheDocument();
  });