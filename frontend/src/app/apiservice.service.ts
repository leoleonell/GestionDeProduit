import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }


 // connect frontend to backend

 apiUrl = environment.api_url;

 //get all data 
  getAllData():Observable<any>
  {
        return this._http.get(`${this.apiUrl}/products`);
  }
   //create data

  createData(data:any):Observable<any>
  {
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl}/product`,data);
  }
//delete data 

  deleteData(id:any):Observable<any>
  {
    // let ids = id;
    return this._http.delete(`${this.apiUrl}/products/${id}`);
  }

//Update data
updateData(data:any,id:any):Observable<any>
{
  // let ids = id;
 return this._http.put(`${this.apiUrl}/${id}`,data);
}
  
//getSingleData
getSingleData(id:any):Observable<any>{
  let ids = id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

}



