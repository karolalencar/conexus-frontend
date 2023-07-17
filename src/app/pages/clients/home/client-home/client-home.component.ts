import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Service } from 'src/app/models/service';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {

  services$: Observable<Client[]>;
  displayedColumnsService = ['address', 'button'];

  constructor(private clientService: ClientsService) {
    this.services$ = this.clientService.clientServices();
  }

  ngOnInit(): void {

  }

}
