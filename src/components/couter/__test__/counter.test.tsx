import { render, screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import { Counter } from ".."

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />)
    const countElement = screen.getByRole("heading")
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole("button", { name: "Increment"})
    expect(incrementButton).toBeInTheDocument()
  })

  it("renders a count of 0", () =>  {
    render(<Counter />)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("0")
  })

  it("renders a count of 1 after clicking the increment button", async () => {
    user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole("button", { name: "Increment"})
    await user.click(incrementButton)

    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("1")
  })

  it("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole("button", { name: "Increment"})
    await user.dblClick(incrementButton)

    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("2")
  })

  it("set the input with an increment of ten", async () => {
    user.setup()
    render(<Counter />)

    const inputElement = screen.getByRole("spinbutton")
    expect(inputElement).toBeInTheDocument()

    await user.type(inputElement, "10")
    expect(inputElement).toHaveValue(10)

    const setButtonElement = screen.getByRole("button", { name: "Set" })
    expect(setButtonElement).toBeInTheDocument()

    await user.click(setButtonElement)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("10")
  })

  it("Renders keyboard interactions", async () => {
    user.setup()
    render(<Counter />)

    await user.tab()
    const incrementButton = screen.getByRole("button", { name: "Increment"})
    expect(incrementButton).toHaveFocus()

    await user.tab()
    const inputElement = screen.getByRole("spinbutton")
    expect(inputElement).toHaveFocus()

    await user.tab()
    const setButton = screen.getByRole("button", { name: "Set"})
    expect(setButton).toHaveFocus()
  })
})