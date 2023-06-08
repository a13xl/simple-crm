import { Component } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user!: User;
  userId: string | undefined | null;
  loading: boolean = false;

  constructor(private firestore: Firestore, private dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  closeEditAddress() {
    this.dialogRef.close()
  }

  async saveAddress() {
    //console.log('current user is', this.user);
    this.loading = true;
    
    const docRef = doc(this.firestore, 'users', `${this.userId}`);
    await updateDoc(docRef, this.user.toJSON())
      .then((e) => {
        this.loading = false;
        this.closeEditAddress();
      })
      .catch((err) => {
        console.log(err);
    });
  }
}
