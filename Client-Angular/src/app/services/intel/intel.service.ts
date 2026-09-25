import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INTEL_PROCESSORS } from '../../data/Intel.interface';
import { IntelProcessor } from '../../interfaces/intel.interface';

@Injectable({
	providedIn: 'root',
})
export class IntelService {
	getAll(): Observable<IntelProcessor[]> {
		return of(INTEL_PROCESSORS);
	}
}
