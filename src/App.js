import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Message />
      <Greet name="Pedro" heroName="A Bug" /> */}
      <EventBind />
      {/* <Greet name="Mavis" heroName="Dracula">
        <p>Aku terjatuh lagi dipelukanmu</p>
      </Greet>
      <Greet name="Augie" heroName="Trisolaran">
        <button>Launch Sophons</button>
      </Greet>
      <Greet name="Arjuna" heroName="Panah Cinta"/>

      <Welcome name="Mavis" heroName="Dracula"/>
      <Welcome name="Gin" heroName="Sophons"/>
      <Welcome name="Ring" heroName="Cassete"/> */}
      {/* <Welcome name="Mavis" heroName="Dracula"/>
      <FunctionClick />
      <ClassClick /> */}
    </div>
  );
}

export default App;
