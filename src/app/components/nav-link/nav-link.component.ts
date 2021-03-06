import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  @Input() text!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
