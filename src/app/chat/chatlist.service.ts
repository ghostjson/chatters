import { Injectable } from '@angular/core';
import { Message } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatlistService {

  public messages: Message[];
  public username: string;


  constructor() {
    this.messages = [
      new Message(
        'Jack', '12:00', 'Hello world'
      ),
      new Message(
        'Sparrow', '12:01', 'Hello'
      ),
      new Message(
        'Jack', '12:01', 'How are you?'
      ),
      new Message(
        'Jack', '12:01', 'How are you?'
      ),
      new Message(
        'Jack', '12:01', 'How are you?'
      ),
      new Message(
        'Sparrow', '12:01', 'How are you?'
      ),
      new Message(
        'Jack', '12:01', 'How are you?'
      ),
      new Message(
        'Jack', '12:01', 'How are you?'
      ),

    ];

    this.username = 'Jack';
  }


  send_message(sender: string, message: string) {
    this.messages.push(
      new Message(
         sender , `${new Date().getHours()}:${new Date().getMinutes()}`, message
      ),
    )
  }

  isMe(msg : Message) : boolean {
    return msg.sender == this.username;
  }


}
