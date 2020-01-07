import { Component } from '@angular/core';
import { ChatlistService } from '../chat/chatlist.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username : String = 'Jack';

  message_box : String = '';


  constructor(private chatlist : ChatlistService) {}

  sendMessage(){
  }


}


