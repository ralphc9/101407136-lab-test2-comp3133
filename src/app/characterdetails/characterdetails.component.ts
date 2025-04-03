import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characterdetails',
  standalone: true, 
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css'],
  imports: [CommonModule, MatCardModule],
  providers:[CharacterService]
})
export class CharacterDetailsComponent implements OnInit {
  @Input() characterId: string | undefined;
  character: Character | undefined;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    if (this.characterId) {
      this.characterService.getCharacterById(this.characterId).subscribe(data => {
        this.character = data;
      });
    }
  }
}
