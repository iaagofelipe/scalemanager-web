import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TypeScale } from './../model/typeScale';

@Injectable({
  providedIn: 'root'
})
export class TypeScaleService {

  constructor(private api: ApiService) { }

  public getAllTypeScales(): Observable<TypeScale[]> {
    return this.api.get(`/type-scale/all`);
  }

  public getByTypeScaleCode(typeScaleCode: string): Observable<TypeScale> {
    return this.api.get(`/type-scale/find/${typeScaleCode}`)
  }

  public addTypeScale(typeScaleCode: TypeScale): Observable<TypeScale> {
    return this.api.post(`/type-scale/add`, typeScaleCode);
  }

  public updateTypeScale(typeScale: TypeScale, typeScaleCode: string): Observable<TypeScale> {
    return this.api.put(`/type-scale/update/${typeScaleCode}`, typeScale);
  }

  public deleteTypeScale(typeScaleCode: string): Observable<void> {
    return this.api.delete(`/type-scale/delete/${typeScaleCode}`);
  }

}
