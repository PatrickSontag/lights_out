import { render, screen } from '@testing-library/react';
import Cell from './Cell';

it("should render without crashing", () => {
  render(<Cell/>);
})

it("should match snapshot", () => {
    const { asFragment } = render(<Cell />);
    expect(asFragment()).toMatchSnapshot();
})