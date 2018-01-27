import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RestapiService {
   baseUrl = "http://localhost:3000/admin/";
  constructor(private http:Http) { }


  addRecipe(data){
    console.log(this.baseUrl);
    // var headers = new Headers();
    const headers = new Headers({});
    let options = new RequestOptions({ headers });
    return this.http.post(this.baseUrl+'addRecipe',data,options).map(res=>res.json());
  }
}
