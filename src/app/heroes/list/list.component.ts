import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public deleteHero: string | undefined;

  removeLastHero() {
    this.deleteHero = this.heroNames.pop();
  }
}
