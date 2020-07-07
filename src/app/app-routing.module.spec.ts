import { Component } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {  of } from 'rxjs';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScalesComponent } from './scales/scales.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './app-routing.module';

describe('routing', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        NavigationComponent,
        DashboardComponent,
        ScalesComponent,
        PageNotFoundComponent
      ]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
  });

  it('navigating to "" redirects you to /dashboard', fakeAsync(() => {
    fixture.ngZone.run(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/dashboard');
    });
  }));

  it('navigating to "/dashboard" will show the dashboard component', fakeAsync(() => {
  fixture.ngZone.run(() => {
      router.navigate(['dashboard']);
      tick();
      const dashboardComp = fixture.nativeElement.querySelector('sog-dashboard');
      expect(dashboardComp).toBeTruthy();
    });
  }));

  it('navigating to "/scales" will show the scales-component', fakeAsync(() => {
    fixture.ngZone.run(() => {
      router.navigate(['scales']);
      tick();
      const scalesComp = fixture.nativeElement.querySelector('sog-scales');
      expect(scalesComp).toBeTruthy();
     });
  }));

  it('navigating to an unknown path will show the page-not-found component', fakeAsync(() => {
    fixture.ngZone.run(() => {
        router.navigate(['bla']);
        tick();
        const pageNotFoundComp = fixture.nativeElement.querySelector('sog-page-not-found');
        expect(pageNotFoundComp).toBeTruthy();
    });
   }));
});
