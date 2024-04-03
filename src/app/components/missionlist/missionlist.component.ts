// missionlist.component.ts

import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service'; // Adjust the path as needed

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: any[] = []; // Initialize with an empty array

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getAllLaunches().subscribe(
      (data) => {
        this.missions = data;
      },
      (error) => {
        console.error('Error fetching SpaceX launches:', error);
      }
    );
  }
}
