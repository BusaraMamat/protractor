import {Component} from '@angular/core';
import {adapter} from './upgrader';

@Component({
  selector: 'ng2',
  templateUrl: './html/ng2.html',
  directives: [adapter.upgradeNg1Component('ng1')]
})
class Ng2Component {
  fido: string = 'Fido';
  callCount: number = 0;
  clickButton = () => {
    setTimeout(() => {
      this.callCount++;
    }, 1000);
  };
}

export const ng2 = adapter.downgradeNg2Component(Ng2Component);
