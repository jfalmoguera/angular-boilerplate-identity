import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/entities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selectedLanguage;

  @Input() user: User;
  @Output() logout = new EventEmitter<boolean>(false);
  @Output() menuClicked = new EventEmitter<boolean>(false);
  @Output() toogleLanguage = new EventEmitter<string>(false);

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit();
  }

}
