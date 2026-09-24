import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input('parentData') public data: any;
  @Output() public childEvent = new EventEmitter();
  public framework = 'angular';

  constructor() { }

  ngOnInit(): void {
  }

  sendData(): void {
    let beerInfo = {
      name: "Heniken",
      price: 19000
    }
    this.childEvent.emit(beerInfo);
  }

}
