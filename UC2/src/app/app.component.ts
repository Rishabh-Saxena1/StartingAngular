import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UC2';

  // UC-2
  imgUrl = "./assets/logo.png";
  ngOnInit() : void{
    this.title="Hello from BridgeLabz.";
  }

  // UC-3
  url = "https://www.bridgelabz.com";
  onClick($event: any){
    console.log("Save button is clicked" , $event);
    window.open(this.url, "_blank");
  }

  // UC-4
  userName: string="";

  // UC-5
  nameError: string = "";
  onInput($event:any){
    console.log("Change Event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";
  }
}
