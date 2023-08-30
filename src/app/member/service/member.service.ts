import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Member } from '../../model/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor() {}

  private dataChangedSubject: Subject<void> = new Subject<void>();
  private dataKey = 'members';
  private dataList: Member[] = JSON.parse(localStorage.getItem(this.dataKey) || '[]');

  private updateMemberList(): void {
    localStorage.setItem(this.dataKey, JSON.stringify(this.dataList));
    this.dataChangedSubject.next();
  }

  insertData(newMember: Member): void {
    this.dataList.push(newMember);
    this.updateMemberList();
  }

  // Méthode pour supprimer un membre en utilisant son email
  deleteMember(email: string): void {
    const index = this.dataList.findIndex(member => member.email === email);
    if (index !== -1) {
      this.dataList.splice(index, 1);
      this.updateMemberList();
    }
  }

  getMemberList(): Member[] {
    return [...this.dataList];
  }

  // @ts-ignore
  connectMember(email: string, password: string): Member|null {
    const index = this.dataList.findIndex(member=> member.email === email && member.password === password);
    if(index !== -1){
      localStorage.setItem("currentUser", JSON.stringify(this.dataList[index]));
      return this.dataList[index];
    }
  }
  // @ts-ignore
  getCurrentUser(): Member|null {
    // @ts-ignore
    return JSON.parse(localStorage.getItem("currentUser"));
  }
  // @ts-ignore
  getMemberById(id: number): Member|null {
    const index = this.dataList.findIndex(member=> member.id === id);
    if (index !== -1) {
      return this.dataList[index];
    }
  }
  // @ts-ignore
  getMemberByEmail(email: string): Member|null {
    const index = this.dataList.findIndex(member=> member.email === email);
    if (index !== -1) {
      return this.dataList[index];
    }
  }

  getMemberChangedObservable(): Observable<void> {
    return this.dataChangedSubject.asObservable();
  }

  getRandomNumber(max: number): number {
    // Génère un nombre aléatoire entre 0 (inclus) et max (inclus)
    return Math.floor(Math.random() * (max + 1));
  }

  getNewId(): number {
    return this.getMemberList()[this.getMemberList().length - 1].id + 1;
  }

}
