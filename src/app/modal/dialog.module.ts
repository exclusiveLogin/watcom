import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import {DialogService} from './dialog.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DialogComponent,
    ],
    providers: [ DialogService ],
    declarations: [DialogComponent]
})
export class DialogModule {
}
