import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderCircularComponent } from '../components/loader-circular/loader-circular.component';
import { LoaderLoadingComponent } from '../components/loader-loading/loader-loading.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    LoaderCircularComponent,
    LoaderLoadingComponent,
    ModalComponent
  ],
  imports: [CommonModule],
  exports: [
    LoaderCircularComponent,
    LoaderLoadingComponent,
    ModalComponent
  ]
})
export class UiModule {}
