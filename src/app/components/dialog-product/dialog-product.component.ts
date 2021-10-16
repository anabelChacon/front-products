import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss'],
})
export class DialogProductComponent implements OnInit {
  product: any;
  edit: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogProductComponent>
  ) {}

  ngOnInit(): void {
    this.product = this.data.productItem;
    this.edit = this.data.edit;
  }

  handleImageError(event: any): void {
    event.target.src = 'assets/imgs/error-image-generic.png';
  }

  onManageAction(event?: any) {
    if (event) {
      this.product = event.product;
      this.dialogRef.close(this.product);
    }
  }
}
