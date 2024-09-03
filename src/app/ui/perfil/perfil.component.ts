import { Component } from '@angular/core';
import { UserApiService } from '../../service/user-api.service';
import { AuthApiService } from '../../service/auth-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  username: String = ""
  constructor(private serviceUser: UserApiService,private auth:AuthApiService) {
    this.username = this.auth.getUserData().sub
  }


}
