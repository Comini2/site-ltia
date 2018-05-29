import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  selectedProject : any;
  infos = ["ENVOLVIDOS", "DESCRIÇÃO", "TECNOLOGIAS", "STATUS"];

  constructor(private route : ActivatedRoute, private jsonService : JsonService, private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.jsonService.getJSONObject('assets/json/projects.json', id, (res) => {
      this.selectedProject = res;
    });
  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }

 isArray (obj){
   return Array.isArray(obj);
 }

}
