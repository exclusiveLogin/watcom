import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface IItem {
    id: number;
    name: string;
    humanText: string;
    value: string;
}

const ITEM_REPO: IItem[] = [
    {id: 0, name: 'temperature', humanText: 'Температура', value: '12'},
    {id: 1, name: 'humidity', humanText: 'Влажность', value: '0'},
    {id: 2, name: 'visibility', humanText: 'Видимость', value: '0'},
    {id: 3, name: 'wind_dir', humanText: 'Направление ветра', value: '0'},
    {id: 4, name: 'wind_str', humanText: 'Сила ветра', value: '0'},
    {id: 5, name: 'cape', humanText: 'CAPE', value: '0'},
];

@Injectable()
export class RepositoryService {

    private items: BehaviorSubject<IItem[]> = new BehaviorSubject<IItem[]>([]);

    constructor() {
    }

    private refresh(): void {
        this.items.next(ITEM_REPO);
    }
    public setHumanText(id: number, humantext: string): void {
        this.getItem(id) ? this.getItem(id).humanText = humantext : null;
        this.refresh();
    }

    public getHumanText(id: number): string {
        return (this.getItem(id)) ? this.getItem(id).humanText : 'Элемент не найден';
    }

    public setValue(id: number, value: string): void {
        this.getItem(id) ? this.getItem(id).value = value : null;
        this.refresh();
    }

    public getValue(id: number): string {
        return (this.getItem(id)) ? this.getItem(id).value : 'Элемент не найден';
    }

    public getItems(ids: number[]): IItem[] {
        return ids.map(id => ITEM_REPO.find(item => item.id === id));
    }

    private getItem(id: number): IItem {
        return (ITEM_REPO[id]) ? ITEM_REPO[id] : null;
    }

    public getItems$(ids: number[]): BehaviorSubject<IItem[]> {
        this.items.next(this.getItems(ids));
        return this.items;
    }
}
