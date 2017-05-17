import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderContComponent } from './header-cont/header-cont.component';
import { OptionsContComponent } from './options-cont/options-cont.component';
import { NotesContComponent } from './notes-cont/notes-cont.component';
import { NotesComponent } from './notes/notes.component';
import { MenuContComponent } from './menu-cont/menu-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContComponent,
    OptionsContComponent,
    NotesContComponent,
    NotesComponent,
    MenuContComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
