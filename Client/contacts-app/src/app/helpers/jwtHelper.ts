import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root',
})
class JwtHelper{
    constructor(){}

    public getToken():string | null | undefined{
        return localStorage.getItem('token');
    }

    public isTokenExpired():boolean{
        const helper = new JwtHelperService();
        const token:any = localStorage.getItem('token');
        const isExpired = helper.isTokenExpired(token);
        return isExpired;
    }

    public decodeToken():any{
        const helper = new JwtHelperService();
        const token:any = localStorage.getItem('token');
        const decodedToken = helper.decodeToken(token);
        return decodedToken;
    }
}

export default JwtHelper;