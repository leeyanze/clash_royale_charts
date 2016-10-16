"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// import { HeroService } from './hero.service';
var TroopListComponent = (function () {
    function TroopListComponent(_router) {
        this._router = _router;
        this.troops = [];
    }
    TroopListComponent.prototype.ngOnInit = function () {
        this.troops = [
            'Knight', 'Giant', 'Bomber', 'Archers', 'Musketeer', 'Mini_P.E.K.K.A.', 'Baby_Dragon', 'Prince', 'Witch', 'Skeleton_Army', 'Arrows', 'Fireball', 'Spear_Goblins', 'Goblins', 'Valkyrie', 'Lightning', 'Goblin_Barrel', 'Goblin_Hut', 'Skeletons', 'Minions', 'Giant_Skeleton', 'Balloon', 'Bomb_Tower', 'Tombstone', 'Barbarians', 'Rage', 'Rocket', 'Cannon', 'Barbarian_Hut', 'X-Bow', 'P.E.K.K.A.', 'Hog_Rider', 'Minion_Horde', 'Lava_Hound', 'Freeze', 'Tesla', 'Inferno_Tower', 'Fire_Spirits', 'Wizard', 'Ice_Wizard', 'Zap', 'Mirror', 'Poison', 'Furnace', 'Golem', 'Sparky', 'Miner', 'Mortar', 'Elixir_Collector', 'Royal_Giant', 'Three_Musketeers', 'Dark_Prince', 'Guards', 'Princess'
        ];
        //   this._heroService.getHeroes()
        //     .then(heroes => this.heroes = heroes.slice(1, 5));
    };
    TroopListComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/troop-list.component.html',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object])
    ], TroopListComponent);
    return TroopListComponent;
    var _a;
}());
exports.TroopListComponent = TroopListComponent;
//# sourceMappingURL=troop-list.component.js.map