import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'fade-in-image',
    styles: [`
        img {
            width: 100%;
            max-width: 500px;
            transition: opacity 1s;
            opacity: 0;
        }

        .contenedor {
            display:flex;
            flex-direction: row;
            justify-content: center;  
        }

        img.ng-lazyloaded {
            opacity: 1;
        }
    `],
    template: `
    <div class="contenedor">
        <img
          *ngFor="let image of images"
          [defaultImage]="defaultImage"
          [errorImage]="errorImage"
          [lazyLoad]="image">
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FadeInImageComponent {
    errorImage = 'https://i.imgur.com/XkU4Ajf.png';
    defaultImage = 'https://img.devrant.com/devrant/rant/r_647810_4FeCH.gif';

    images = [
        'https://rxjs-dev.firebaseapp.com/generated/images/marketing/home/Rx_Logo-512-512.png',
        'https://angular.io/assets/images/logos/angular/angular.svg',
        'https://nodejs.org/static/images/logo.svg'
    ];
}
