import { render, screen } from "@testing-library/react"
import Application from ".."

describe("Application", () => {
  it("renders correctly", () => {
    render(<Application />)

    const pageHeading = screen.getByRole("heading", { level: 1 })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", { level: 2 })
    expect(sectionHeading).toBeInTheDocument()
    
    const nameElement = screen.getByRole("textbox", { name: "Name"})
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText("Name")
    expect(nameElement2).toBeInTheDocument()

    const imageElement = screen.getByAltText("a person with a laptop")
    expect(imageElement).toBeInTheDocument()

    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument()

    const customerElement = screen.getByTestId("custom-element")
    expect(customerElement).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", { name: "Bio" } )
    expect(bioElement).toBeInTheDocument()

    const selectElement = screen.getByRole("combobox")
    expect(selectElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole("button")
    expect(submitButtonElement).toBeInTheDocument()
  })
})