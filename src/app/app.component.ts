import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: any;

  constructor(
    httpClient: HttpClient
  ) {
    httpClient.get('tasks').pipe(
      map((tasks) => {
        this.tasks = tasks;
        return tasks;
      })
    );
  }
}
