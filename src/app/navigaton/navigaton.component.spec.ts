
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigatonComponent } from './navigaton.component';

describe('NavigatonComponent', () => {
  let component: NavigatonComponent;
  let fixture: ComponentFixture<NavigatonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavigatonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
