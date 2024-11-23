import { createRoot } from 'react-dom/client'
import { Core } from './core/index.tsx'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(<Core />)
