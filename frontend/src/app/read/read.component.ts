import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service: ApiserviceService,
    private http: HttpClient) { }
  readData: any;
  successmgs: any;
  ngOnInit(): void {
    
    this.loadProduits();
  }

  loadProduits() {
    this.service.getAllData().subscribe((res) => {
      // console.log(res, "res==>");
      this.readData = res.products;
    });
  }

  // getProduits(): Observable<any[]> {
  //   let url = `${environment.api_url}/products`
  //   return this.http.get<any[]>(url);
  // }


  deleteID(id: any) {
    // console.log(id, 'deleteid==>');
    this.service.deleteData(id).subscribe((res) => {
      console.log(res, 'deleteres===>');
      this.successmgs = res.message;

      this.loadProduits();

    });
  }


}
