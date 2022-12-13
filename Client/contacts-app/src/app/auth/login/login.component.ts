import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	message: string = '';
	constructor(private loginService:AuthService, private router:Router) { }

	checkLogin(form: NgForm){
		this.loginService.login(form.value).subscribe({
			next: (res:any) => {
				if(res.success){
					localStorage.setItem('token', res.data);
					this.router.navigate(["user"]);
				}
			},
			error: (err:any) => {
				this.message = err.error.message;
			}
		})
	}
}
