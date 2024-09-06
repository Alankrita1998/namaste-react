import Contact from "../Contact";
import { render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";

test("Should load the Contact Us component", 
    () => {

        render(<Contact/>);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    }
);

test("Should load the button Contact Us component", 
    () => {

        render(<Contact/>);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    }
);

test("Should load the Contact Us component", 
    () => {

        render(<Contact/>);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    }
)

test("Should load two input boxes in Contact Us component", () => {
    
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toBe(3); // Ensure there are exactly 2 input boxes
});

