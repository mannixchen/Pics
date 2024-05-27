import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ath-demo',
  template: ` <div
    ><a [href]="url" target="_blank">{{ itemName }}</a
    ><ath-time-display [createdAt]="createdAt" [componentType]="'subtitle'"></ath-time-display
  ></div>`
})
export class AthDemoComponent implements OnInit {
  @Input() itemName: string;
  @Input() createdAt: number | Date;
  @Input() url: string;
  constructor() {}

  ngOnInit() {}
}
