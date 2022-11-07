import { render, screen } from '@testing-library/react';
import Board from './Board';

it("should render without crashing", function() {
  render(<Board/>);
})

it("should match snapshot", () => {
  const { asFragment } = render(<Board />);
  expect(asFragment()).toMatchSnapshot();
})

// beforeEach(function() {
//   jest
//     .spyOn(Math, "random")
//     .mockReturnValueOnce(0.25)
//     .mockReturnValueOnce(0.75);
// });

// afterEach(function() {
//   Math.random.mockRestore();
// });