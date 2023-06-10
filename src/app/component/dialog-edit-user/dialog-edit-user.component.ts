import { Component } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user: User = new User();
  userId: string | undefined | null;
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firestore: Firestore, private dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  closeEditName() {
    this.dialogRef.close()
  }

  async saveName() {
    this.loading = true;
    
    const docRef = doc(this.firestore, 'users', `${this.userId}`);
    await updateDoc(docRef, this.user.toJSON())
      .then((e) => {
        this.loading = false;
        this.closeEditName();
      })
      .catch((err) => {
        console.log(err);
    });
  }
}
