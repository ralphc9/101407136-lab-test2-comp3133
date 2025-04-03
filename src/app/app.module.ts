import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';

@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterFilterComponent
  ],
  providers: [CharacterService],
  bootstrap: []
})
export class AppModule { }
