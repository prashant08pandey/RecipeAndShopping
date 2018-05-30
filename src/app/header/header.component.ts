import { Component,EventEmitter, Output } from '@angular/core';
@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})
export class HeaderComponent{
   @Output() navoptionSelected = new EventEmitter<string>();
	onClickNav(navoption: string){
		this.navoptionSelected.emit(navoption);
	}

}