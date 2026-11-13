import { Component } from '@angular/core';
import{Toolbar} from '../toolbar/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dicionario',
  imports: [Toolbar, MatCardModule, MatIconModule],
  templateUrl: './dicionario.html',
  styleUrl: './dicionario.css',
})
export class Dicionario {
  
  expandedCards: number[] = [];

toggleExpanded(id: number) {
  if (this.expandedCards.includes(id)) {
    this.expandedCards = this.expandedCards.filter(cardId => cardId !== id);
  } else {
    this.expandedCards.push(id);
  }

}
}
