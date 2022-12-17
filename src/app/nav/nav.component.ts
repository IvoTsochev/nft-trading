import { Component, OnInit } from '@angular/core'
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isAuthenticated = false;

  constructor(
    public modal: ModalService,
    public auth: AuthService,
  ) {
  }

  ngOnInit(): void { }

  openModal($event: Event) {
    console.log('openModal');

    $event.preventDefault()
    this.modal.toggleModal('auth')
  }


}
