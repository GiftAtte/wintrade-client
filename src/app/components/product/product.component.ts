import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import Swal from 'sweetalert2';
import {
  Columns,
  API,
  APIDefinition,
  DefaultConfig,
  Config,
} from 'ngx-easy-table';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

isOpen=false
productForm!:FormGroup
products!:Product[];
columns: Columns[] = [];
isUpdate=false
actionTpl!: TemplateRef<any>;
  constructor(
    private productService:ProductService,
    private fb:FormBuilder,
    private toastr:ToastrService
    ){}
  ngOnInit(): void {
    this.getAllProducts()
    this.initilizeForm()
    this.columns = [
      { key: 'name', title: 'Product Name' },
      { key: 'desc', title: 'Description' },
      { key: 'price', title: 'Price' },
      { key: 'action', title: 'Actions', cellTemplate: this.actionTpl },
    ];
  }
  openModal(row=null){
   if(row){
    this.isUpdate=true
    this.productForm.patchValue(row)
   }else{
    this.isUpdate=false
   }
    this.isOpen=true
  }

  closeModal(){
    this.productForm.reset()
    this.isOpen=false
    this.isUpdate=false
  }
  initilizeForm(){
     this.productForm=this.fb.group({
      id:[null],
      name:['',Validators.required],
      desc:['',Validators.required],
      price:['',Validators.required],
      image:['',Validators.required]
  })
  }
 getAllProducts(){
  this.productService.getAllProduct().subscribe({
    next:(res)=>this.products=res.products
  })
 }
  createProduct(){
    if(this.productForm.valid){
      this.productService.createProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          this.toastr.success('Product created successfully','success')
          this.getAllProducts()
           this.closeModal()},
        error:(err)=>console.log(err)
      }
      )
  }
}

updateProduct(){
  if(this.productForm.valid){
    this.productService.updateProduct(this.productForm.value)
    .subscribe({
      next:(res)=>{
        this.toastr.success('Product updated successfully','success')
        this.getAllProducts()
           this.closeModal()
      },
      error:(err)=>console.log(err)
    }
    )
}
}
deleteProduct(row:Product){
  Swal.fire({
    title: 'Are you sure?',
    text: 'This process is irreversible.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, go ahead.',
    cancelButtonText: 'No, cancel',
  }).then((result) => {
    if (result.value) {
this.productService.deleteProduct(row.id).subscribe((res)=>{
  this.toastr.success('Deleted successfully','Delete')
  this.getAllProducts()
})
    
    } 
  }); 
}
}