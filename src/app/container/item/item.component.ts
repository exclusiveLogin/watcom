import {Component, Input, OnInit} from '@angular/core';
import {IItem, RepositoryService} from '../../repository/repository.service';
import {DialogService, IDialogParams} from '../../modal/dialog.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() itemParams: IItem;

    constructor(
        private dialog: DialogService,
        private repo: RepositoryService
    ) {
    }

    ngOnInit() {
    }
    public setParams(item: IItem): void {
        const _dp: IDialogParams = {
            title: {
                titleMinor: `Изменение параметров`,
                titleMajor: `для ${item.name}`
            },
            preValue: item.value,
            preName: item.humanText,
        };
        this.dialog.openDialog(_dp).then((result: IDialogParams) => {
            if (result.newValue) {
                //delta detected
                this.repo.setValue(this.itemParams.id, result.newValue);
            }
            if (result.newName) {
                //delta detected
                this.repo.setHumanText(this.itemParams.id, result.newName);
            }
        }).catch(err => null);
    }
}
