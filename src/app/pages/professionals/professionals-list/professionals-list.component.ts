import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professional } from 'src/app/models/professional';
import { ProfessionalsService } from 'src/app/services/professionals/professionals.service';

@Component({
  selector: 'app-professionals-list',
  templateUrl: './professionals-list.component.html',
  styleUrls: ['./professionals-list.component.scss']
})
export class ProfessionalsListComponent implements OnInit {

  professionals$: Observable<Professional[]>;
  displayedColumns = ['name', 'category', 'description', 'button'];

  constructor(private professionalsService: ProfessionalsService) {
    this.professionals$ = this.professionalsService.professionalsList();
    console.log(this.professionals$);
  }
  ngOnInit(): void {

  }

}
