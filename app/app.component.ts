import { Component } from '@angular/core';

@Component({
moduleId: module.id,
selector: 'my-app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css'] 

})

export class AppComponent { 


number1:number = 2;

number2:number = 3;

calculation(): number {

	return this.number1 + this.number2;
}


array=[];

firstname="";

surname="";

username="";

price=0;

bid=0;

bidder="";

items = [
	{
		"title":"Table from 18th century",
		"description":"From 1877, bought in xxx",
		"picture":"images/table.jpg",
		"price":0,
		"bidder": "",
		"bid": 0
	},
	{
		"title":"Sofa from 18th century",
		"description":"History xcccc",
		"picture":"images/sofa.jpeg",
		"price":0,
		"bidder": "",
		"bid": 0
	},

	{
		"title":"Drawer from 18th century",
		"description":"History xxxx",
		"picture":"images/drawer.jpeg",
		"price":0,
		"bidder": "",
		"bid": 0
	},

];



addNewuser() {

	if (this.firstname == "" && this.surname == "" && this.username == "") {
			alert("empty"); 
	 }
	 else {
	 	this.array.push({"firstname":this.firstname, "surname":this.surname, "username":this.username});

	 }

}

newBid(index){




	// 1st condition: username
	for(var n = 0; n < this.array.length; n++) {

				
		if(this.array[n].username == this.items[index].bidder) {


			// 2nd condition: price
			if(this.items[index].bid > this.items[index].price) {
				
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

}






}
