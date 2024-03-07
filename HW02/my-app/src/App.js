import List from "./components/List";

let arr = ['Kharkiv', 'Lviv', 'Odesa', 'Poltava'];
let color = 'lightblue'
let colors = ['yellow', 'red', 'green', 'blue', 'gold', 'grey', 'pink', '3366CC', 'CCFF33']


function App() {
  return (
    <List list={arr} color={color} colors={colors}></List>
  );
}

export default App;
