import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public num1:number;
  public num2:number;
  public result:any;

  jumlah() {

    var angka1 = this.num1;
    var angka2 = this.num2;

    if(angka1 == null){
        this.result = 'Angka pertama tidak ada nominal';
    }else if(angka2 == null){
        this.result = 'Angka kedua tidak ada nominal';
    }else{
        var hasil = (this.num1) + (this.num2);
        this.result = 'Hasilnya adalah : '+hasil;
    }
  }

  kurang() {
    var angka1 = this.num1;
    var angka2 = this.num2;

    if(angka1 == null){
        this.result = 'Angka pertama tidak ada nominal';
    }else if(angka2 == null){
        this.result = 'Angka kedua tidak ada nominal';
    }else{
        var hasil = (this.num1) - (this.num2);
        this.result = 'Hasilnya adalah : '+hasil;
    }
  }

  kali() {
    var angka1 = this.num1;
    var angka2 = this.num2;

    if(angka1 == null){
        this.result = 'Angka pertama tidak ada nominal';
    }else if(angka2 == null){
        this.result = 'Angka kedua tidak ada nominal';
    }else{
        var hasil = (this.num1) * (this.num2);
        this.result = 'Hasilnya adalah : '+hasil;
    }
  }

  bagi() {
    var angka1 = this.num1;
    var angka2 = this.num2;

    if(angka1 == null){
        this.result = 'Angka pertama tidak ada nominal';
    }else if(angka2 == null){
        this.result = 'Angka kedua tidak ada nominal';
    }else{
        var hasil = (this.num1) / (this.num2);
        this.result = 'Hasilnya adalah : '+hasil;
    }
  }

}
