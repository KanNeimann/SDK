import { React, useEffect, useState } from "react";
import { Widget, addLinkSnippet, addResponseMessage, renderCustomComponent } from 'react-chat-widget';
import  UnorderedList from './components/UnorderedList'; 
import 'react-chat-widget/lib/styles.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [chatWindowOpen, setChatWindowOpen] = useState(true);

  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const itemsList = ['item 1', 'item 2', 'item 3'];
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    console.log('newMessage: ', newMessage);
    
    setMessages(prevMessages => [...prevMessages, newMessage]);

    switch (newMessage) {
      case 'respuesta':
        // Sirve para responder con un mensaje
        addResponseMessage(`Mensaje de respuesta' . ${newMessage}`)
        break;
      case 'imagen':
        // Sirve para responder con una imagen
        addResponseMessage('![this is picture](https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png)');
        break;
      case 'archivo':
        // Sirve para responder con un archivo
        addResponseMessage('![this is file](https://d.winrar.es/d/50z1701349310/-VoqtnFN6n4yFgCL2MHzzQ/rarmacos-x64-624.tar.gz)');
        break;
      case 'lista':
        // Sirve para responder con una componente personalizado
        renderCustomComponent( UnorderedList, {items:itemsList} );
        break;
      case 'link':
        // Sirve para responder con un link
       addLinkSnippet({
          title: 'My awesome link',
          link: 'https://github.com/Wolox/react-chat-widget',
          target: '_blank'
        });
        break;
      default:
        addResponseMessage('Podrias repetirlo?');
        break;
    }
  };

  const handleToggle = (open) => {
    setChatWindowOpen((prev) => !prev);
  };

  return (
    <Widget
      // Permitir manejar la apertura del chat
      handleToggle={handleToggle}

      // Permitir manejar el envio de mensajes
      handleNewUserMessage={handleNewUserMessage}

      // Permitir tener un profile avatar
      profileAvatar='https://e7.pngegg.com/pngimages/732/15/png-clipart-dipsy-teletubbies-teletubbies-dipsy-at-the-movies-cartoons-thumbnail.png'

      // Permitir tener un profile avatar del cliente
      profileClientAvatar='https://e7.pngegg.com/pngimages/892/796/png-clipart-teletubbies-po-cartoons-teletubbies-thumbnail.png'

      // Permitir usar emojis
      emojis
    />
  );
}

export default App;