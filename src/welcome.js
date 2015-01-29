export class Welcome{
  constructor(){
    this.heading =  'Bienvenido a mi primer app con Aurelia';
    this.firstName = 'Alexis';
    this.lastName = 'Villegas';
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Bievenido, ${this.fullName}!`)
  }
}
