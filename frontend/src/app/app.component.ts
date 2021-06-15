import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/pages/home/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/pages/home/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/pages/home/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/pages/home/Archived', icon: 'archive' },
    { title: 'Trash', url: '/pages/home/Trash', icon: 'trash' },
    { title: 'Spam', url: '/pages/home/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
