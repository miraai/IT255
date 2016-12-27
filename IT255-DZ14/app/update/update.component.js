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
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var UpdateComponent = (function () {
    function UpdateComponent(builder, http, router, params) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.itemId = +params.get('id');
        this.forma = builder.group({
            roomName: ["", common_1.Validators.none],
            hasTV: ["", common_1.Validators.none],
            beds: ["", common_1.Validators.none],
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data = 'id=' + this.itemId;
        this.http.post('http://localhost/php/getroom.php', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.forma.controls['roomName'].updateValue(data.roomname);
            _this.forma.controls['hasTV'].updateValue(data.tv);
            _this.forma.controls['beds'].updateValue(data.beds);
        }, function (err) { return console.log(JSON.stringify(err)); });
    }
    UpdateComponent.prototype.updateRoom = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var vals = this.forma.value;
        var data = 'id=' + this.itemId + "&hasTV=" + vals.hasTV + "&beds=" + vals.beds + "&roomName=" + vals.roomName;
        this.http.post('http://localhost/php/updateroom.php', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            alert("Uspesno azurirana soba");
        }, function (err) { return console.log(JSON.stringify(err)); });
    };
    UpdateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/update/update.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map