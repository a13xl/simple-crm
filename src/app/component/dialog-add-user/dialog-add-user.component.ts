import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firestore: Firestore, private dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  closeAddUser() {
    this.dialogRef.close()
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);
    this.loading = true;
    
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, this.user.toJSON()).then((result: any) => {
      console.log('Adding user finished', result);
      this.loading = false;
      this.closeAddUser();
    })
      .catch((err) => {
        console.log(err);
      });
  }
}
