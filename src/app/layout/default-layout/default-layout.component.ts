import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RootLayout} from '../../@pages/layouts/root/root.component';
import { AuthService } from '../../jsasa-shared/services/auth.service';
import { pagesToggleService } from '../../@pages/services/toggler.service';
import { Router } from '@angular/router';
import { CurrentUserInterface } from '../../jsasa-shared/interfaces/current-user-interface';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultLayoutComponent extends RootLayout implements OnInit {
  _boxed = true;
  menuLinks = [
    {
      label: 'Home',
      details: '12 New Updates',
      routerLink: '/home',
      iconType: 'pg',
      iconName: 'home',
      thumbNailClass: 'bg-primary'
    },
    {
      label: 'Admin Panel',
      details: 'Manage the system',
      routerLink: '/admin',
      iconType: 'pg',
      iconName: 'settings',
      thumbNailClass: 'bg-primary'
    },
    {
      label: 'Messages/Emails',
      details: '234 New Emails',
      routerLink: 'messages/list',
      iconType: 'pg',
      iconName: 'mail',
      thumbNailClass: 'bg-success'
    },
    {
      label: 'Companies',
      details: 'Partnering companies',
      routerLink: '/companies',
      iconType: 'pg',
      iconName: 'messages',
      thumbNailClass: 'jsa-green-bg'
    },
    {
      label: 'People',
      details: '100+ new people',
      routerLink: '/people',
      iconType: 'pg',
      iconName: 'users',
      thumbNailClass: 'jsa-orange-bg'
    },
    {
      label: 'Jobs',
      details: '100+ jobs',
      routerLink: '/jobs',
      iconType: 'pg',
      iconName: 'messages',
      thumbNailClass: 'jsa-light-green-bg'
    },
    {
      label: 'Social',
      iconType: 'letter',
      iconName: 'Ui',
      toggle: 'close',
      submenu: [
        {
          label: 'Facebook',
          routerLink: 'ui/color',
          iconType: 'letter',
          iconName: 'F',
        },
        {
          label: 'Twitter',
          routerLink: 'ui/typography',
          iconType: 'letter',
          iconName: 't',
        },
        {
          label: 'Instagram',
          routerLink: 'ui/icons',
          iconType: 'letter',
          iconName: 'i',
        },
        {
          label: 'Snapchat',
          routerLink: 'ui/buttons',
          iconType: 'letter',
          iconName: 'S',
        },
        {
          label: 'My Space',
          routerLink: 'ui/notifications',
          iconType: 'letter',
          iconName: 'MS',
        },
        {
          label: 'M-changa',
          routerLink: 'ui/modal',
          iconType: 'letter',
          iconName: 'M-C',
        },
        {
          label: 'Tumblr',
          routerLink: 'ui/progress',
          iconType: 'letter',
          iconName: 'T',
        },
        {
          label: 'Baidu',
          routerLink: 'ui/tabs',
          iconType: 'letter',
          iconName: 'B',
        }
      ]
    },
    {
      label: 'MARKET PLACE',
      routerLink: 'cards',
      iconType: 'pg',
      iconName: 'grid'
    },
    {
      label: 'MY OFFICE',
      routerLink: 'cards',
      iconType: 'pg',
      iconName: 'grid'
    },
    {
      label: 'GROUPS/SACCOS',
      iconType: 'pg',
      iconName: 'form',
      toggle: 'close',
      submenu: [
        {
          label: 'Table Banking',
          routerLink: 'forms/elements',
          iconType: 'letter',
          iconName: 'tb',
        },
        {
          label: 'Sacco',
          routerLink: 'forms/layouts',
          iconType: 'letter',
          iconName: 'C-S',
        },
        {
          label: 'Business Directors',
          routerLink: 'forms/wizard',
          iconType: 'letter',
          iconName: 'bd',
        }
      ]
    },
    {
      label: 'TENDERS',
      routerLink: 'cards',
      iconType: 'pg',
      iconName: 'grid'
    },
    {
      label: ' IDEA CENTER',
      routerLink: 'cards',
      iconType: 'pg',
      iconName: 'grid'
    },
    {
      label: 'EVENTS',
      iconType: 'pg',
      iconName: 'tables',
      toggle: 'close',
      submenu: [
        {
          label: 'Weddings',
          routerLink: 'tables/basic',
          iconType: 'letter',
          iconName: 'w',
        },
        {
          label: 'Birthdays',
          routerLink: 'tables/advance',
          iconType: 'letter',
          iconName: 'bd',
        },
        {
          label: 'Hikings',
          routerLink: 'tables/advance',
          iconType: 'letter',
          iconName: 'H',
        }
        {
          label: 'Keshas',
          routerLink: 'tables/advance',
          iconType: 'letter',
          iconName: 'k',
        }
      ]
    },
    {
      label: 'Locations',
      iconType: 'pg',
      iconName: 'map',
      toggle: 'close',
      submenu: [
        {
          label: 'Malls',
          routerLink: 'maps/google',
          iconType: 'letter',
          iconName: 'm',
        },
        {
          label: 'Gas Stations',
          routerLink: 'maps/google',
          iconType: 'letter',
          iconName: 'gs',
        },
        {
          label: 'Eatouts',
          routerLink: 'maps/google',
          iconType: 'letter',
          iconName: 'EO',
        }
      ]
    },
    {
      label: 'Forex',
      routerLink: 'charts',
      iconType: 'pg',
      iconName: 'charts'
    },
    {
      label: 'Sponsors',
      externalLink: 'https://www.google.com/',
      target: '_blank',
      iconType: 'pg',
      iconName: 'note'
    },
    {
      label: 'Support',
      externalLink: 'http://www.google.com/',
      target: '_blank',
      iconType: 'letter',
      iconName: 'Cl'
    },
  ];
  currentUser: CurrentUserInterface;
  loggedIn: boolean;
  constructor (
    public auth: AuthService,
    toggler: pagesToggleService,
    router: Router
  ) {
    super(toggler, router);
  }
  ngOnInit() {
    this.observeVariables();
  }
  private observeVariables() {
    const self = this;
    // loggedIn
    self.auth.loggedIn$.subscribe( next => {
      self.loggedIn = next;
    }, error => {
      console.log('Error while watching login status');
      self.loggedIn = false;
    });
    // Current User
    self.auth.currentUser$.subscribe( next => {
      self.currentUser = next;
    }, error => {
      self.currentUser = {};
      console.log('Error while watching the current User');
    });
  }
}
