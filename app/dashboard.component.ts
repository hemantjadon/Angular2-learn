import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl:'app/templates/dashboard.component.html',
	styleUrls: ['app/styles/dashboard.component.css']
})

export class DashBoardComponent implements OnInit{
	heroes:Hero[];
	constructor(
		private _heroService : HeroService,
		private _router : Router
	){};
	ngOnInit(){
		this._heroService.getHeroes().then((heroes)=>(this.heroes = heroes.slice(1,5)));
	}
	gotoDetail(hero : Hero){
		let link = ['HeroDetail',{id: hero.id}]
		this._router.navigate(link);
	}
}