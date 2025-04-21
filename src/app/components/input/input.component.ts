import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:  forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent  implements ControlValueAccessor {

  @Input()
  value: string = '';

  @Input()
  disabled: boolean = false;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  onTouched ?: any = ()=> { };

  private onChange?: (any) = ()=> {}


  inputEvent(event: Event){
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange?.(this.value)
    this.valueChange.emit(this.value)

  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
