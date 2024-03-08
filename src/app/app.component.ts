import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes!: Observable<Componente[]>;
  constructor(
    private platform: Platform,
    private dataService: DataService

  ) {
    this.initializeApp();
  }
   initializeApp() {
    this.platform.ready().then(() => {
      //StatusBar.setStyle({ style: Style.Dark });
      if (Capacitor.isPluginAvailable('StatusBar')) { StatusBar.show() };
      SplashScreen.hide();
      this.componentes = this.dataService.getMenuOpts();
    });
  }
}
