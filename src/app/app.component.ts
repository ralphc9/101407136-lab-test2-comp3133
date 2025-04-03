import { Component } from '@angular/core';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Make AppComponent standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CharacterListComponent,  // Import CharacterListComponent here
    CharacterFilterComponent,
    HttpClientModule // Import CharacterFilterComponent here
  ],
  providers:[CharacterService]
})
export class AppComponent {
  title = 'Harry Potter Characters';
}
