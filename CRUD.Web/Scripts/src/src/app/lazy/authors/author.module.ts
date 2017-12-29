import { NgModule } from '@angular/core';
import { AuthorsComponent } from '../../authors-component/authorsComponent';
import { AuthorsRouting } from './author.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ AuthorsRouting, CommonModule ],
    declarations: [ AuthorsComponent ],
})

export class LazyModule {}