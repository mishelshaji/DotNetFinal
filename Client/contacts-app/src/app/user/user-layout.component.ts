import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
	selector: 'app-user-layout',
	templateUrl: './user-layout.component.html',
	styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent {

	constructor(private router:Router) { }

	ngOnInit() {
		// const helper = new JwtHelperService();
		// const token:any = localStorage.getItem('token');
		// const isExpired = helper.isTokenExpired(token);
		// if(isExpired){
		// 	localStorage.removeItem('token');
		// 	this.router.navigate(["auth", "login"]);
		// }
	}
}
