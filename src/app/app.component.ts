import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.items$ = af.database.list('items');
  }

  add() {
    this.items$.push({
      name: 'Eden',
      desc: 'very Handsome'
    });
    
  }

  delete(key) {
    console.log(key);
    this.af.database.object('items/' + key).remove();
  }
}
