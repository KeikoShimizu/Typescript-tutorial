// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

import e from "express";

//Classes
class Invoice {
    // client: string;
    // details: string;
    // amount: number;

    //Classの中と外で使えるものを分ける　public = 中外可能　provate=このclass functionの中のみ可能
    client: string;
    private details: string;
    public amount: number;

    constructor(c:string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} is owns $${this.amount} for ${this.details}`
    }
}
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('mako', 'work on mako website', 440);

//すでに決まったclassをarrayに入れるのであれば、classnameを指定して入れられる　class Invoice をinvoices arranに入れる
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//inv.detailはprovateなのでここでは直に使えない。ただfunmat() funtionですでに含まれている
invoices.map(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
})



const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//input
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})