// import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('')
  const [asked, setAsked] = useState('')
  const [chatLog, setChatLog] = useState([])

  return (
    <div className='App'>
      <Form input={input} setInput={setInput} setResponse={setResponse} setAsked={setAsked} chatLog={chatLog} setChatLog={setChatLog} />
      <p className='asked'>{asked ? `You asked: ${asked}` : null}</p>
      <h4 className='response'>{response ? response : null}</h4>
    </div>
  );
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>