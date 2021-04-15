import {AfterViewInit, Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {
  @ViewChild('flag', { static: false }) public mydiv: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    console.log('hola');
   var h = this.mydiv.nativeElement.offsetWidth;

  }

  ngOnInit(): void {

  }

}
