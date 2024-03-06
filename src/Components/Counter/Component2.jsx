import useCounter from "../Hooks/Counter";

function Component2() {
  let clickedButton = useCounter(0, "Component2");

  return (
    <div>
      <h2>This the Second Component {clickedButton.count}</h2>
      <button onClick={clickedButton.inc}>Click</button>
    </div>
  );
}

export default Component2;
