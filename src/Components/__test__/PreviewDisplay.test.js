import { render, screen } from '@testing-library/react';
import {PreviewDisplay} from '../PreviewDisplay';

test('Preview Render Testing', () => {
  const preview = `Hello, Abhi!\nYour order #12345 is confirmed for Rs.1500.`;
  const variables = {name:'Abhi',orderNumber:12345,price:1500}

  render(<PreviewDisplay preview={preview} variables={variables} />);

  // Checking if preview is rendered
  const previewElement = screen.getByText(/Hello, Abhi!/);
  expect(previewElement).toBeInTheDocument;

  // checking multiline rendering
  expect(screen.getByText(/Your order #12345 is confirmed for Rs.1500./)).toBeInTheDocument;
});