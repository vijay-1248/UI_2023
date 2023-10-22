import {render,screen} from '@testing-library/react'
import { Greet } from './greet';

describe('greet',()=> {
    test('Greet render successfully', () => {
        render(<Greet />);
        const element = screen.getByText('hello !');
        expect(element).toBeInTheDocument();
    });
    
    test('Greet should render with props',()=>{
        render(<Greet name="vijaya sekhar " />);
        const element = screen.getByText('hello vijaya sekhar !');
        expect(element).toBeInTheDocument();
    });
});
