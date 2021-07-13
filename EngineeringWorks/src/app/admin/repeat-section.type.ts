import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"></formly-field>

      <div class="col-sm-2 d-flex align-items-center">
        <button class="btn btn-danger" type="button" (click)="remove(i)" 
        [disabled]="options.formState.disabled">Remove</button>
      </div>
    </div>
    
    <div style="margin:30px 0;">
<button class="btn btn-primary" type="button"  (click)="add()" 
[disabled]="options.formState.disabled" >
        {{ to.addText }}
      </button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
