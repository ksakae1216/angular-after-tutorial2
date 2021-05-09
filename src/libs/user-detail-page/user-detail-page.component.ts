import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators'
import { UserDetailUsecase } from '../../core/service/user/user-detail.usecase';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnDestroy, OnInit {
  user$ = this.userDetailUsecase.user$;

  private onDestroy$ = new EventEmitter();

  constructor(private route: ActivatedRoute, private userDetailUsecase: UserDetailUsecase) {}

  ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this.onDestroy$),
        map(params => params["userId"]),
        distinctUntilChanged()
      )
      .subscribe(userId => this.userDetailUsecase.fetchUser(userId));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
