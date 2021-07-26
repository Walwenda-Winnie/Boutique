import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from '@app/core/services/notification.service';
import { Observable, Subject } from 'rxjs';



const delivery = {
   
    
    scheduled: localStorage.getItem('sm-scheduled') == 'true',
    notScheduled: localStorage.getItem('sm-not-scheduled') == 'true',
    shipped: localStorage.getItem('sm-shipped') == 'true',
    delivered: localStorage.getItem('sm-delivered') == 'true',
     shortcutOpen: false,
    isMobile: 	(/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    device: '',
  mobileViewActivated: false,
  menuCollapsed: false,
    menuMinified: false,
  };

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
    isActivated:boolean;
  delivery:any;

  private subject:Subject<any>;

  trigger() {
    this.processBody(this.delivery);
    this.subject.next(this.delivery)
  }

  subscribe(next, err?, complete?) {
    return this.subject.subscribe(next, err, complete)
  }
  
  constructor(private http: HttpClient, private notificationService: NotificationService) {

    this.subject = new Subject();
    this.delivery = delivery;
    this.trigger();

   
   }
  



  API='http://localhost:8080';
  public registerDelivery(deliveryData){
      return this.http.post(this.API+'/registerDelivery', deliveryData);
  }

  public getDeliveries(){
      return this.http.get(this.API+'/getDeliveries');
  }
  public deleteDelivery(id){
      return this.http.delete(this.API +'/deleteDelivery?id='+id);

  }
  public updateDelivery(delivery){
      return this.http.put(this.API +'/updateDelivery',delivery);
  }

  onScheduled() {
    this.delivery.scheduled = !this.delivery.scheduled;
    if (this.delivery.scheduled == false) {
      this.delivery.shipped = false;
      this.delivery.notScheduled = false;
    }
    this.dumpStorage();
    this.trigger()
  }
  
  onNotScheduled() {
    this.delivery.notScheduled = !this.delivery.notScheduled;

    if (this.delivery.notScheduled) {
      this.delivery.scheduled = true;
    } else {
      this.delivery.shipped = false;
    }
    this.dumpStorage();
    this.trigger()
  }

  onShipped() {
    this.delivery.shipped = !this.delivery.shipped;
    if (this.delivery.shipped) {
      this.delivery.scheduled = true;
      this.delivery.notScheduled = true;
    }
    this.dumpStorage();
    this.trigger()
  }
  onDelivered() {
    this.delivery.delivered = !this.delivery.delivered;
    this.dumpStorage();
    this.trigger()
  }

  dumpStorage() {
    
    localStorage.setItem('sm-scheduled', this.delivery.scheduled);
    localStorage.setItem('sm-not-scheduled', this.delivery.notScheduled);
    localStorage.setItem('sm-shipped', this.delivery.shipped);
    localStorage.setItem('sm-delivered', this.delivery.delivered);
    
  }

  factoryReset() {
    this.notificationService.smartMessageBox({
      title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
      content: "Would you like to RESET all your saved widgets and clear LocalStorage?",
      buttons: '[No][Yes]'
    }, (ButtonPressed) => {
      if (ButtonPressed == "Yes" && localStorage) {
        localStorage.clear();
        location.reload()
      }
    });
  }


  processBody(state) {
    let $body = $('body');
    $body.toggleClass('scheduled', state.scheduled);
    $body.toggleClass('not-scheduled', state.notScheduled);
    $body.toggleClass('shipped', state.shipped);
    $body.toggleClass('delivered', state.delivered);
    


    state.mobileViewActivated = $(window).width() < 979;
    $body.toggleClass('mobile-view-activated', state.mobileViewActivated);
    if (state.mobileViewActivated) {
      $body.removeClass('minified');
    }

    if(state.isMobile){
      $body.addClass("mobile-detected");
    } else {
      $body.addClass("desktop-detected");
    }

    if (state.menuOnTop) $body.removeClass('minified');


    if (!state.menuOnTop) {
      $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
      $body.toggleClass("hidden-menu", state.menuCollapsed);
      $body.removeClass("minified");
    } else if (state.menuOnTop && state.mobileViewActivated) {
      $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
      $body.toggleClass("hidden-menu", state.menuCollapsed);
      $body.removeClass("minified");
    }

    if(state.menuMinified && !state.menuOnTop && !state.mobileViewActivated){
       $body.addClass("minified");
       $body.removeClass("hidden-menu");
       $body.removeClass("hidden-menu-mobile-lock");
    }
  }



}