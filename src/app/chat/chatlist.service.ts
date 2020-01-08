import { Injectable, NgModule } from '@angular/core';
import { Message } from './chat.model';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatlistService {

  public messages: Message[] = [];
  public username: string;


  constructor(private socket: Socket) {
    this.getMessage().subscribe((data) => {
      this.messages.push(data)
    });

    this.username = 'Jack';
  }


  send_message(sender: string, message: string) { 
    this.socket.emit('chat message', new Message(
      sender , `${new Date().getHours()}:${new Date().getMinutes()}`, message
   ),);
  }

  getMessage(): Observable<Message> {
    return new Observable((observer) => 
      this.socket.on('chat message', (data) => observer.next(data))
    );
  }

  isMe(msg : Message) : boolean {
    return msg.sender == this.username;
  }


}
