import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AppModule } from '../app.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, AngularFireAuth, AngularFirestore],
      imports: [
        AngularFireModule.initializeApp(environment.firebase, 'myAngular'),
        AngularFireAuthModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  
  // it('should return resolve', fakeAsync(inject([AuthService], (service: AuthService) => {
  //   // tick(5000);
  //   // expect(service.testAsynAwait()).toBe('test');
  //   tick(3001);
  //   service.testAsynAwait().then( r => {
  //       expect(r).toBe('test');
  //   })

  // })));
});
