import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal-page',
  templateUrl: './profile-modal-page.component.html',
  styleUrls: ['./profile-modal-page.component.scss'],
})
export class ProfileModalPageComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {}

}
