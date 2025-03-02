import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { CritiquesInterface } from '../Interface/critiques.interface';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root',
})
export class CritiquesService {

  constructor(private dataService: DataService) {}

  public getAllCritiques(): Observable<CritiquesInterface[]> {
    const url = "http://127.0.0.1:5000/critiques";
    return this.dataService.getData(url) as Observable<CritiquesInterface[]>;
  }

  public postCritiques(critique: CritiquesInterface): Observable<MessageInterface> {
    const url = "http://127.0.0.1:5000/critiques";
    return this.dataService.postData(url, critique) as Observable<MessageInterface>;
  }
  
  public getCritiquesByAttractionId(attractionId: number): Observable<CritiquesInterface[]> {
    const url = `http://127.0.0.1:5000/critiques/attraction/${attractionId}`;
    return this.dataService.getData(url) as Observable<CritiquesInterface[]>;
  }
}