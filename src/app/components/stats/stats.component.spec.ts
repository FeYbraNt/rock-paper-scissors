import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  let expectedGames = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;

    // pretend that games were wired to Stats component
    expectedGames = [{ winner: 1 }, { winner: 1 }, { winner: 2 }];
    component.games = expectedGames;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('it should display 0 draws', () => {
    const expectedDraws = component.getPlayerDraws();
    expect(expectedDraws).toEqual(0);
  });

  it('it should display 2 wins', () => {
    const expectedWins = component.getPlayerWins();
    expect(expectedWins).toEqual(2);
  });

  it('it should display 1 loose', () => {
    const expectedLooses = component.getPlayerLooses();
    expect(expectedLooses).toEqual(1);
  });

});
