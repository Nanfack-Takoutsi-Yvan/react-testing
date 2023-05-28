import { render, screen } from "@testing-library/react"
import Greet from ".."

describe("Greet snapshot", () => {
  it("should match snapshot with default hello world", () => {
    const view = render(<Greet />)

    expect(view.container).toMatchSnapshot()
  })

  it("should match snapshot with props name", () => {
    const view = render(<Greet name="Rudeus" />)

    expect(view.container).toMatchSnapshot()
  })
})

describe("Greet", () => {
  test("Greet component renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/i)
    expect(textElement).toBeInTheDocument()
  })
  
  test("Greet component renders the name props correctly", () =>  {
    render(<Greet name="Rudeus" />)
    const textElement = screen.getByText("Hello Rudeus")
    expect(textElement).toBeInTheDocument()
  })
 })