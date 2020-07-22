import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
describe('ApiService', () => {
  let service: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.get(ApiService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should make a request', (done) => {
    const result = service.loadOperations(18990092);
    result.subscribe((va) => {
      console.log(va);
      expect(va).toBe('90');
      done();
    });
  });
});
