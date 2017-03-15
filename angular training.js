"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // FIRST EXERCICE
        this.var_city = "london"; // Static var
        this.var_user = ""; // Dynamic var -> takes its value from input
        this.var_user2 = "";
        this.var_user3 = "";
        this.var_headcount = 5;
        this.var_brexit = true;
        // EXERCICE 3
        this.cities = ["London", "Brighton", "Birmingham", "Manchester", "Glasgow", "Newcastle"];
        // EXERCICE 3
        this.step = 1;
    }
    AppComponent.prototype.cityNameCheck = function () {
        if (this.var_user == this.var_city) {
            alert("true");
        }
        else {
            alert("false");
        }
    };
    AppComponent.prototype.cityNameCheck2 = function (arg_city, arg_city2) {
        if (this.var_user2 == arg_city) {
            alert("true");
        }
        else if (this.var_user2 == arg_city2) {
            alert("true");
        }
        else {
            alert("false");
        }
    };
    AppComponent.prototype.cityNameCheck3 = function () {
        var arg_city = "bristol";
        if (this.var_user3 == arg_city) {
            alert("true");
        }
        else {
            alert("false");
        }
    };
    AppComponent.prototype.calculator = function () {
        this.sum = this.var_Number1 + this.var_Number2;
        this.calculation = true;
    };
    AppComponent.prototype.favCity = function () {
        var found;
        for (var n = 0; n < this.cities.length; n++) {
            if (this.city_input == this.cities[n]) {
                found = true;
            }
            if (n == this.cities.length - 1) {
                if (found == true) {
                    this.result = true;
                }
                else {
                    this.result = false;
                }
            }
        }
    };
    AppComponent.prototype.submit = function () {
        this.step++;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=angular training.js.map