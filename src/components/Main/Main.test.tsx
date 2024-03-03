import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /My main component/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to change the title', () => {
    render(<Main title="My new title" />)

    expect(screen.getByRole('heading', { name: /My new title/i })).toBeInTheDocument()
  })
})
