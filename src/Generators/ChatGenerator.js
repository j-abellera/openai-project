import Form from '../Form';

const ChatGenerator = (props) => {
    const { input, setInput, setResponse, setAsked, chatLog, setChatLog, asked, response, initChatLog, resetChatLog } = props;

    const onReset = async () => {
      setAsked('');
      setResponse('')
      setInput('');
      await resetChatLog();
      const cleanSlate = await initChatLog();
      setChatLog(cleanSlate);
    }

    return (
        <div className='App'>
          <Form input={input} setInput={setInput} setResponse={setResponse} setAsked={setAsked} chatLog={chatLog} setChatLog={setChatLog} />
          <p className='asked'>{asked ? `You asked: ${asked}` : null}</p>
          <h4 className='response'>{response ? response : null}</h4>
          {
            chatLog.length > 1 
            ? <span className='submit clear' onClick={onReset}>Clear Logs</span>
            : null
          }
        </div>
      );
}

export default ChatGenerator;