import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string)
  {
    this.featureSelected.emit(feature);
  }
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSave() {
     this.dataStorageService.storeRecipes().subscribe(
       (response: Response) => console.log(response)
     );
  }
  onFetch() {
    this.dataStorageService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }


}
