import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from '../../authors-component/authorsComponent';

const routes: Routes = [
  { path: '', component: AuthorsComponent }
];

export const AuthorsRouting: ModuleWithProviders = RouterModule.forChild(routes);