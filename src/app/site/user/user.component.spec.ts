import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ UserComponent ],
      providers: [
        {provide: Firestore,useValue: {}}
        /* { provide: FirebaseApp, useFactory: () => initializeApp(environment.firebase), deps: [] },
        { provide: Firestore, useFactory: () => getFirestore(), deps: [FirebaseApp] } */
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
