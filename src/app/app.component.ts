///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  onNavigate(feature: string)
  {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyA1VJ4NZAhXZcAd2uDiE4EH4U1gJb3PBJw",
      authDomain: "ntl001-186700.firebaseapp.com",
    });
  }
}
