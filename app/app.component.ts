import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Ng2 Contact List</h1>
      <contact-list [childContactList]="masterContactList" (clickSender)="editContact($event)"></contact-list>
      <new-contact (newContactSender)="addContact($event)"></new-contact>
      <hr>
      <edit-contact [childSelectedContact]="selectedContact" (doneButtonClickedSender)="finishEditing()"></edit-contact>
    </div>
  `
})

export class AppComponent {

  selectedContact = null;

  masterContactList: Contact[] = [
    new Contact('Bob', 'Notbob', 1010110),
    new Contact('Rob', 'Definitelyrob', 9876543)
  ];

  editContact(clickedContact) {
    this.selectedContact = clickedContact;
  }

  finishEditing() {
    this.selectedContact = null;
  }


  addContact(newContactFromChild: Contact) {
    this.masterContactList.push(newContactFromChild);
  }
}
