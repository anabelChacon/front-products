import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { DialogProductComponent } from './components/dialog-product/dialog-product.component';
import { Product } from './interfaces/product-interface';
import { ProductsService } from './services/products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: any;
  title = 'Holaa';
  loading: boolean = true;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts(): void {
    this.productsService
      .getProducts()
      .pipe(
        finalize(() => {
          console.error('finalize');
          this.loading = false;
        })
      )
      .subscribe((response: Product[]) => {
        this.products = response;
        console.warn(this.products);
      });
  }

  addNewProduct() {
    console.log('añadir producto nuevo!');
    const actionNew = { productItem: {}, edit: false, position: null };
    this.manageActionProduct(actionNew);
  }

  manageActionProduct(event: any): void {
    console.log('productItem => ', event.productItem);
    const dialogRef = this.dialog.open(DialogProductComponent, {
      panelClass: !event.edit
        ? 'custom-dialog-container'
        : 'custom-dialog-container-edit',
      data: { productItem: event.productItem, edit: event.edit },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Resultado => ', result);
      if (result) {
        if (event.position) {
          this.products[event.position] = result;
          return;
        }
        this.products.push(result);
      }
    });
  }
}
