import { render } from "@testing-library/react";
import {Body} from "../Body";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }

    })
})
it("should load the body component with search", 
    () => {
        render(<Body/>);
    }
)