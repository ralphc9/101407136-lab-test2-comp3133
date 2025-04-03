import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characterfilter',
  standalone: true, 
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css'],
  imports: [MatSelectModule, CommonModule],
  providers: [CharacterService]
})
export class CharacterFilterComponent {
  @Output() houseFilterChanged = new EventEmitter<string>();
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onHouseChange(house: string): void {
    this.houseFilterChanged.emit(house);
  }
}
