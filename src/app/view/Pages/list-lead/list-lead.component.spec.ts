import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeadComponent } from './list-lead.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenericService } from 'src/app/core/services/generic.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListLeadComponent', () => {
  let component: ListLeadComponent;
  let fixture: ComponentFixture<ListLeadComponent>;
  let service: GenericService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, NgxPaginationModule],
    });
    service = TestBed.inject(GenericService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

