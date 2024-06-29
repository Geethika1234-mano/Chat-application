import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
