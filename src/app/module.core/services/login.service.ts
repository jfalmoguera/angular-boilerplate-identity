import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/entities';


@Injectable()
export class LoginService {

  constructor() { }

  login(usuario: string, password: string): Observable<User> {

    // return this.hhtpClient.post<Usuario>('http://zetes.api.log......', { usuario, password: password });

    if (usuario === 'zetes' && password === 'zetes') {
      return of(new User({
        name: 'Jose',
        surname: 'Almoguera',
        email: 'jalmoguera@bravent.net'
      }));
    }

    return of(null);
  }
}
