import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DialogService, IDialogParams} from "./dialog.service";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/take";

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy, OnChanges {
    @Input() params: IDialogParams;
    @Input() show: boolean;
    public nameStr: string = '---';
    public valueStr: string = '---';
    private currentAction: Subject<any> = new Subject();

    constructor(
        private dialogService: DialogService,
    ) {
        this.dialogService.connect(this);
    }

    ngOnInit() {

    }

    public action(): Promise<IDialogParams> {
        console.log("dialog action", this.params);
        // init dialog
        if(this.params){
            this.params.preName ? this.nameStr = this.params.preName : null;
            this.params.preValue ? this.valueStr = this.params.preValue : null;
        }
        // submit dialog
        return new Promise<IDialogParams>((resolve, reject) => {
            this.currentAction.take(1).subscribe((result) => {
                if( this.valueStr !== this.params.preValue ) this.params.newValue = this.valueStr;
                if( this.nameStr !== this.params.preName) this.params.newName = this.nameStr;
                ( result ) ? resolve( this.params ) : reject();
            });
        })
    }
    public submitDialog(): void {
        this.currentAction ? this.currentAction.next(true) : null;
        this.show = false;
    }

    public cancelDialog(): void {
        this.currentAction ? this.currentAction.next(null) : null;
        this.show = false;
    }

    ngOnChanges(change: SimpleChanges) {

    }
    ngOnDestroy() {
        if(this.currentAction) this.currentAction.unsubscribe();
    }

}
