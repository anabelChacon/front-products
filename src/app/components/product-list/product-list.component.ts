import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product-interface';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] = [];
  @Output() action = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDetailProduct(
    productItem: Product,
    position: number,
    edit?: boolean
  ): void {
    console.log('productItem => ', productItem);
    this.action.emit({ productItem, position, edit });
    /* const dialogRef = this.dialog.open(DialogProductComponent, {
      panelClass: !edit
        ? 'custom-dialog-container'
        : 'custom-dialog-container-edit',
      data: { productItem, edit },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.productList[position] = result;
    }); */
  }
}
