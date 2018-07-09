import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {DialogModule} from './modal/dialog.module';
import {RepositoryService} from './repository/repository.service';
import {ItemComponent} from './container/item/item.component';


@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        ItemComponent
    ],
    imports: [
        BrowserModule,
        DialogModule,
    ],
    providers: [
        RepositoryService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
