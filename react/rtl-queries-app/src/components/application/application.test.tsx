import {Application} from './application';
import {render , screen } from '@testing-library/react';

describe("Application test",() => {
    test('render correctly',() => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();

        const comboboxElement = screen.getByRole("combobox");
        expect(comboboxElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});

