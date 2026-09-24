import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  templateUrl: './binding-event-component.html',
  styleUrl: './binding-event-component.css',
})
export class BindingEventComponent {
  public hsa: number = 5;
  public hsb: number = 7;
  public result: string = 'Kết quả ở đây';
  public resultColor: string = 'black';

  // Stores the name of the product
  productName: string = '';

  // Handler for click event
  onSave(): void {
    console.log('Saving product:', this.productName);
    alert('Saving product:' + this.productName);
    // Logic to call API or process data goes here
  }

  // Handler for input event, capturing user keystrokes
  onInputChange(event: Event): void {
    // Cast event.target to HTMLInputElement to access the value property
    const inputElement = event.target as HTMLInputElement;
    this.productName = inputElement.value;
  }

  GiaiPtb1(a: string, b: string) {
    this.hsa = parseFloat(a);
    this.hsb = parseFloat(b);
    if (this.hsa == 0) {
      if (this.hsb == 0) {
        this.result = 'Phương trình vô số nghiệm';
        this.resultColor = 'orange';
      } else {
        this.result = 'Phương trình vô nghiệm';
        this.resultColor = 'red';
      }
    } else {
      let x: number = -this.hsb / this.hsa;
      this.result = 'Phương trình có nghiệm x = ' + x;
      this.resultColor = 'green';
    }
  }

  ResetPT() {
    this.hsa = 0;
    this.hsb = 0;
    this.result = 'Kết quả ở đây';
    this.resultColor = 'black';
  }
}
