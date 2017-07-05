import {Component} from '@angular/core';
import {HTTPTestService} from './httptest.service.ts';

@Component({
  selector: 'httptest',
  template: `<h3>Botton Component</h3>
<button (click)="onTestGet()"> Ver Antenas </button><br>
<ul *ngFor="let torre of Torres">
	<li>Nombre: {{torre._id}}, total: {{torre.total}} </li> 
</ul>
<p>Output: {{getData}}</p>
<p>Output: {{Torres.total}}</p>
`,
 providers: [HTTPTestService]
})
export class HttpComponent {
 	getData:string;
 	Torres = [];
 	postData:string;
	constructor(private _httpService:HTTPTestService){}
	
	onTestGet(){
		this._httpService.getCurrentTime().subscribe(
			//data => this.getData = JSON.stringify(data),
			data => this.Torres = data,
			error => alert(error),
			() => console.log("fin")
		);
		console.log(this.Torres);
	}
}
