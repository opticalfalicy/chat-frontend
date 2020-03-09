import React, {Component} from 'react';
import axios from 'axios';

import './chat.css';

import MessageBox from './MessageBox';

export default class ChatPage extends React.Component {
  state = {
    content: [],
  };

  componentDidMount (e) {
    axios
      .get ('http://localhost:5000/api/chat')
      .then (response => {
        this.setState (() => ({content: response.data}));
      })
      .catch (error => {
        console.log ('Could not retrieve chats', error);
      });
  }

  render () {
    return (
      <div className="chat-main">
        <div className="chat-window">
          {this.state.content.map (cont => <textarea>{cont.message}</textarea>)}
        </div>
        <div className="message-box"><MessageBox /></div>
      </div>
    );
  }
}
