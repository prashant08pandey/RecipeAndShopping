import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	navigatedRoute:string = 'recipe';
 	onNavigate(route:string){
 		this.navigatedRoute = route;
 	} 
}
