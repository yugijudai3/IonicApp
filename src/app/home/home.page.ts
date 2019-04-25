import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){
    //画面に表示
    window.onload = function(){
      createcalender();
    }
  }
}

function createcalender(){
    var monthcontent:HTMLElement = <HTMLElement>document.getElementById("month");
    var datenow = new Date();
    var yearnow = datenow.getFullYear();
    var stage = 0;

  for(var j=1; j<=5; j++){
    var date:HTMLElement = <HTMLElement>document.createElement("ion-row");
    var week:HTMLElement = <HTMLElement>document.getElementById("calender");

    date.setAttribute("id", "week"+j);
    date.classList.add("week");
    week.appendChild(date);

    for(var i=0; i<=6; i++){
      var weeknum:HTMLElement = <HTMLElement>document.getElementById("week"+j);
      var day:HTMLElement = <HTMLElement>document.createElement("ion-col");
      var span:HTMLElement = <HTMLElement>document.createElement("span");
      
      span.classList.add(i.toString());
      weeknum.appendChild(day);
      day.appendChild(span);
    }
  }

  for(var i=0; i<=30; i++){
    var daynow = new Date(yearnow, 3, i+1);
    var select = document.getElementsByClassName(daynow.getDay().toString());

    console.log(daynow);
    select[stage].textContent = (i+1).toString();
    

    if(daynow.getDay().toString() == "6"){
      stage += 1;
    }
  }
}