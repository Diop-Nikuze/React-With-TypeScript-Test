import Child from "./components/Child";
import Children from "./components/Children";
import Styles from "./components/Styles";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Test status="success" />
      <Children>I'm Children</Children>
      <Child>
        <Children>React components as children props</Children>
      </Child>

      <Styles
        styles={{
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
          padding: "1rem",
          margin: "12px",
          fontSize: "34px",
        }}
      />
    </div>
  );
}

export default App;
