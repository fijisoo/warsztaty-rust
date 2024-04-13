import {useEffect, useState} from 'react';
import { warsztaty_backend } from 'declarations/warsztaty_backend';

function App() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    warsztaty_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

    const getMessages = async () => {
        const data = await warsztaty_backend.pobierz_wpisy();
        console.log(data);
        setMessages(data);
    }

  useEffect(() => {
      getMessages()
  }, [])

    const handleMessageChange = (e) => {
      setInputText(e.target.value);
    }

    const handlePushMessage = async () => {
        await warsztaty_backend.dodaj_wpis(inputText)
        await getMessages()
    }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
        Dodaj wpis: <input type="text" onChange={handleMessageChange}/>
        <button onClick={handlePushMessage}>DODAJ WPIS</button>
      <section id="messages">Messages: {messages.map(el => <p>{el}</p>)}</section>
    </main>
  );
}

export default App;
