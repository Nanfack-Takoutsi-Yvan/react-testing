import { render, screen } from "@testing-library/react"
import { Skills } from ".."

describe("Skills", () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  
  it("renders correctly", () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  it("renders a list of skills", () => {
    render(<Skills skills={skills} />)
    const listItemsElements = screen.getAllByRole("listitem")
    expect(listItemsElements).toHaveLength(3)
  })

  it("renders login button", () => {
    render(<Skills skills={skills} />)
    const loginButtonElements = screen.getByRole("button", { name: "Login" })
    expect(loginButtonElements).toBeInTheDocument()
  })

  it("doesn't render start learning button", () => {
    render(<Skills skills={skills} />)
    const learningButtonElements = screen.queryByRole("button", { name: "Start learning" })
    expect(learningButtonElements).not.toBeInTheDocument()
  })

  it("displays eventually start learning button", async () => {
    render(<Skills skills={skills} />)
    const learningButtonElements = await screen.findByRole("button", { name: "Start learning" }, { timeout: 2000 })

    expect(learningButtonElements).toBeInTheDocument()
  })
})