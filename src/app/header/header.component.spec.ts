import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from "@angular/core/testing";
import {
  RouterModule} from "@angular/router";
import {
  APP_BASE_HREF
} from "@angular/common";
import {
  HeaderComponent
} from "./header.component";
import {
  TranslateModule
} from "@ngx-translate/core";
import {
  HttpClientModule
} from "@angular/common/http";
import {
  RecipeService
} from "../recipes/recipe.service";
import {
  ShoppingListService
} from "../shopping-list/shopping-list.service";
import { of } from "rxjs";


fdescribe('Header component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture < HeaderComponent > ;
  let route = jasmine.createSpyObj('route', ['navigate'])
  const RecipeServiceStub = jasmine.createSpyObj('RecipeService', ['']);
  const ShoppingListServiceStub = jasmine.createSpyObj('ShoppingListService', ['']);
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      providers: [{
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        RecipeService,
        ShoppingListService
      ],
      imports: [
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
        HttpClientModule
      ]
    }).compileComponents;

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    // spyOn(component['translateService'], 'getBrowserLang').and.returnValue('luan');
    // spyOn(component['translateService'], 'use');
    // spyOn(component, 'onTest');
    fixture.detectChanges();
  });


  it('should use en', fakeAsync(() => {
    
    console.log(component);
    
    // expect(component['translateService'].getBrowserLang).toHaveBeenCalled();
    // expect(component['translateService'].use).toHaveBeenCalledWith('en');
    // expect(component.onTest).toHaveBeenCalled();
  }));

  it('should onSelect()', () => {
    const feature: string = 'feature';
    spyOn(component.featureSelected, 'emit');
    component.onSelect(feature);
    expect(component['featureSelected'].emit).toHaveBeenCalledWith(feature);
  });

  it('should onSave()', () => {
    spyOn(component['dataStorageService'], 'storeRecipes')
      .and.returnValue( of ({
        mes: "Message"
      }));
    component.onSave();
    expect(component['dataStorageService'].storeRecipes).toHaveBeenCalled();
  });

  it('should onFetch', () => {
    spyOn(component['dataStorageService'], 'getRecipes');
    component.onFetch();
    expect(component['dataStorageService'].getRecipes).toHaveBeenCalled();
  });

  it('should onLogout', () => {
    spyOn(component['authService'], 'logout');
    component.onLogout();
    expect(component['authService'].logout).toHaveBeenCalled();
  });

  describe('onSwitch', () => {
    beforeEach(() => {
      spyOn(component['translateService'], 'use');
    });
    it('should onSwichEn', () => {
      component.onSwichEn();
      expect(component['translateService'].use).toHaveBeenCalledWith('en');
    });

    it('should onSwichChinese', () => {
      component.onSwichChinese();
      expect(component['translateService'].use).toHaveBeenCalledWith('zh');
    });

    it('should onSwichJa', () => {
      component.onSwichJa();
      expect(component['translateService'].use).toHaveBeenCalledWith('ja');
    });
  });

});
