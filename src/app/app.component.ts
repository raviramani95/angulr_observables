import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userActivated = false;
  private activateSub: Subscription;
  constructor(private userServce: UserService) {}

  ngOnInit() {
    this.activateSub = this.userServce.activatedEmitter.subscribe(didActivated => {
      this.userActivated = didActivated;
    })
  }

  ngOnDestroy(): void {
    this.activateSub.unsubscribe();
  }
}
