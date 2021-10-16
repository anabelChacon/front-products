import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { Product } from './interfaces/product-interface';
import { ProductsService } from './services/products.service';
import { Actions } from './shared/enums/action-product.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: any;
  emptyProducts: boolean = false;
  loading: boolean = true;
  newProduct = {
    action: Actions.CREATE,
    product: { media_type: 'image' },
    position: null,
    edit: false,
  };

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getListProducts();
  }

  refreshListProducts() {
    this.loading = true;
    this.products = null;
    this.getListProducts();
  }

  getListProducts(): void {
    this.productsService
      .getProducts()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (response: Product[]) => {
          this.products = response;
          this.emptyProducts = false;
        },
        (error) => {
          this.products = null;
          this.loading = false;
          this.emptyProducts = true;
        }
      );
  }

  formProduct(config: any) {
    const dialogRef = this.dialog.open(ProductRegisterComponent, {
      panelClass: 'custom-dialog-container-edit',
      data: config,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.manageActionProduct(config, result);
      }
    });
  }

  manageActionProduct(config: any, result: any): void {
    switch (result.action) {
      case Actions.CREATE:
        this.products.unshift(result.product);
        break;
      case Actions.UPDATE:
        this.products[config.position] = result.product;
        break;
      case Actions.DELETE:
        this.products.splice(config.position, 1);
        break;
    }
  }
}
