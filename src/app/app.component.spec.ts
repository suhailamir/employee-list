import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgbModalModule.forRoot()]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create 2 employees div', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    component.employees = [
      {
        id: '123',
        title: 'John',
        bio: `test test`,
        opened: false
      }, {
        id: '1234',
        title: 'Adam',
        bio: `test`,
        opened: true
      }
    ];
    const app = fixture.debugElement;
    fixture.detectChanges();
    const compiled = fixture
      .debugElement
      .nativeElement
      .querySelector('.employee');
    expect(app.queryAll(By.css('.employee')).length).toEqual(2);
  }));
  it(`should expand employee's bio`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    component.employees = [
      {
        id: '123',
        title: 'John',
        bio: `test test`,
        opened: true
      }
    ];
    const app = fixture.debugElement;
    fixture.detectChanges();
    const compiled = fixture
      .debugElement
      .nativeElement
      .querySelector('.employee');
    expect(app.query(By.css('.employee .hide'))).toBeNull();
  }));
  it(`should collapse employee's bio`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    component.employees = [
      {
        id: '123',
        title: 'John',
        bio: `test test`,
        opened: false
      }
    ];
    const app = fixture.debugElement;
    fixture.detectChanges();
    const compiled = fixture
      .debugElement
      .nativeElement
      .querySelector('.employee');
    expect(app.query(By.css('.employee .hide'))).toBeTruthy();
  }));
});
