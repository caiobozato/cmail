import { Component } from '@angular/core';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent {
    private _isMenuOpen: boolean = false;

    get isMenuOpen(): boolean {
        return this._isMenuOpen;
    }

    toggleMenu(){
        this._isMenuOpen = !this._isMenuOpen;
    }
}