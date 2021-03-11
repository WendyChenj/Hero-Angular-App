import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
// ngOnInit is a lifecycle hook and is good for fetching its initial data 
export class HeroesComponent implements OnInit {

  // property
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, public messageService: MessageService) {}

  // a place to put initialization logic
  // after constructing the HeroesComponent, the function inside the ngOnInit will be invoked
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}