import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'


describe('<App />', () => {
  test('renders login page when user has not logged in', async () => {
    const component = render(
      <App />
    )

    component.rerender(<App />)
    await waitForElement(
      () => component.container.querySelector('.loginForm')
    )

    expect(component.container).toHaveTextContent(
      'log in to application'
    )

  })
})