import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [JsonService]
})
export class AboutComponent implements OnInit {

  participations : any;
  selectedParticipation : any;
  activeButton : number = 0;
  constructor(private jsonService : JsonService) { }

  ngOnInit() {
    this.jsonService.getJSON('../assets/json/teams.json', (data) => {
      this.participations = data;
      this.selectedParticipation = data[0];
    })
  }

  selectYear(index){
    this.activeButton = index;
    this.selectedParticipation = this.participations[index];
  }

}
