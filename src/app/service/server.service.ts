import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerModel} from '../model/ServerModel';

@Injectable()
export class ServerService implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  storeServers(servers: any[]) {
    return this.http.put('https://ntl001-186700.firebaseio.com/data.json', servers);
  }
  // storeServers1(servers: any[]) {
  //   const Header = new Headers({'Content-type': 'haha'});
  //   return this.http.put('https://ntl001-186700.firebaseio.com/dataHeader.json', servers, {headers: Header});
  // }
    getServer() {
      return this.http.get<ServerModel[]>('https://ntl001-186700.firebaseio.com/data.json');
  }
}
