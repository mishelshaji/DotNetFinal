import { NgForm } from '@angular/forms';
import { ContactsService } from './../../services/contacts.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'user-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	contact = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
	}
	
	@Input() contactData: any;
	@Output() contactDataChange = new EventEmitter();

	constructor(private contactsService: ContactsService) { }

	ngOnInit() {
		this.contact = this.contactData;
	}

	saveContact(form:NgForm){
		this.contactsService.addContact(this.contact).subscribe({
			next: (data:any) => {
				this.contactDataChange.emit(data.data);
				alert(data.message)
			},
			error: (err:any) => {
				alert(err.error.message)
			}
		});
	}

}
