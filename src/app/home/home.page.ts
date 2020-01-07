import { Component, ViewChild, OnInit } from '@angular/core';
import { ChatlistService } from '../chat/chatlist.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  @ViewChild(IonContent, {static: false}) content: IonContent;

  // @ViewChild('chatcontent', {static: false}) content : any;

  ngOnInit(): void {
    // this.content.scrollToBottom();
  }

  ionViewDidEnter() {
    this.content.scrollToBottom();
  }

  message_box: string = '';

  constructor(private chatlist: ChatlistService) { }


  // scrollToBottom(){
  //   setTimeout(() => {
  //     if (this.content.scrollToBottom) {
  //         this.content.scrollToBottom(400);
  //     }
  // }, 500);
  // }

  sendMessage() {
    setTimeout(()=>{this.content.scrollToBottom(200);},100);
    this.chatlist.send_message(this.chatlist.username, this.message_box);
    this.message_box = '';
  }



 
}


