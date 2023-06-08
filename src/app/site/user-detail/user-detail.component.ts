import { Component } from '@angular/core';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditAddressComponent } from 'src/app/component/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from 'src/app/component/dialog-edit-user/dialog-edit-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userId: string | undefined | null;
  user: User = new User();

  constructor(private route: ActivatedRoute, 
      private firestore: Firestore, public dialog: MatDialog) {
    this.userId = route.snapshot.paramMap.get('id');
    this.getUser();
  }

  async getUser() {
    const docRef = doc(this.firestore, 'users', `${this.userId}`);

    onSnapshot(docRef, (doc) => {
      this.user = new User(doc.data());
      console.log('User Data', this.user);
    })
  }

  editNameDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddressDetail() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editBirthdayDetail() {

  }

  editNoteDetail() {
    
  }

}
