import { Injectable } from '@angular/core';
import { Contact } from './ contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactList : Contact[];

  constructor() {

    this.contactList = [
      new Contact('Jack', 'Sparrow', 'jacky', 123123123),
      new Contact('Tiger', 'B', 'tb', 123123123),
      new Contact('Lap', 'Snow', 'lapss', 123123123),
      new Contact('Jason', 'Derulo', 'jd', 123123123),
      new Contact('Will', 'Smith', 'will', 123123123),
    ]


  }

  getContacts() : Contact[] {
    return this.contactList;
  }



  
}
