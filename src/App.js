import './App.css';
// import ImageGenerator from './ImageGenerator';
import ChatGenerator from './Generators/ChatGenerator';
import ImageGenerator from './Generators/ImageGenerator';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import { vercelDBAllLogs, initChatLog, resetChatLog } from './api/index';
// import { responseTest } from './data/testData';

function App() {
  //UNIVERSAL STATES
  const [input, setInput] = useState('');
  //CHAT GENERATOR STATES
  const [response, setResponse] = useState('');
  const [asked, setAsked] = useState('')
  const [chatLog, setChatLog] = useState([]); //initialState set by axios call
  const [temperature, setTemperature] = useState(0)
  const [godMode, setGodMode] = useState(false)
  //IMAGE GENERATOR STATES
  const [imgResponse, setImgResponse] = useState('')
  const [request, setRequest] = useState('')

  useEffect(() => {
    const setLogState = async () => {
      const logs = await vercelDBAllLogs();
      if(!logs || logs.length === 0) {
        const newLogs = await initChatLog();
        setChatLog(newLogs);
      } else {
        setChatLog(logs);
      }
    }
    setLogState();
  }, []);

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
              initChatLog={initChatLog}
              resetChatLog={resetChatLog}
              temperature={temperature}
              setTemperature={setTemperature}
              godMode={godMode}
              setGodMode={setGodMode}
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