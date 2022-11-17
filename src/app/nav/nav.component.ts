import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {ModalService} from '../services/modal.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router, public modal: ModalService) {}

  ngOnInit(): void {}

  // goToIndex() {
  //   this.router.navigate(['/', 'index'])
  // }
  // goToAboutUs() {
  //   this.router.navigate(['/', 'aboutus'])
  // }
  // goToCollection() {
  //   this.router.navigate(['/', 'collection'])
  // }
  // goToSignUp() {
  //   this.router.navigate(['/', 'signup'])
  // }

  openModal($event: Event) {
    $event.preventDefault()
    this.modal.toggleModal('auth')
  }
}
