import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();
  docRef: any;
  userData: Array<any> | undefined;

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.getData();
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'users');

    collectionData(collectionInstance, {idField: 'id'})
      .subscribe(changes => {
        console.log('Received changes from DB', changes);
        this.userData = changes;
    })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
