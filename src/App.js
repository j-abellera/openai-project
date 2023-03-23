import './App.css';
// import ImageGenerator from './ImageGenerator';
import ChatGenerator from './Generators/ChatGenerator';
import ImageGenerator from './Generators/ImageGenerator';
import { Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'

function App() {
  //UNIVERSAL STATES
  const [input, setInput] = useState('');
  //CHAT GENERATOR STATES
  const [response, setResponse] = useState('')
  const [asked, setAsked] = useState('')
  const [chatLog, setChatLog] = useState([
    {"role": "system", content: "You are a helpful assistant"} //sets behavior of the bot
  ]);
  //IMAGE GENERATOR STATES
  const [imgResponse, setImgResponse] = useState('')
  const [request, setRequest] = useState('')

  return (
    <>
      <header>
          <nav className='nav-link-container'>
            <NavLink className='nav-link' to='/chat'>Chat</NavLink>
            <NavLink className='nav-link' to='/image'>Image</NavLink>
          </nav>
      </header>
        <Routes>
          <Route path='/chat' element={
            <ChatGenerator
              input={input}
              setInput={setInput}
              response={response}
              setResponse={setResponse}
              asked={asked}
              setAsked={setAsked}
              chatLog={chatLog}
              setChatLog={setChatLog}
            />}
          />
          <Route path='/image' element={
            <ImageGenerator
              request={request}
              setRequest={setRequest}
              input={input}
              setInput={setInput}
              imgResponse={imgResponse}
              setImgResponse={setImgResponse}
            />}
          />
          <Route path='/*' element={<Navigate to='/chat' />} />
        </Routes>
    </>
  );
}

export default App;