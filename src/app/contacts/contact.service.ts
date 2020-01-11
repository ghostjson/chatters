import { Injectable } from '@angular/core';
import { Contact } from './ contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactList : Contact[];

  constructor() {

    this.contactList = [
      new Contact('Jack', 'Sparrow', 'jacky', 123123123, 'https://randomuser.me/api/portraits/men/77.jpg'),
      new Contact('Tiger', 'B', 'tb', 123123123 , 'https://randomuser.me/api/portraits/men/0.jpg'),
      new Contact('Lap', 'Snow', 'lapss', 123123123, 'https://randomuser.me/api/portraits/men/34.jpg'),
      new Contact('Jason', 'Derulo', 'jd', 123123123, 'https://randomuser.me/api/portraits/men/57.jpg'),
      new Contact('Will', 'Smith', 'will', 123123123, 'https://randomuser.me/api/portraits/men/1.jpg'),
    ]


  }

  getContacts() : Contact[] {
    return this.contactList;
  }




}
