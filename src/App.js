import './App.css';
// import ImageGenerator from './ImageGenerator';
import ChatGenerator from './Generators/ChatGenerator';
import ImageGenerator from './Generators/ImageGenerator';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import { vercelDBAllLogs, resetChatLog } from './api/index';

function App() {
  //UNIVERSAL STATES
  const [input, setInput] = useState('');
  //CHAT GENERATOR STATES
  const [response, setResponse] = useState('')
  const [asked, setAsked] = useState('')
  const [chatLog, setChatLog] = useState([]); //initialState set by axios call
  //IMAGE GENERATOR STATES
  const [imgResponse, setImgResponse] = useState('')
  const [request, setRequest] = useState('')

  useEffect(() => {
    const setLogState = async () => {
      const logs = await vercelDBAllLogs();
      if(!logs || logs.length === 0) {
        const newLogs = await resetChatLog();
        setChatLog(newLogs);
      } else {
        setChatLog(logs);
      }
    }
    setLogState();
  }, [])

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