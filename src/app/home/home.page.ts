import { Component } from '@angular/core';
import { ChatlistService } from '../chat/chatlist.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message_box: string = '';

  constructor(private chatlist: ChatlistService) { }

  sendMessage() {
    this.chatlist.send_message(this.chatlist.username, this.message_box);
    this.message_box = '';
  }
}


