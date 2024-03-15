import List from './components/List/List.jsx'

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` }
]

function App() {


  return (
    <List list={animals} />
  )
}

export default App
