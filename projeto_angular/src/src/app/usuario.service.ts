import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario'

  constructor(private http:HttpClient) { }

  public salvar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario)
  }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Nataniel"
    usuario.email = "nataniel.paiva@gmail.com"

    return usuario
  }

  public listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }

}
