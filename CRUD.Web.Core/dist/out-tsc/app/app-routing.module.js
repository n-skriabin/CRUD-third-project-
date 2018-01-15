"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
exports.PanelbarRoutes = [
    { path: '', loadChildren: './home-component/home.module#HomeModule' },
    { path: 'Authors', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Articles', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Books', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Journals', loadChildren: './library/library.module#LibraryModule' },
    { path: 'Publishers', loadChildren: './library/library.module#LibraryModule' }
];
exports.appRoutingProviders = [];
exports.panelbarRouting = router_1.RouterModule.forRoot(exports.PanelbarRoutes);
//# sourceMappingURL=app-routing.module.js.map