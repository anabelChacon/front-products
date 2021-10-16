import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions } from 'src/app/shared/enums/action-product.enum';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent implements OnInit {
  edit: boolean = false;
  newProduct: any = {};
  actions = {
    create: Actions.CREATE,
    update: Actions.UPDATE,
    delete: Actions.DELETE,
  };

  form = new FormGroup({
    date: new FormControl('', Validators.required),
    copyright: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    hdurl: new FormControl(''),
    url: new FormControl(''),
    media_type: new FormControl(''),
    apod_site: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProductRegisterComponent>
  ) {}

  ngOnInit(): void {
    this.newProduct = { ...this.data.product };
    this.edit = this.data.edit;
  }

  manageAction(action: Actions) {
    this.dialogRef.close({ action, product: this.newProduct });
  }
}
