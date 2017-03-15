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
        this.number1 = 2;
        this.number2 = 3;
        this.array = [];
        this.firstname = "";
        this.surname = "";
        this.username = "";
        this.price = 0;
        this.bid = 0;
        this.bidder = "";
        this.items = [
            {
                "title": "Table from 18th century",
                "description": "From 1877, bought in xxx",
                "picture": "images/table.jpg",
                "price": 0,
                "bidder": "",
                "bid": 0
            },
            {
                "title": "Sofa from 18th century",
                "description": "History xcccc",
                "picture": "images/sofa.jpeg",
                "price": 0,
                "bidder": "",
                "bid": 0
            },
            {
                "title": "Drawer from 18th century",
                "description": "History xxxx",
                "picture": "images/drawer.jpeg",
                "price": 0,
                "bidder": "",
                "bid": 0
            },
        ];
    }
    AppComponent.prototype.calculation = function () {
        return this.number1 + this.number2;
    };
    AppComponent.prototype.addNewuser = function () {
        if (this.firstname == "" && this.surname == "" && this.username == "") {
            alert("empty");
        }
        else {
            this.array.push({ "firstname": this.firstname, "surname": this.surname, "username": this.username });
        }
    };
    AppComponent.prototype.newBid = function (index) {
        // 1st condition: username
        for (var n = 0; n < this.array.length; n++) {
            if (this.array[n].username == this.items[index].bidder) {
                // 2nd condition: price
                if (this.items[index].bid > this.items[index].price) {
                    // Changing the price
                    this.items[index].price = this.items[index].bid;
                    // Clear fields
                    this.items[index].bidder = "";
                    this.items[index].bid = 0;
                }
                else {
                    alert("Below asking price");
                }
            }
            else {
                alert("Username not registered");
            }
        }
        /*
        var i = 0;
    
        while(i < this.array.length) {
    
            alert(i);
    
            i++;
        }*/
        /*
        var n = 1;
    
        switch(n) {
    
            case 0:
                alert("0");
                break;
    
            case 1:
                alert("1");
                break;
    
            default:
                alert("not a case");
                break;
        }*/
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
//# sourceMappingURL=app.component.js.map