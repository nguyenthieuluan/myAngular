import { Component, OnInit } from '@angular/core';
import {ServerService} from '../service/server.service';
import {ServerModel} from '../model/ServerModel';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-luan',
  templateUrl: './luan.component.html',
  styleUrls: ['./luan.component.css']
})
export class LuanComponent implements OnInit {

  servers: ServerModel[] = [
    new ServerModel('test', 20, this.generateId()),
  ];

  constructor( private serverService: ServerService) { }
  onAddServer(name: string) {
    this.servers.push({name: name, capacity: 10, id: this.generateId()});
  }
  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
        (response) => { console.log(response), notify('save done');},
        (error) => console.log(error) );
  }

  onGet() {
    this.serverService.getServer().subscribe(
        (servers: ServerModel[]) => { this.servers = servers, notify('get server done'); },
        (error) => console.log(error)
      );
  }

  ngOnInit() {
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
