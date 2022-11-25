import { Component, Inject } from '@angular/core';
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { ConfirmationDialog } from './confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  payload: any;
  modalData
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.payload = result.payload;
        this.modalData = result.formData;
        console.log(result.payload);
      }
      
    });
  }
}
