import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notify(message: string) {
    this.snackBar.open(message, "ok", {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }
}
