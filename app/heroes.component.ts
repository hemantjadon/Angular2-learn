import { OnInit } from 'angular2/core';
import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  
  templateUrl:'app/templates/heroes.component.html',
  
  styleUrls:['app/styles/heroes.component.css'],
  
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	constructor(
		private _heroService : HeroService,
		private _router : Router
	){};
	ngOnInit(){
		this.getHeroes();
	}
	heroes : Hero[];
	private getHeroes(){
		this._heroService.getHeroes().then((heroes) => this.heroes = heroes);
	}
	private _selectedHero : Hero;
	private _onSelect(hero: Hero) { this._selectedHero = hero; }
	gotoDetail(hero: Hero){
		let link = ['HeroDetail',{id: hero.id}];
		this._router.navigate(link);
	}
}