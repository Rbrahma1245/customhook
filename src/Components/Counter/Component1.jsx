import useCounter from "../Hooks/Counter";

function Component1() {
let clickedButton = useCounter(0, "Component1")

console.log(clickedButton);
// let {count , inc} = clickedButton
  return (
    
    <div>
      <h2>This the first Component {clickedButton.count}</h2>
      <button onClick={clickedButton.inc}>Click</button>
    </div>
  );
}

export default Component1;
