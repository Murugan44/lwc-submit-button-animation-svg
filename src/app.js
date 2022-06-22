import { LightningElement } from "lwc";

export default class App extends LightningElement {
  submit(e){
    var btn = this.template.querySelector('.submitter')
    btn.classList.add('clicked')
  }
}
