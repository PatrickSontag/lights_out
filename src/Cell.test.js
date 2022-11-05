import { render, screen } from '@testing-library/react';
import Cell from './Cell';

it("should render without crashing", function() {
  render(<Cell/>);
})