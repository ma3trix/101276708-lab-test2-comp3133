// missionfilter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterYear = new EventEmitter<string>();

  onFilterYear(year: string): void {
    this.filterYear.emit(year);
  }
}
