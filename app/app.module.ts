import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list.component';
import { NewContactComponent } from './new-contact.component';
import { EditContactComponent } from './edit-contact.component';

@NgModule ({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  ContactListComponent,
                  NewContactComponent,
                  EditContactComponent ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
