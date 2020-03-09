import React, {Component} from 'react';
import axios from 'axios';

export default class chatMessage extends Component {
  state = {
    messages: [],
    newMessage: '',
  };

  addMessage = event => {
    console.log (this.state);
    event.preventDefault ();
    const messages = this.state.messages;
    axios
      .post ('http//localhost:5000/api/chat', {message: this.state.newMessage})
      .then (response => {
        {
          messages.push ({message: this.state.newMessage});
          console.log ('Chat', response);
          this.setState ({
            message: '',
          });
          axios.get ('http://localhost:5000/api/chat').then (response => {
            this.setState ({message: response.data});
          });
        }
      });
  };

  handleChange = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  render () {
    return (
      <form className="chat-box">
        <input
          name="newMessage"
          className="chat-input"
          type="text"
          onChange={event => this.handleChange (event)}
          placeholder="Type A Message Here"
          value={this.state.newMessage}
        />
        <button
          className="chat-submit"
          onClick={event => this.addMessage (event)}
        >
          Submit
        </button>
      </form>
    );
  }
}
