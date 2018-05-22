import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemComponent } from './stock-item.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: `app-stock-item-test-host`,
  template: `<app-stock-item></app-stock-item>`
})
class StockItemTestHostComponent {
  @ViewChild(StockItemComponent)
  public stockItemComponent: StockItemComponent;
}

describe('StockItemComponent', () => {
  let component: StockItemTestHostComponent;
  let fixture: ComponentFixture<StockItemTestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemTestHostComponent, StockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemTestHostComponent);
    component = fixture.componentInstance;
    component.stockItemComponent.stock = {
      quote: {
        symbol: 'symbol',
        latestPrice: '100.20',
        changePercent: '0.345'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have h2 element with text "symbol"', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('h2');
    expect(header.textContent).toEqual('symbol');
  }));
  it('should have p element with text "$100.20"', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('p.change-percent');
    expect(header.textContent).toEqual('0.345%');
  }));
  it('should have p element with text "symbol"', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('p.latest-price');
    expect(header.textContent).toEqual('$100.20');
  }));
});
