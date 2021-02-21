import { Component, forwardRef} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { NgxSimpleCountryCodeService } from './ngx-simple-country-code.service';
import { Country } from './model/country.model';

@Component({
  selector: 'ngx-simple-country-code',
  template: `
    <select
      name="country-code"
      id="country-code"
      tabindex="0"
      aria-label="select an option"
      role="listbox"
      [formControl]="countryCode"
      (blur)="onTouched()"
    >
      <ng-container *ngFor="let country of countries$ | async">
        <option [value]="'+' + country.dialCode" role="option">
          {{ country.name + ' +' + country.dialCode }}
        </option>
      </ng-container>
    </select>
  `,
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSimpleCountryCodeComponent),
      multi: true,
    },
  ],
})
export class NgxSimpleCountryCodeComponent implements ControlValueAccessor {
  countries$: Observable<Array<Country>>;
  countryCode: FormControl;
  onChange = (countryCode: string) => {};
  onTouched = () => {};

  constructor(private countryCodeService: NgxSimpleCountryCodeService) {
    this.countries$ = this.countryCodeService.getCountries();

    this.countryCode = new FormControl('');

    this.countryCode.valueChanges.subscribe(x => this.onChange(x));
  }

  writeValue(obj: string): void {
    this.countryCode.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.countryCode.disable() : this.countryCode.enable();
  }
}
