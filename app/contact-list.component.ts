import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'contact-list',
  template: `
    <h1>Contact List</h1>
    <ul>
      <li *ngFor="let contact of childContactList">{{contact.firstName}} {{contact.lastName}}, {{contact.phone}}</li>
    </ul>
  `
})

export class ContactListComponent {
  @Input() childContactList: Contact[];
  @Output() clickSender =  new EventEmitter();

}
