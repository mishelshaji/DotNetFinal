import { StaticDetails } from './../../helpers/staticDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {

	constructor(private http: HttpClient) { }

	getContacts() {
		return this.http.get(`${StaticDetails.API_URL}/contacts`);
	}

	getContact(id: string) {
		return this.http.get(`${StaticDetails.API_URL}/contacts/${id}`);
	}

	addContact(contact: any) {
		return this.http.post(`${StaticDetails.API_URL}/contacts`, contact);
	}
}
