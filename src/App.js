import './App.css';
import Sidebar from './sidebar/Sidebar';
import store from './redax/store';
import TextLine from './TextLine/TextLine';
import Messages from './Messages/Messages';

function App() {
  return (
    <div className="App">
        <Sidebar store={store}/>
        <TextLine store={store}/>
        <Messages/>
    </div>
  );
}

export default App;
