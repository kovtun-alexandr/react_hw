import CalculatorManager from "./conponents/Calculator/CalculatorManager"
import EmojiManager from "./conponents/Emoji/EmojiManager"
import SizeMansger from "./conponents/WindowSize/WindowSizeMansger"
import deviceList from "./data/deviceList"

function App() {

  return (
    <>
      <CalculatorManager />
      <SizeMansger deviceList={deviceList} />
      <EmojiManager />
    </>
  )
}

export default App
