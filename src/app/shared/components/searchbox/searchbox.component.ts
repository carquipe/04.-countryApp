import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {

  @Input()
  public placeholder: string = '';


  @Output()
  public onValue = new EventEmitter<string>();

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;


  public emitValue (value: string): void {
    this.onValue.emit(value);
  }

}
