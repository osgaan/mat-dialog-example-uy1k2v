import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { ReportFilterService } from './report-filter.service';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialog {
  statusList: any[];
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ConfirmationDialog>,
    private _reportFilterService: ReportFilterService
  ) {
    _reportFilterService.getStatus().then((value) => (this.statusList = value));
    this.setupForm();
  }

  setupForm(): void {
    this.form = this._formBuilder.group({
      status: [''],
      startDate: [''],
    });
  }

  onConfirmClick(): void {
    const data = this.form.getRawValue();
    console.log(data);
    this.dialogRef.close({
      payload: this._reportFilterService.setupPayload(data),
      formData: Object.assign({}, data),
    });
  }
}
