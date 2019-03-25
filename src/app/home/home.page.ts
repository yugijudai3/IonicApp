import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){
    var datenow = new Date();
    var yearnow = datenow.getFullYear();
    var monthnow = datenow.getMonth();
    var firstday = new Date(yearnow, monthnow, 1);
    


    //画面に表示
    window.onload = function(){
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
    
          span.textContent = i.toString();
          day.classList.add(i.toString());
          weeknum.appendChild(day);
          day.appendChild(span);
        }
      }
      console.log(firstday.getDay());
    }
  }
}

function getcalender(year, month){

}