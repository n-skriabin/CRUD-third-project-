import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    styleUrls: ['./styles.css'],
    templateUrl: `./app.component.html`
})

export class AppComponent {
     private router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}
