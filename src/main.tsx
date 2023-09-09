import { createRoot } from 'react-dom/client'

import App from './App'

const rootDom = document.getElementById('root')

if (rootDom) {
  createRoot(rootDom).render(<App />)
} else {
  throw new Error('root dom not found')
}
