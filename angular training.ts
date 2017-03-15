import { Component } from '@angular/core';

@Component({
moduleId: module.id,
selector: 'my-app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css'] 

})

export class AppComponent { 


// FIRST EXERCICE
var_city = "london" ; // Static var
var_user = ""; // Dynamic var -> takes its value from input
var_user2 = "";
var_user3 = "";
var_headcount = 5;
var_brexit=true;


cityNameCheck(){
	if (this.var_user == this.var_city) {
		alert("true");
	}
	else {
		alert("false");
	}	 
}

cityNameCheck2(arg_city,arg_city2){
	if (this.var_user2 == arg_city) {
		alert("true");
	}
	else if(this.var_user2 == arg_city2){
		alert("true");
	}	 
	else {
		alert("false");
	}
}

cityNameCheck3(){

	let arg_city = "bristol";

	if (this.var_user3 == arg_city) {
		alert("true");
	}
	else {
		alert("false");
	}	 
}


// SECOND EXERCICE


var_Number1: number;	
var_Number2: number;
sum: number;
calculation: boolean;

calculator(){
	this.sum = this.var_Number1 + this.var_Number2;

	this.calculation = true;
}

// EXERCICE 3

cities = ["London","Brighton","Birmingham","Manchester","Glasgow","Newcastle"];

city_input: string;

result: boolean;

favCity(){
	let found;

	for (var n=0 ; n < this.cities.length ; n++) {

		if (this.city_input == this.cities[n]) { 
			found = true;
		}

		if (n == this.cities.length - 1) {

			if(found == true ) {
				this.result = true;
			}
			else {
				this.result = false;
			}	
		}
	}

}

// EXERCICE 3
step: number = 1;

submit() {
	this.step++; 
}



}