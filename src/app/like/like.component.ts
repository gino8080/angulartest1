import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isLike = false;
  bgColor = "red";
  testo = "NON MI PIACE!!";

  clickedButton = () => {
    this.isLike = !this.isLike;
    //cambio il colore di bg
    if (this.isLike === true) {
      this.bgColor = "green";
      this.testo = "MI PIACE!! :)";
    } else {
      this.bgColor = "red";
      this.testo = "NON MI PIACE!! :(";
    }

    console.log("isLike", this.isLike, this.bgColor, this.testo);
  }

  constructor() { }

  ngOnInit() {
  }

}
