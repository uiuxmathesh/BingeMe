import './App.css'
import Buttons, {OutlineButton}  from './components/common/buttons/Buttons'

function App() {
  return(
    <>
      <Buttons bg="aqua" name="Click me"/>
      <OutlineButton bg="none" name="Click-me"/>
    </>
  )
}

export default App
