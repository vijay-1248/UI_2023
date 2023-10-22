import exp from 'constants';
import {Application} from './application';
import {getByText, render , screen } from '@testing-library/react';

describe("Application test",() => {
    test('render correctly',() => {
        render(<Application />);

        //getByTestId
        const testIdValue = screen.getByTestId('custom-element');
        expect(testIdValue).toBeInTheDocument();
        
        //getByTitle
        const titleValue = screen.getByTitle('close');
        expect(titleValue).toBeInTheDocument();

        //getByAltText
        const altValue = screen.getByAltText('flower');
        expect(altValue).toBeInTheDocument();

        //getDisplayValue
        const inputDisplayValue = screen.getByDisplayValue('vijaya sekhar');
        expect(inputDisplayValue).toBeInTheDocument();

        //getByText
        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        //getByPlaceholderText
        const placeHolderElement = screen.getByPlaceholderText('Fullname');
        expect(placeHolderElement).toBeInTheDocument();

        // handling multiple same lable text 
        const nameElement2 = screen.getByLabelText('Name',{
            selector : 'input'
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement1 = screen.getByLabelText('Name',{
            selector : 'select'
        });
        expect(nameElement1).toBeInTheDocument();

        const jobInformationheadingElement = screen.getByRole('heading',{
            name : 'Job application form'
        });

        expect(jobInformationheadingElement).toBeInTheDocument();

        const sectionHeadingElement = screen.getByRole('heading',{
            name :'Section 1'
        });
        expect(sectionHeadingElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name : 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name : 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const comboboxElement = screen.getByRole("combobox");
        expect(comboboxElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();

    });
});

