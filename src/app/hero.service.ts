import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';

// use service to inject the data into components
// components only present how to display data
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = '/api/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: Number): Observable<Hero> {
    this.messageService.add(`Hero Service, fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}