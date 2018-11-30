import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title = "CIAO";
  nome = "pippo";
  counter = 0;
  isOff = false;
  textColor = "#ff6600";
  size = "100px";

  greet = () => {
    return "ciao " + this.nome;
  }

  increment = () => {
    this.counter++;
    // this.counter+=1;
    //this.counter = this.counter +1;
    this.isOff = !this.isOff;
    console.log(this.counter);
  }

  constructor() { }

  ngOnInit() {
    console.log("ON INIT");

    // setInterval(this.increment, 1 * 1000);
  }

}
