import { Component } from '@angular/core';
import {DialogService} from './modal/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
      private dialog: DialogService,
  ) {

  }

  public modalTest(): void {
        this.dialog.openDialog();
  }
}
