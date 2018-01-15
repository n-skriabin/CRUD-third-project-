import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'library-layout',
    styleUrls: ['/styles.css'],
    templateUrl: './library-layout.component.html',
})

export class LibraryComponent {
    constructor(private titleService: Title){
    }

    public ngOnInit(): void {
        this.titleService.setTitle('Home Page');
    }
}
