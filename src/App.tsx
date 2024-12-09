import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RootLayout />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App 