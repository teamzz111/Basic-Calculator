import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calc';
  operation = '';
  state = 'initial';
  add(numb: string) {
    (this.state === 'calculated') ? this.clean(numb) : this.operation = this.operation + (numb);
  }

  calc() {
    try {
      if (this.operation.search('/0') > 0){
        throw new Error('No se puede dividir en cero');
      }
      this.operation = eval(this.operation);
    } catch (e) {
      alert('Escriba bien los números.');
    }
    this.state = 'calculated';
  }

  clean(numb: string){
    this.state = 'initial';
    this.operation = '';
    if(numb){
      this.add(numb);
    }
  }
}
