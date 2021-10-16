import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product-interface';
import { Actions } from 'src/app/shared/enums/action-product.enum';
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

  onActionProductEmit(
    productItem: Product,
    position: number,
    edit?: boolean
  ): void {
    this.action.emit({
      action: Actions.UPDATE,
      product: productItem,
      position,
      edit,
    });
  }

  openImageProduct(productItem: Product): void {
    if (productItem.media_type === 'video') return;

    this.dialog.open(DialogProductComponent, {
      panelClass: 'custom-dialog-container',
      data: { product: productItem },
    });
  }
}
