import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('버튼 기능 테스트', () => {

    it('버튼 이벤트 테스트', () => {
        render(<App />);

        const button = screen.getByRole('button', { name: 'change to blue!' });
        let styles = window.getComputedStyle(button);
        expect(styles.backgroundColor).toBe('rgb(255, 0, 0)');

        fireEvent.click(button);

        styles = window.getComputedStyle(button);
        expect(styles.backgroundColor).toBe('rgb(0, 0, 255)');

        expect(button.textContent).toBe('change to red!');
        // expect(button).toHaveStyle()
    });

});