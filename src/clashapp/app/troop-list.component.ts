import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router-deprecated';

import { Troop }        from './Troop';
// import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/troop-list.component.html',
  // styleUrls: ['app/dashboard.component.css']
})
export class TroopListComponent implements OnInit {

  troops: Troop[] = [];

  constructor(
    private _router: Router
  //   // private _heroService: HeroService
    ) {
  }

  ngOnInit() {
      this.troops = [
        'Knight', 'Giant', 'Bomber', 'Archers', 'Musketeer', 'Mini_P.E.K.K.A.', 'Baby_Dragon', 'Prince', 'Witch', 'Skeleton_Army', 'Arrows', 'Fireball', 'Spear_Goblins', 'Goblins', 'Valkyrie', 'Lightning', 'Goblin_Barrel', 'Goblin_Hut', 'Skeletons', 'Minions', 'Giant_Skeleton', 'Balloon', 'Bomb_Tower', 'Tombstone', 'Barbarians', 'Rage', 'Rocket', 'Cannon', 'Barbarian_Hut', 'X-Bow', 'P.E.K.K.A.', 'Hog_Rider', 'Minion_Horde', 'Lava_Hound', 'Freeze', 'Tesla', 'Inferno_Tower', 'Fire_Spirits', 'Wizard', 'Ice_Wizard', 'Zap', 'Mirror', 'Poison', 'Furnace', 'Golem', 'Sparky', 'Miner', 'Mortar', 'Elixir_Collector', 'Royal_Giant', 'Three_Musketeers', 'Dark_Prince', 'Guards', 'Princess'
      ];
  //   this._heroService.getHeroes()
  //     .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  // }
}

