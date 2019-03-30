import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {
  DataStorageService
} from '../shared/data-storage.service';
import {
  AuthService
} from '../auth/auth.service';
import {
  TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter < string > ();
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'ja', 'zh']);
    translateService.setDefaultLang('en');

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|ja/) ? browserLang : 'en');
  }
  
  onTest() {
    console.log('test');
    return true;
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSave() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => console.log(response)
    );
  };

  onFetch() {
    this.dataStorageService.getRecipes();
  };

  onLogout() {
    this.authService.logout();
  };

  onSwichEn() {
    this.translateService.use('en');
  };

  onSwichChinese() {
    this.translateService.use('zh');
  };

  onSwichJa() {
    this.translateService.use('ja');
  };



}
