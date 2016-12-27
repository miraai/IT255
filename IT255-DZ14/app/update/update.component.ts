import {Router, ROUTER_PROVIDERS, RouteParams } from '@angular/router-deprecated';
import { Component, Directive } from '@angular/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from '@angular/common'
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import 'rxjs/Rx';
import {FormComponent2} from '../form2/form2.component';


@Component({
  templateUrl: 'app/update/update.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})
export class UpdateComponent {

  forma: ControlGroup;
  postResponse: String;
  itemId: Number;

  rooms: Object[];
  constructor(builder: FormBuilder, private http: Http, private router: Router, params: RouteParams) {
    this.itemId = +params.get('id');
    this.forma = builder.group({
      roomName: ["", Validators.none],
      hasTV: ["", Validators.none],
      beds: ["", Validators.none],
    });
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var data = 'id=' + this.itemId;
    this.http.post('http://localhost/php/getroom.php', data, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        (<Control>this.forma.controls['roomName']).updateValue(data.roomname);
        (<Control>this.forma.controls['hasTV']).updateValue(data.tv);
        (<Control>this.forma.controls['beds']).updateValue(data.beds);
      },
      err => console.log(JSON.stringify(err)))
  }

  updateRoom():void{
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var vals = this.forma.value;
    var data = 'id=' + this.itemId + "&hasTV="+vals.hasTV + "&beds=" + vals.beds + "&roomName="+vals.roomName;
    this.http.post('http://localhost/php/updateroom.php', data, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        alert("Testtestest")
      },
      err => console.log(JSON.stringify(err)))
  }

}
