import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  form: any = {
    newpassword: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
