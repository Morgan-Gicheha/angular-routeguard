import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-set",
	templateUrl: "./set.component.html",
	styleUrls: ["./set.component.css"],
})
export class SetComponent implements OnInit {
  
	userid = "1";
	ngOnInit(): void {
		localStorage.setItem("session", this.userid);
	}
}
