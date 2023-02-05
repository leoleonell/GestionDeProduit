import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: any;
  successmsg: any;
  getparamid: any;


  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('id');
    this.service.getSingleData(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.userForm.patchValue({
        name: res.data[0].name,
        description: res.data[0].description,
        price: res.data[0].price,
        quantity: res.data[0].quantity


      });
    });
  }


  userForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required),
    'price': new FormControl('', Validators.required),
    'quantity': new FormControl('', Validators.required)


  });

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      })
    }
    else {
      this.errormsg = 'all field is required!';
    }
  }

  userUpdate() {
    console.log(this.userForm.value, 'Updateform');
    if (this.userForm.valid) {
      this.service.updateData(this.userForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdate');
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'all filied is required !'
    }
  }

}
