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
var mainpage_component_1 = require('./mainpage/mainpage.component');
var aboutus_component_1 = require('./aboutus/aboutus.component');
var register_component_1 = require('./register/register.component');
var form2_component_1 = require('./form2/form2.component');
var login_component_1 = require('./login/login.component');
var allrooms_component_1 = require('./allrooms/allrooms.component');
var update_component_1 = require('./update/update.component');
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        router.subscribe(function (val) {
            if (localStorage.getItem('token') !== null) {
                _this.isAuth = "yes";
            }
            else {
                _this.isAuth = "no";
            }
        });
    }
    AppComponent.prototype.onLogout = function () {
        localStorage.removeItem("token");
        this.isAuth = "no";
        this.router.navigate(['./MainPage']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'moja-aplikacija',
            templateUrl: 'app/router.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
            { path: '/aboutus', name: 'AboutUs', component: aboutus_component_1.AboutUsComponent },
            { path: '/register', name: 'RegisterPage', component: register_component_1.RegisterComponent },
            { path: '/login', name: 'LoginPage', component: login_component_1.LoginComponent },
            { path: '/form2', name: 'FormPage2', component: form2_component_1.FormComponent2 },
            { path: '/allrooms', name: 'AllRoomsPage', component: allrooms_component_1.AllRoomsComponent },
            { path: '/update/:id', name: 'Update', component: update_component_1.UpdateComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map