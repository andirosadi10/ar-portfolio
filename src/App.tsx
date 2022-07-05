import { useRef } from "react"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"

const App = () => {
  const theme = useRef<HTMLInputElement>(null)

  // const handleSetTheme = (e) => {
  //   e.preventDefault()
  //   console.log(theme.current?.classList[0]);
  //   // theme.current?.classList.remove('dark');

  //   theme.current?.classList.add('dark');
  // }

  return (
    <div className="w-full flex border-0 antialiased relative" ref={theme}>
      {/* Sidebar */}
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
