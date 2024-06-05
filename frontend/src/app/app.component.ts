import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testapp';
  users:any = []

  constructor(private dataService:DataService){
    this.dataService.get_data().subscribe({
      next:(res)=>{
          this.users = res; 
          console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }, 

      complete:()=>{

      }
    })
  }
}
