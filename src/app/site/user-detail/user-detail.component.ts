import { Component } from '@angular/core';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userId: string | undefined | null;
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {
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

  }

  editAddressDetail() {

  }

}
