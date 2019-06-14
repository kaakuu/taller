import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
        .menu {
            display: flex;
            width: 50%;
            justify-content: space-between;
            margin: 20px auto;
        }
        a {
          text-decoration: none;
          font-size: 16px;
          padding: 10px;
          transition: all .2s ease-out;
        }
        a.active, a:hover {
          background-color: #3498db;
          color: #fff !important;
        }
    `],
    template: `
        <div class="menu">
            <a routerLink="/lazy-images/fade-in-image" routerLinkActive="active">Fade in image</a>
            <a routerLink="/lazy-images/default-image" routerLinkActive="active">Default image</a>
            <a routerLink="/lazy-images/pixelated-image" routerLinkActive="active">Pixelated transform</a>
            <a routerLink="/lazy-images/bg-image" routerLinkActive="active">Background image</a>
            <a routerLink="/lazy-images/scroll-container" routerLinkActive="active">Scroll Container</a>
            <a routerLink="/lazy-images/on-load" routerLinkActive="active">OnLoad event</a>
            <a routerLink="/lazy-images/change-image" routerLinkActive="active">Change image</a>
            <a routerLink="/lazy-images/responsive-image" routerLinkActive="active">Responsive image</a>
        </div>
        <router-outlet></router-outlet>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}