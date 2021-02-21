# NgxSimpleCountryCode

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Use

Import NgxSimpleCountryCodeComponent in your module
`import { NgxSimpleCountryCodeComponent } from 'ngx-simple-country-code';`

Add NgxSimpleCountryCodeModule in import array
imports: [
    NgxSimpleCountryCodeModule
  ]

Add below tag in your template
`<ngx-simple-country-code></ngx-simple-country-code>`

## Use with form control

`<ngx-simple-country-code [formControl]="countryCodeFC"></ngx-simple-country-code>`

## Or with FormGroup

`<div [formGroup]="FG">`
  `<ngx-simple-country-code formControlName="countryCodeFC"></ngx-simple-country-code>`
`</div>`
