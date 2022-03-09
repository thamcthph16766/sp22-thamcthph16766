export{}

type Product = {
    id: number,
    name: string,
    price: number,
}
type Product2 = {
    id: number,
    name: string,
    status: boolean,
}
type MergeType = Product | Product2;

const a: number = 10;
const b: number = 20;

const myName: string = "Hong Tham";
const myAge: number = 20;
const myStatus: boolean = true;
const myObj: Product = {id: 1, name: "Tham", price: 10};
const arrName: number[] = [1,2,3];
const arrString: string[] = ["a","b","c"];
const arrObj: MergeType[] = [
    {id: 1, name: "Tham", price: 10},
    {id: 1, name: "Tham", status: true},
];

function sum(numA: number, numB: number){
    return numA + numB;
}
console.log(sum(10, 20))