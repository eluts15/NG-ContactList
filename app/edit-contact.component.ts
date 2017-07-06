import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Component ({
  selector: 'edit-contact',
  template: `
    <div>
      <div *ngIf="childSelectedContact">
        <h3>{{childSelectedContact.firstName}}, {{childSelectedContact.lastName}}</h3>
        <hr>
        <h3>Edit Contact</h3>
        <label>First name:</label>
        <input [(ngModel)]="childSelectedContact.firstName">
        <label>Last name:</label>
        <input [(ngModel)]="childSelectedContact.lastName">
        <button (click)="doneButtonClicked()">Save</button>
      </div>
    </div>

  `
})

export class EditContactComponent {
  @Input() childSelectedContact: Contact;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
