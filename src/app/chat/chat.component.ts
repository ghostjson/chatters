import { Component, OnInit } from '@angular/core';
import { ChatlistService } from './chatlist.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  
  username : string = 'Jack';

  message_box : string = '';


  constructor(private chatlist : ChatlistService) {}

  ngOnInit(){
  }



  sendMessage(){
  }



}
