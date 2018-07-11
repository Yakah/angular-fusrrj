import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../../@pages/layouts';
import { CurrentUserInterface } from '../../jsasa-shared/interfaces/current-user-interface';
import { AuthService } from '../../jsasa-shared/services/auth.service';
import { pagesToggleService } from '../../@pages/services/toggler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [
    {
      label: 'Back Home',
      details: 'Go back to the app',
      routerLink: '/home',
      iconType: 'pg',
      iconName: 'home',
      thumbNailClass: 'text-white'
    },
    {
      label: 'Dashboard',
      details: '12 New Updates',
      routerLink: '/admin/dashboard',
      iconType: 'pg',
      iconName: 'home',
      thumbNailClass: 'text-white'
    },
    {
        label: 'Email',
        details: '234 New Emails',
        routerLink: 'email/list',
        iconType: 'pg',
        iconName: 'mail'
    },
    {
      label: 'Social',
      routerLink: 'social',
      iconType: 'pg',
      iconName: 'social'
    },
    {
        label: 'Builder',
        routerLink: 'builder/corporate-builder',
        iconType: 'pg',
        iconName: 'layouts'
    },
    {
      label: 'Layouts',
      iconType: 'pg',
      iconName: 'layouts2',
      toggle: 'close',
      submenu: [
        {
          label: 'Default',
          routerLink: 'layouts/default',
          iconType: 'letter',
          iconName: 'dl',
        },
        {
          label: 'Secondary',
          routerLink: 'layouts/secondary',
          iconType: 'letter',
          iconName: 'sl',
        },
        {
          label: 'Boxed',
          routerLink: 'layouts/boxed-alt',
          iconType: 'letter',
          iconName: 'bl',
        }
      ]
  },
    {
      label: 'UI Elements',
      iconType: 'letter',
      iconName: 'Ui',
      toggle: 'close',
      submenu: [
        {
          label: 'Color',
          routerLink: 'ui/color',
          iconType: 'letter',
          iconName: 'c',
        },
        {
          label: 'Typography',
          routerLink: 'ui/typography',
          iconType: 'letter',
          iconName: 't',
        },
        {
          label: 'Icons',
          routerLink: 'ui/icons',
          iconType: 'letter',
          iconName: 'i',
        },
        {
          label: 'Buttons',
          routerLink: 'ui/buttons',
          iconType: 'letter',
          iconName: 'b',
        },
        {
          label: 'Notifications',
          routerLink: 'ui/notifications',
          iconType: 'letter',
          iconName: 'n',
        },
        {
          label: 'Modals',
          routerLink: 'ui/modal',
          iconType: 'letter',
          iconName: 'm',
        },
        {
          label: 'Progress & Activity',
          routerLink: 'ui/progress',
          iconType: 'letter',
          iconName: 'pa',
        },
        {
          label: 'Tabs & Accordians',
          routerLink: 'ui/tabs',
          iconType: 'letter',
          iconName: 'a',
        },
        {
          label: 'Sliders',
          routerLink: 'ui/sliders',
          iconType: 'letter',
          iconName: 's',
        },
        {
          label: 'Treeview',
          routerLink: 'ui/tree',
          iconType: 'letter',
          iconName: 'tv',
        }
      ]
    },
    {
        label: 'Forms',
        iconType: 'pg',
        iconName: 'form',
        toggle: 'close',
        submenu: [
          {
            label: 'Form Elements',
            routerLink: 'forms/elements',
            iconType: 'letter',
            iconName: 'fe',
          },
          {
            label: 'Form Layouts',
            routerLink: 'forms/layouts',
            iconType: 'letter',
            iconName: 'fl',
          },
          {
            label: 'Form Wizard',
            routerLink: 'forms/wizard',
            iconType: 'letter',
            iconName: 'fq',
          }
        ]
    },
    {
        label: 'Cards',
        routerLink: 'cards',
        iconType: 'pg',
        iconName: 'grid'
    },
    {
        label: 'Views',
        routerLink: 'views',
        iconType: 'pg',
        iconName: 'ui'
    },
    {
        label: 'Tables',
        iconType: 'pg',
        iconName: 'tables',
        toggle: 'close',
        submenu: [
          {
            label: 'Basic Tables',
            routerLink: 'tables/basic',
            iconType: 'letter',
            iconName: 'bt',
          },
          {
            label: 'Advance Tables',
            routerLink: 'tables/advance',
            iconType: 'letter',
            iconName: 'dt',
          }
        ]
    },
    {
        label: 'Maps',
        iconType: 'pg',
        iconName: 'map',
        toggle: 'close',
        submenu: [
          {
            label: 'Google Maps',
            routerLink: 'maps/google/with-header',
            iconType: 'letter',
            iconName: 'gm',
          }
        ]
    },
    {
        label: 'Charts',
        routerLink: 'charts',
        iconType: 'pg',
        iconName: 'charts'
    },
    {
        label: 'Extra',
        iconType: 'pg',
        iconName: 'bag',
        toggle: 'close',
        submenu: [
          {
            label: 'Invoice',
            routerLink: 'extra/invoice',
            iconType: 'letter',
            iconName: 'in',
          },
          {
            label: '404 Page',
            routerLink: 'session/error/404',
            iconType: 'letter',
            iconName: 'pg',
          },
          {
            label: '500 Page',
            routerLink: 'session/error/500',
            iconType: 'letter',
            iconName: 'pg',
          },
          {
            label: 'Login',
            routerLink: 'session/login',
            iconType: 'letter',
            iconName: 'l',
          },
          {
            label: 'Register',
            routerLink: 'session/register',
            iconType: 'letter',
            iconName: 're',
          },
          {
            label: 'Lockscreen',
            routerLink: 'session/lock',
            iconType: 'letter',
            iconName: 'ls',
          },
          {
            label: 'Gallery',
            routerLink: 'extra/gallery',
            iconType: 'letter',
            iconName: 'gl',
          },
          {
            label: 'Timeline',
            routerLink: 'extra/timeline',
            iconType: 'letter',
            iconName: 't',
          }
        ]
    },
    {
      label: 'Docs',
      externalLink: 'https://docs.pages.revox.io/v/angular/',
      target: '_blank',
      iconType: 'pg',
      iconName: 'note'
    },
    {
      label: 'Changelog',
      externalLink: 'http://changelog.pages.revox.io/',
      target: '_blank',
      iconType: 'letter',
      iconName: 'Cl'
    },
];
  _boxed = true;
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
