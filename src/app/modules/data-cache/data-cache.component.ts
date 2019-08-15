import { DataCacheService, Image } from './../../data-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cache',
  templateUrl: './data-cache.component.html',
  styleUrls: ['./data-cache.component.sass']
})
export class DataCacheComponent implements OnInit {

  images: string[];
  loadTime: number;

  constructor(private dataCacheService: DataCacheService) {
    this.images = [];
  }

  ngOnInit() {
    this.fetchData();
  }

  borrarCache() {
    this.dataCacheService.clearCache();
  }

  borrarCacheYRecargar() {
    this.borrarCache();
    this.fetchData();
  }

  recargar() {
    this.fetchData();
  }

  fetchData() {
    const startTime = window.performance.now();
    this.dataCacheService.getImages().subscribe((images: Image[]) => {
      const endTime = window.performance.now();
      this.loadTime = endTime - startTime;
      this.images = [];
      images.forEach((image) => {
        // const imageBlob = this.dataURItoBlob(image.data64);
        // const imageFile = new File([imageBlob], image.name, { type: 'image/jpeg' });
        this.images.push('data:image/jpeg;base64,' + image.data64);
      });
    });
  }

//   private dataURItoBlob(dataURI) {
//     const byteString = window.atob(dataURI);
//     const arrayBuffer = new ArrayBuffer(byteString.length);
//     const int8Array = new Uint8Array(arrayBuffer);
//     for (let i = 0; i < byteString.length; i++) {
//       int8Array[i] = byteString.charCodeAt(i);
//     }
//     const blob = new Blob([int8Array], { type: 'image/jpeg' });
//     return blob;
//  }

}
