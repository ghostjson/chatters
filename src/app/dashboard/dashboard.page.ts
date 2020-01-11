import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contacts/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private contacts : ContactService) { }

  ngOnInit() {
  }

  chatTo() : void {

    this.router.navigate(['/chat']);

  }

}
