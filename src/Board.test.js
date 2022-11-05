import { render, screen } from '@testing-library/react';
import Board from './Board';

it("should render without crashing", function() {
  render(<Board/>);
})

// it('should render Lights Out title', () => {
//   render(<Board />);
//   const lightsOutTitle = screen.getByText(/<table id="game-board">/);
//   expect(lightsOutTitle).toBeInTheDocument();
// });