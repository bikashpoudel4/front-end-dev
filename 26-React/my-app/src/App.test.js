import {render} from '@testing-library/react'
import App from "./App"

test("Outputs the H1 tag", ()=> {
    const {getByText} = render(<App />);
    const h1 = getByText(/Welcome to React Testing Lib/);
    expect(h1).toHaveTextContent("Welcome to React Testing Lib");
})