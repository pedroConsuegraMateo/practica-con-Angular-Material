import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { User } from './randomUser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public usuario?: User | undefined;
  constructor(private userService: RandomUserService) { }

  ngOnInit(): void {
    let user = this.userService.randomUser();
    user.subscribe(
      {next: (resp: User) => {
        this.usuario = resp;
        console.log(this.usuario.results[0].name);
        
        },
        error : (error) => {
          console.error(error);
        }
      } 
      );

  }


}
