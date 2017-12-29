import { NgModule } from '@angular/core';
import { AuthorsComponent } from '../../authors-component/authorsComponent';
import { AuthorsRouting } from './author.routing';

@NgModule({
    imports: [AuthorsRouting],
    declarations: [AuthorsComponent]
  })
  export class LazyModule {}