import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();
  docRef: any;

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    /* collectionData(collection(this.firestore, 'users'), ((changes: any) => {
      console.log('Received changes from DB', changes);
    })); */
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
