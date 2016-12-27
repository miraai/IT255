import {Component} from '@angular/core';
import {RouteConfig,Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { MainPageComponent } from './mainpage/mainpage.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent2 } from './form2/form2.component';
import { LoginComponent}  from './login/login.component';
import { AllRoomsComponent}  from './allrooms/allrooms.component';
import { UpdateComponent}  from './update/update.component';
import {Pipe} from '@angular/core';

@Component({
    selector: 'moja-aplikacija',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/',    name: 'MainPage',   component: MainPageComponent, useAsDefault: true},
  {path:'/aboutus', name:'AboutUs', component: AboutUsComponent},
  {path:'/register', name:'RegisterPage', component: RegisterComponent},
  {path:'/login', name:'LoginPage', component: LoginComponent},
  {path:'/form2', name:'FormPage2', component: FormComponent2},
  {path:'/allrooms', name:'AllRoomsPage', component: AllRoomsComponent},
  {path:'/update/:id', name: 'Update', component: UpdateComponent}
])

export class AppComponent { 
	router: Router;
	isAuth: String;
	
	constructor(router: Router) {
		this.router = router;
		  router.subscribe((val) => {
		  
		  if(localStorage.getItem('token') !== null){
				this.isAuth = "yes";
		  }else{
			    this.isAuth = "no";
		  }
		  });
	}
	
 onLogout(): void {
	localStorage.removeItem("token");
	this.isAuth = "no";
	 this.router.navigate(['./MainPage']);
 }
}
