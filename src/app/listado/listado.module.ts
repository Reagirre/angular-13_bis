import { NgModule } from '@angular/core';

import { ListadoComponent } from './pages/listado.component';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../component/component.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
  ],
  exports: [
    ListadoComponent,
    ComponentsModule
  ],
  declarations: [
    ListadoComponent,
    SearchBoxComponent
  ],
})
export class ListadoModule { }
