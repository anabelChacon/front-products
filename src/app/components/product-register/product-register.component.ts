import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent implements OnInit {
  @Input() product: any;
  @Output() action = new EventEmitter();

  create: boolean = false;
  newProduct: any = {};

  form = new FormGroup({
    date: new FormControl('', Validators.required),
    copyright: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    hdurl: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    this.newProduct = { ...this.product };
  }

  manageAction() {
    console.log(this.form);
    this.action.emit({ product: this.newProduct });
  }
}
