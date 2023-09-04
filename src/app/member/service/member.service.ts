import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Member } from '../../model/Member';
// @ts-ignore
import * as memberImage from './../../data/image.json';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  image: any = memberImage;
  constructor(private router: Router ) {}

  private dataChangedSubject: Subject<void> = new Subject<void>();
  private dataKey = 'members';
  private dataCurrentUser: string = 'currentUser';
  private dataList: Member[] = JSON.parse(localStorage.getItem(this.dataKey) || '[]');
  private currentUser: Member = JSON.parse(localStorage.getItem(this.dataCurrentUser) || '{}');

  private updateMemberList(): void {
    localStorage.setItem(this.dataKey, JSON.stringify(this.dataList));
    this.dataChangedSubject.next();
  }

  private updateCurrentUser(): void {
    localStorage.setItem(this.dataCurrentUser, JSON.stringify(this.currentUser));
    this.dataChangedSubject.next();
  }

  insertData(newMember: Member): void {
    this.currentUser = newMember;
    this.dataList.push(newMember);

    this.updateCurrentUser();
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
  logout(): void {
    this.router.navigate(['/signin']);
  }

  getMemberList(): Member[] {
    return [...this.dataList];
  }

  // @ts-ignore
  connectMember(email: string, password: string): Member|null {
    const index = this.dataList.findIndex(member=> member.email === email && member.password === password);
    if(index !== -1){
      localStorage.setItem("currentUser", JSON.stringify(this.dataList[index]));
      this.router.navigateByUrl("");
      return this.dataList[index];
    }
  }
  // @ts-ignore
  getCurrentUser(): Member|null|undefined {
    // @ts-ignore
    return JSON.parse(localStorage.getItem("currentUser"));
  }
  // @ts-ignore
  getMemberById(id: number): Member|undefined {
    const index = this.dataList.findIndex(member=> member.id === id);
    if (index !== -1) {
      return this.dataList[index];
    }
    return undefined;
  }
  // @ts-ignore
  getMemberByEmail(email: string): Member|null|undefined {
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
  getRandomImage(): string {
    let indice: number = this.getRandomNumber(3);
    return this.image[`${indice}`];
  }

  getNewId(): number {
    if(this.getMemberList().length == 0 || this.getMemberList() == null)
    {
      return 1;
    }
    return this.getMemberList()[this.getMemberList().length - 1].id + 1;
  }

}
