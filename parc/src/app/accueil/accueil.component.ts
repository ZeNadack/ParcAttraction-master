import { Component, ViewChild } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import { CritiquesService } from '../Service/critiques.service';
import { CritiquesInterface } from '../Interface/critiques.interface';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  @ViewChild('myDialog') myDialog: any;

  constructor(
    public attractionService: AttractionService,
    private critiquesService: CritiquesService
  ) {}

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction();

  public submitCritique(
    attractionId: number, 
    texte: string, 
    note: number,  // Note est un nombre
    nom: string | null,  // Nom peut être une chaîne ou null
    prenom: string | null  // Prénom peut être une chaîne ou null
  ): void {
    const critique: CritiquesInterface = {
      attraction_id: attractionId,
      texte: texte,
      note: note,
      nom: nom,
      prenom: prenom
    };
  
    this.critiquesService.postCritiques(critique).subscribe({
      next: (response) => {
        console.log('Critique soumise avec succès', response);
        this.myDialog.close();
      },
      error: (error) => {
        console.error('Erreur lors de la soumission de la critique', error);
      }
    });
  }
}