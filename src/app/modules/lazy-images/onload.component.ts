import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'default-image',
    styles: [`
        img {
            width: 100%;
            max-width: 500px;
        }
        img.hidden {
            visibility: hidden;
        }

        .contenedor {
            display:flex;
            flex-direction: column;
            align-items: center;
            height: 500px;        
        }

    `],
    template: `
        <div #ref *ngIf="isLoading">Image is loading...</div>
        <div *ngIf="!isLoading">Image is loaded</div>
        <div class="contenedor">
            <div [ngClass]="{'hidden': isLoading}">
                <img
                    [defaultImage]="defaultImage"
                    [errorImage]="errorImage"
                    [lazyLoad]="image"
                    (onLoad)="onLoadImage($event)">
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnLoadComponent {
    @ViewChild('ref') ref : ElementRef;
    isLoading = true;
    errorImage = 'https://i.imgur.com/XkU4Ajf.png';
    defaultImage = 'https://img.devrant.com/devrant/rant/r_647810_4FeCH.gif';
    image = 'https://rxjs-dev.firebaseapp.com/generated/images/marketing/home/Rx_Logo-512-512.png';

    constructor(private cd: ChangeDetectorRef) {}

    onLoadImage(success) {
        if (success) {
            this.isLoading = false;
            this.cd.detectChanges();
        } else {
            this.ref.nativeElement.innerHTML = " Error al cargar la imagen...    "
            alert('Fallo al cargar la imagen..');
        }
    }
}
