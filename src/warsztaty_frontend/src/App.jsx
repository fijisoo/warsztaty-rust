import {useEffect, useState} from 'react';
import { warsztaty_backend } from 'declarations/warsztaty_backend';

function App() {
    const [messages, setMessages] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    warsztaty_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  useEffect(() => {
      const getMessages = async () => {
          const data = await warsztaty_backend.pobierz_wpisy();
          console.log(data);
          setMessages(data);
      }

      getMessages()

  }, [])

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="messages">Messages: {messages.map(el => <p>{el}</p>)}</section>
    </main>
  );
}

export default App;
