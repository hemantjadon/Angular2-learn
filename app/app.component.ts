import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroesComponent } from './heroes.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/app.component.html',
	styleUrls: ['app/styles/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [HeroService,ROUTER_PROVIDERS],
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
	  path: '/dashboard',
	  name: 'Dashboard',
	  component: DashBoardComponent,
	  useAsDefault: true,
  },
  {
	  path: '/detail/:id',
	  name: 'HeroDetail',
	  component: HeroDetailComponent,
  }
])

export class AppComponent {
	private _title : string = 'Tour Of Heroes';
	
}