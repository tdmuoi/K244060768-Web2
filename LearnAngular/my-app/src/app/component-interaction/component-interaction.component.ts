import { Component } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  standalone: false,
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent {

  // Dữ liệu truyền xuống Child
  parentData: string = 'Sample Text';

  // Dữ liệu nhận từ Child
  childData: any = null;

  // Nhận sự kiện từ Child component
  onReceiveChild(data: any): void {
    this.childData = data;
  }
}
