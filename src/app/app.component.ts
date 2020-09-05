import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-angular';
  constructor(firestore: AngularFirestore) {

    const temp = firestore.collection('items').valueChanges();
    temp.subscribe(console.log);
    
  }
}
