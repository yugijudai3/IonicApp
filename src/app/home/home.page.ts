import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

}

window.onload = function(){
  for(var j=2; j<=6; j++){
    var date:HTMLElement = <HTMLElement>document.createElement("ion-row");
    var week:HTMLElement = <HTMLElement>document.getElementById("calender");

    date.setAttribute("id", "week"+j);
    date.classList.add("week");
    week.appendChild(date);

    for(var i=0; i<=6; i++){
      var week2:HTMLElement = <HTMLElement>document.getElementById("week"+j);
      var day:HTMLElement = <HTMLElement>document.createElement("ion-col");

      day.textContent = i.toString();
      week2.appendChild(day);
    }
  }
}