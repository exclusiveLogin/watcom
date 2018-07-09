import {Injectable} from '@angular/core';
import {DialogComponent} from './dialog.component';

export interface IDialogParams {
    title?: {
        titleMinor?: string,
        titleMajor?: string,
    };
    icon?: string;
    textBody?: string;
    cancelBtnText?: string;
    submitBtnText?: string;
    preValue?: string;
    preName?: string;
    newName?: string;
    newValue?: string;
}

@Injectable()
export class DialogService {
    private dialogComponent: DialogComponent;
    constructor() {
    }

    public openDialog(params?: IDialogParams): Promise<IDialogParams> {
        if ( this.dialogComponent ) {
            if ( params ) {
                (params.title && !params.title.titleMajor) ? params.title.titleMajor = '' : null;
                (params.title && !params.title.titleMinor) ? params.title.titleMinor = '' : null;
                (!params.icon) ? params.icon = 'icon icon_notification' : null;
                (!params.textBody) ? params.textBody = '' : null;
                this.dialogComponent.params = params;
            }
            this.dialogComponent.show = true;
            return this.dialogComponent.action();
        } else return Promise.reject(null);
    }

    public connect(dc: DialogComponent): void {
        this.dialogComponent = dc;
    }
}
