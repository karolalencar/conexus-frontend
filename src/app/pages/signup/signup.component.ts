import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;

  @Input()
  selectedUserType: string = 'Sou profissional';
  userTypes: string[] = ['Sou profissional', 'Sou cliente'];
  categories: string[] = ['Pintura', 'Fotografia', 'Organização de eventos'];
  selectedCategory: string = this.categories[0];
}
