import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCacheComponent } from './data-cache.component';

describe('DataCacheComponent', () => {
  let component: DataCacheComponent;
  let fixture: ComponentFixture<DataCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
