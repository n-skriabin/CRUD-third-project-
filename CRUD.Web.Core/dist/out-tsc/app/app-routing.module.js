"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../app/home-component/home.component");
exports.PanelbarRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Authors', loadChildren: './tables.module#TablesModule' },
    { path: 'Articles', loadChildren: './tables.module#TablesModule' },
    { path: 'Books', loadChildren: './tables.module#TablesModule' },
    { path: 'Journals', loadChildren: './tables.module#TablesModule' },
    { path: 'Publishers', loadChildren: './tables.module#TablesModule' }
];
exports.appRoutingProviders = [];
exports.panelbarRouting = router_1.RouterModule.forRoot(exports.PanelbarRoutes);
//# sourceMappingURL=app-routing.module.js.map