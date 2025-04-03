import { Component } from '@angular/core';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CharacterListComponent,
    CharacterFilterComponent,
    HttpClientModule
  ],
  providers:[CharacterService]
})
export class AppComponent {
  title = 'Harry Potter Characters';
}
