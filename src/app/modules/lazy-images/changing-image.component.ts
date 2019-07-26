import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'fade-in-image',
    styles: [`
        img {
            width: 100%;
            transition: opacity 1s;
            opacity: 0;
        }

        button {
            margin-left: 15em;
        }

        .contenedor{
            width: 400px;
            margin: auto auto;
        }

        img.ng-lazyloaded {
            opacity: 1;
        }
    `],
    template: `
        <button (click)="changeImage()">Change image</button>
        <div class=" contenedor">
            <img
            [defaultImage]="defaultImage"
            [errorImage]="errorImage"
            [lazyLoad]="image">
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeImageComponent {
    errorImage = 'https://i.imgur.com/XkU4Ajf.png';
    defaultImage = 'https://img.devrant.com/devrant/rant/r_647810_4FeCH.gif';
    image = 'https://angular.io/generated/images/marketing/home/loved-by-millions.svg';

    changeImage() {
        this.image = 'https://angular.io/assets/images/logos/angular/angular.svg';
    }
}
