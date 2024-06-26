import { Component } from '@angular/core';

//import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


constructor(public dialog: MatDialog) { }

openDialog() {
  this.dialog.open(DialogElementsExampleDialog);
}


}


@Component({
  selector: 'dialog-elements-example-dialog',
  template: ` 
  <nav>
  <a href="#about">About me</a> <br> <br><br>
  <a href="#skills">Skills</a> <br> <br><br>
  <a href="#skills">Portfolio</a> <br> <br><br>
  </nav>`,
  styles: `
  
  .mdc-dialog__surface {
    background: gray;
  }

.cdk-overlay-backdrop-showing {
    background: gray;
}

.mdc-dialog__container {
    border: none;
}

  .mat-mdc-dialog-surface mdc-dialog_surface {
    background-color: transparent;
  }

  body {
    height: 100vh;
    width: 100%;
    
  }
  nav {
    
    padding-top: 10px;
    
    a {
      padding: 20px;
      color: white;
      text-decoration: none;
      font-size: 32px;
    }
  }
  
  `,
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,],
})
export class DialogElementsExampleDialog {}


