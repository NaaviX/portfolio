import { render } from '@testing-library/react'
import App from 'App'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

test('renders App component', () => {
    render(<App />)
    mockAllIsIntersecting(true)
})
