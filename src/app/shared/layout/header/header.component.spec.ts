import { async, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ]
    }).compileComponents();
  }));

  // Testing HeaderComponent creation
  it('should create the HeaderComponent component', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const headerComponent = fixture.debugElement.componentInstance;
    expect(headerComponent).toBeTruthy();
  }));

  // Testing an element within HeaderComponent
  it(`should have as title 'Traffic Meister'`, async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const headerComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(headerComponent.title).toEqual('Traffic Meister');
  }));
});
