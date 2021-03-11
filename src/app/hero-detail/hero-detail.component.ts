import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(private location: Location, private route: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
    const currentId = +this.route.snapshot.paramMap.get('id');
    this.getHero(currentId);
  }

  getHero(id: Number) {
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
}