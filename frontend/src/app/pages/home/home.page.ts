import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MissionsService } from '../../services/missions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder: string;

  missions: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private missionsService: MissionsService
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.missions = this.missionsService.getMissions();
  }
}
