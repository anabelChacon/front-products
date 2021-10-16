import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lazy-load-image',
  templateUrl: './lazy-load-image.component.html',
  styleUrls: ['./lazy-load-image.component.scss'],
})
export class LazyLoadImageComponent implements OnInit {
  @Input() type: string;
  @Input() url: string;
  @Input() sizeClass: string;

  urlDefault: string = environment.url_image_default_error;

  endLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleImageError(event: any): void {
    event.target.src = this.urlDefault;
    this.endLoad = false;
  }
}
