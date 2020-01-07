import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username : String = 'Jack';

  message_box : String = ''; 

  messageList : Message[] = [
    new Message('Jack', 'Hello world'),
    new Message('Sparrow', 'Hello'),
    new Message('Jack', 'Nice to meet you'),
  ];

  constructor() {}

  sendMessage(){
    this.messageList.push(new Message('Jack', this.message_box))
    this.message_box = '';
  }

  isMe(msg : Message){
    return msg.sender === this.username;
  }

}

class Message{
  public sender : String;
  public time : String;
  public message : String;

  constructor(sender: String, message: String){
    this.sender = sender;
    this.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
    this.message = message;
  }
}
