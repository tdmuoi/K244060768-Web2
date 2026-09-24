import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa: number = 0;
  public hsb: number = 0;
  public hsc: number = 0;
  public delta: number = 0;
  public result: string = 'Nhập hệ số và bấm Giải';
  public resultColor: string = 'black';


  GiaiPtb2(): void {
    // Trường hợp a = 0 → không phải ptb2, chuyển về ptb1
    if (this.hsa === 0) {
      if (this.hsb === 0) {
        if (this.hsc === 0) {
          this.result = 'Phương trình vô số nghiệm';
          this.resultColor = 'orange';
        } else {
          this.result = 'Phương trình vô nghiệm';
          this.resultColor = 'red';
        }
      } else {
        const x = -this.hsc / this.hsb;
        this.result = `Phương trình bậc 1 có nghiệm x = ${x}`;
        this.resultColor = 'green';
      }
      this.delta = 0;
      return;
    }
    // Tính delta
    this.delta = this.hsb * this.hsb - 4 * this.hsa * this.hsc;
    if (this.delta < 0) {
      // Vô nghiệm
      this.result = `Δ = ${this.delta} < 0 → Phương trình vô nghiệm`;
      this.resultColor = 'red';
    } else if (this.delta === 0) {
      // Nghiệm kép
      const x = -this.hsb / (2 * this.hsa);
      this.result = `Δ = 0 → Phương trình có nghiệm kép x = ${x}`;
      this.resultColor = 'green';
    } else {
      // Hai nghiệm phân biệt
      const sqrtDelta = Math.sqrt(this.delta);
      const x1 = (-this.hsb + sqrtDelta) / (2 * this.hsa);
      const x2 = (-this.hsb - sqrtDelta) / (2 * this.hsa);
      this.result = `Δ = ${this.delta} > 0 → Phương trình có 2 nghiệm: x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
      this.resultColor = 'green';
    }
  }
  ResetPT(): void {
    this.hsa = 0;
    this.hsb = 0;
    this.hsc = 0;
    this.delta = 0;
    this.result = 'Nhập hệ số và bấm Giải';
    this.resultColor = 'black';
  }
}

