import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    styleUrls: ['/styles.css'],
    templateUrl: './home.component.html',
})

export class HomeComponent {
    constructor(private titleService: Title){
    }

    public ngOnInit(): void {
        this.titleService.setTitle('Home Page');
    }
}
