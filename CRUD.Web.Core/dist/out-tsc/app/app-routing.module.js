"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../app/home-component/home.component");
var articlesComponent_1 = require("../app/articles-component/articlesComponent");
var booksComponent_1 = require("./books-component/booksComponent");
var journalsComponent_1 = require("./journals-component/journalsComponent");
var publishersComponent_1 = require("./publishers-component/publishersComponent");
exports.PanelbarRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Authors', loadChildren: './author.module#AuthorsModule' },
    //{ path: 'Authors', component: AuthorsComponent }, 
    { path: 'Articles', component: articlesComponent_1.ArticlesComponent },
    { path: 'Books', component: booksComponent_1.BooksComponent },
    { path: 'Journals', component: journalsComponent_1.JournalsComponent },
    { path: 'Publishers', component: publishersComponent_1.PublishersComponent }
];
exports.appRoutingProviders = [];
exports.panelbarRouting = router_1.RouterModule.forRoot(exports.PanelbarRoutes);
//# sourceMappingURL=app-routing.module.js.map