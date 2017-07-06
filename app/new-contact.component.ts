import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'new-contact',
  template: `
    <h1>Add New Contact</h1>
      <div>
        <input #firstName>
        <input #lastName>
        <input #phone>
        <button (click)="submitForm(firstName.value, lastName.value, phone.value); firstName.value=''; lastName.value=''; phone.value='';">Add Contact</button>
      </div>
  `
})

export class NewContactComponent {
  @Output() newContactSender = new EventEmitter();

  submitForm(firstName: string, lastName: string, phone: number) {
    var newContact: Contact = new Contact(firstName, lastName, phone);
    this.newContactSender.emit(newContact);
  }
}
