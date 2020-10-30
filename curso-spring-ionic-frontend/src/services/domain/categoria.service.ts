import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService{
    constructor(public http: HttpClient){
    }

    findAll(): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>('$(API_CONFIG.baseUrl}/categorias/1');
    }
}