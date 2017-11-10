import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageProvider {
  private token: string;
  constructor(private storage: Storage) {

  }

  getToken(): string{
    return this.token;
  }

  setToken(data: string){
    this.token = data;
    this.storage.set('x-auth-token', data);
  }
}
