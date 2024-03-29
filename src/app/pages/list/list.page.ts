import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;
  dataService: any;
  constructor() { }

  ngOnInit() {
   // this.usuarios = this.dataService.getHeroes();

  }
  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }


}
