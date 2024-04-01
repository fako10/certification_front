import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pmp',
  templateUrl: './pmp.component.html',
  styleUrls: ['./pmp.component.css']
})
export class PmpComponent implements OnInit {

  constructor(private title: Title,
              private meta : Meta
              )  { }

  ngOnInit(): void {
  }

}
