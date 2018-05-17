import {Component, OnInit} from '@angular/core';
import compose from 'ramda/src/compose';
import toUpper from 'ramda/src/toUpper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    const classyGreeting = (firstName, lastName) =>
      'The name\'s ' + lastName + ', ' + firstName + ' ' + lastName;

    const yellGreeting = compose(toUpper, classyGreeting);
    console.log(yellGreeting('James', 'Bond'));
  }
}
