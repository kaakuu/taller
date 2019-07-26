import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'bg-image',
    styles: [`
        .image {
            max-width: 500px;
            width: 100%;
            min-height: 500px;
            background-position: center;
            background-size: cover;
        }

        .contenedor {
            display:flex;
            flex-direction: column;
            align-items: center;
        }

        div.ng-lazyloaded {
            animation: fadein .5s;
        }

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
    `],
    template: `
    <div class="contenedor">
        <div class="image"
            *ngFor="let image of images"
            [defaultImage]="defaultImage"
            [lazyLoad]="image"
            [errorImage]="errorImage">
        </div>
      </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BgImageComponent {
    errorImage = 'https://i.imgur.com/XkU4Ajf.png';
    defaultImage = 'https://img.devrant.com/devrant/rant/r_647810_4FeCH.gif';

    images = [
        'https://angular.io/assets/images/logos/angular/angular.svg',
        'https://angular.io/assets/images/logos/angular/angular.svg',
        'https://angular.io/assets/images/logos/angular/angular.svg'
    ];
}
