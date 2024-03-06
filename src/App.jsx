import "./App.css";
import Counter from "./Components/Counter/Counter";
// import useCustomHook from "./Components/Hooks/Custom";
// import useFormInput from "./Components/Hooks/Form";
// import Table from "./Components/Table/Table";

function App() {
  // const { value, updateValue } = useCustomHook("initialValue");

  return (
    <>
      {/* <Table /> */}

      {/* <div>
        <p>Value: {value}</p>
        <button onClick={() => updateValue("new value")}>Update Value</button>
      </div> */}

      <Counter />
    </>
  );
}
export default App;
