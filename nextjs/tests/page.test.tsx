import { render, screen } from '@testing-library/react';
import { expect, test } from 'vite-plus/test';
import Home from '@/app/page';

test('the welcome page renders', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Your Next.js app is up and running on Laravel Cloud.' })).toBeDefined();
});
