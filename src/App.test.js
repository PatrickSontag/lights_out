import { render, screen } from '@testing-library/react';
import App from './App';

it("should render without crashing", function() {
  render(<App/>);
})

it('should render Lights Out title', () => {
  render(<App />);
  const lightsOutTitle = screen.getByText(/lights out/i);
  expect(lightsOutTitle).toBeInTheDocument();
});

it("should match snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})