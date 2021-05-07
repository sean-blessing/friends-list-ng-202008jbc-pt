import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list-jbc202008';
  newFriend = '';
  isDisabled = false;
  // create an array named friends and populate with some friends
  friends = ["Sean", "Ron", "Julie", "Phil"];

  addFriend() {
    this.friends.push(this.newFriend);
  }
}
