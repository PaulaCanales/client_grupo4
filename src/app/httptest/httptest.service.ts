import {Injectable}  from '@angular/core';
import {Http} from 	'@angular/http';

@Injectable()
export class HTTPTestService{
	constructor (private _http: Http){}
	
	getCurrentTime(){
		return this._http.get('http://146.83.216.216:3006/antenas/stats')
		.map(res =>res.json());
	}
	
}

