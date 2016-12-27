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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_deprecated_1 = require('@angular/router-deprecated');
var AllRoomsComponent = (function () {
    function AllRoomsComponent(builder, http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/php/getrooms.php', { headers: headers })
            .map(function (res) { return res.json(); }).share()
            .subscribe(function (rooms) {
            _this.rooms = rooms.rooms;
            setInterval(function () {
                $('table').DataTable();
            }, 200);
        }, function (err) {
            _this.router.parent.navigate(['./MainPage']);
        });
    }
    AllRoomsComponent.prototype.removeItem = function (item) {
        this.rooms = _.filter(this.rooms, function (elem) { return elem != item; });
        console.log("Remove: ", item.email);
    };
    AllRoomsComponent.prototype.editItem = function (item) {
        this.router.parent.navigate(['./Update', { id: item.id }]);
    };
    AllRoomsComponent = __decorate([
        core_1.Component({
            selector: 'AllRoomsPage',
            templateUrl: 'app/allrooms/allrooms.html',
            directives: [common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_deprecated_1.Router])
    ], AllRoomsComponent);
    return AllRoomsComponent;
}());
exports.AllRoomsComponent = AllRoomsComponent;
//# sourceMappingURL=allrooms.component.js.map