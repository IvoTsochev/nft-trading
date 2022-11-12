import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToIndex() {
    this.router.navigate(['/', 'index'])
  }
  goToAboutUs() {
    this.router.navigate(['/', 'aboutus'])
  }
  goToCollection() {
    this.router.navigate(['/', 'collection'])
  }
  goToLogin() {
    console.log('goToLogin')
    this.router.navigate(['/', 'login'])
  }
  goToSignUp() {
    this.router.navigate(['/', 'signup'])
  }
}
