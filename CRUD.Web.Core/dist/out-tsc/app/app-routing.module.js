"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../app/home-component/home.component");
exports.PanelbarRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Authors', loadChildren: './lazy/authors.module#AuthorsModule' },
    { path: 'Articles', loadChildren: './lazy/articles.module#ArticlesModule' },
    { path: 'Books', loadChildren: './lazy/books.module#BooksModule' },
    { path: 'Journals', loadChildren: './lazy/journals.module#JournalsModule' },
    { path: 'Publishers', loadChildren: './lazy/publishers.module#PublishersModule' }
];
exports.appRoutingProviders = [];
exports.panelbarRouting = router_1.RouterModule.forRoot(exports.PanelbarRoutes);
//# sourceMappingURL=app-routing.module.js.map