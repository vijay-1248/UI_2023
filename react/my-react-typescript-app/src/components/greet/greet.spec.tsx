import {render,screen} from '@testing-library/react';
import { Greet } from './greet';


describe('greeting',()=>{
    it('Greet render successfully',() =>{
        render(<Greet />);
        const element = screen.getByText("hello !");
        expect(element).toBeInTheDocument();
    });

    it('Greet render with property successfully',() => {
        render(<Greet name="vijaya sekhar " />);
        const element = screen.getByText("hello vijaya sekhar !");
        expect(element).toBeInTheDocument();
    });
});
