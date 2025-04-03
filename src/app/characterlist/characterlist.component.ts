import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characterlist',
  standalone: true, 
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
  imports: [MatCardModule, CommonModule],
  providers:[CharacterService]
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  selectedHouse: string | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  filterByHouse(house: string): void {
    this.selectedHouse = house || null;
  }

  getCharacterDetails(id: number): void {
    console.log(`Character ID: ${id}`);
    // Here you can add routing logic to navigate to the details page
  }
  
}
