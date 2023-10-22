import {render , screen } from '@testing-library/react';
import { Greet } from '../greet';

describe('greet',() => {
    it('Render greet successfully',() => {
        render(<Greet />);
        const element = screen.getByText("hello !");
        expect(element).toBeInTheDocument();
    });

    it('Render greet successfully when passing pros',() => {
        render(<Greet name="vijaya sekhar "/>);
        const element = screen.getByText("hello vijaya sekhar !");
        expect(element).toBeInTheDocument();
    });
});