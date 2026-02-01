import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders card with children', () => {
    const { container } = render(<Card>Test content</Card>);
    expect(container.firstChild).toHaveClass('card');
  });
});