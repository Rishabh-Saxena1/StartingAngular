import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UC1-b';

  ngOnInit():  void{
    this.title = "Hello from BridgeLabz.";
  }
}
