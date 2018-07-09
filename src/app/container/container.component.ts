import {Component, Input, OnInit} from '@angular/core';
import {IItem, RepositoryService} from '../repository/repository.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    @Input() widgetIds: number[] = [];

    public items: IItem[] = [];
    constructor(
        private repo: RepositoryService,
    ) {
    }

    ngOnInit() {
        this.items = this.repo.getItems(this.widgetIds)
    }

}
