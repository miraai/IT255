import { Component, Directive } from '@angular/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from '@angular/common'
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({ 
  selector: 'AllRoomsPage', 
  templateUrl: 'app/allrooms/allrooms.html',
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class AllRoomsComponent { 
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  
   	rooms: Object[];
	constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append('token', localStorage.getItem('token'));
	http.get('http://localhost/php/getrooms.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(rooms => {
			this.rooms = rooms.rooms; 
			setInterval(function(){
				$('table').DataTable();
			},200);
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
		);
  }

    public removeItem(item: any) {
      this.rooms = _.filter(this.rooms, (elem)=>elem!=item);
      console.log("Remove: ", item.email);
    }

    public editItem(item: any){
    	this.router.parent.navigate(['./Update',{id: item.id}])
    }
}
