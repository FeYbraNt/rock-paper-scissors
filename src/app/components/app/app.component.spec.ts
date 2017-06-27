import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { StatsComponent } from './../stats/stats.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let expectedResult;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, StatsComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // pretend result will be 1 first time
    expectedResult = 1;
    component.result = expectedResult;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Rock, paper & scissors'`, async(() => {
    expect(component.title).toEqual('Rock, paper & scissors');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock, paper & scissors');
  }));

});
