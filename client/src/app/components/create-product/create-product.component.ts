import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/apicrud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      category: [''],
      flavor: [''],
      price: [0],
      state: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.CreateProduct(this.productForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/list-product'))
      }, (err) => {
        console.log(err);
    });
  }

}
