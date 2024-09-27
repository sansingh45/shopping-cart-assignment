import { Observable, of } from 'rxjs';
import { IBanner } from 'src/app/features/home/models/banner.model';
import { mockBanners } from '../constants/banner.mock';

export class MockHomeService {
  getAllBanners(): Observable<IBanner[]> {
    return of([...mockBanners]);
  }
}
