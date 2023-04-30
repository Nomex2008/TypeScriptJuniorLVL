//Object

let entity:object = {
     
}


type TypeUser = {
    name:string
    age:number
    adress:string
}

let user:TypeUser

user = {
    name: 'maxobishanka',
    age:15,
    adress:'якась залупа',
}

type adressUser = {
    nameKey:string
    adress:string
    country:string
}

let adress:adressUser

adress = {
    nameKey:`${user.name}`,
    adress:`${user.adress}`,
    country:'UA',
}

let common: TypeUser & adressUser

common = {
    ...adress,
    ...user,
}

//[] / 

let array:string[]

array =['1','2','3']

const numbers:ReadonlyArray<number> = [1,2,3]

type typeArray=[number,string,null]

const newArray:typeArray = [11,'11',null,]

let num:number[]

num = [1,2,3,4]

//numbers[0]='UA'
//numbers[0]=4

//Function
type typeChannelReturn = {
    name:string
}

function getChannel (name:string):typeChannelReturn {
    return {name: name}
}

type typeChanellFunction = (name:string) => typeChannelReturn

const getChanellName:typeChanellFunction = (name:string):typeChannelReturn => {
    return {name: name}
}

const getNumbers = (...numbers:number[]) => {
    return numbers
}
//перезавантаження

function getCar(name:string): string 
function getCar(name:string,price:number): string 

function getCar(name:string,price?:number): string {
    return price ? `назва ${name},  Ціна ${price}`:`назва${name}`
}

const car1 = getCar('bmw')
const car2 = getCar('bmw',111111)


console.log(car1)
console.log(car2)

//class

class car {
    name:string
    price:number

    constructor(name:string, price:number) {
        this.name = name
        this.price = price
    }

    public getInfo():string {
        return `${this.name} - ${this.price}$`
    }
}

new car('BMW',121212).getInfo()

console.log(new car('BMW',121212).getInfo())

//intarface

interface iUser {
    romber:string
}

interface iUserAge extends iUser {
    age:number
}

type tUser = {
    romber:string
}

let roomber: iUserAge 

roomber = {
    romber:"123",
    age:11,
} 

let roomber2: tUser 

roomber2 = {
    romber:"123"
}  

//Enum

enum enumRules {
    Admin,Guest,User
}

const enum enumColors {
    black,pink,green
}

interface IEnumUser {
    role:enumRules
    color: enumColors
}

const enumUser1:IEnumUser = {
    role:enumRules.Admin,
    color: enumColors.black
}
console.log(enumUser1)

//assertions

const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value

console.log(value1,value2,inputElement)

const getLenth = (text:string | null) => {
    return text?.length
}
getLenth(null)
getLenth('maks')

const getLenth2 = (text:string | null) => {
    return text!.length
}

//getLenth2(null)
getLenth2('maks')

//generic
 
function rabb<T>(args: T):T{
    return args
}

const rabb2 = <T>(args: T):T => {
    return args
}

rabb<string>('gg')
rabb<number>(11)

rabb2<string>('gg')
rabb2<number>(11)

class ennit<T> {
    private namee:T

    constructor(namee:T){
        this.namee = namee
    }
    getNamee ():T {
        return this.namee
    }
}
console.log (new ennit<string>('Eniit'))
console.log(new ennit<number>(11))

interface IPair <K,V> {
    key: K
    value: V
}

const pairr1:IPair<string,number> = {
    key:'1',
    value:11
}
const pairr2:IPair<string,string> = {
    key:'1',
    value:'11'
}

type TypeLenghtqq = {
    lenght: number
}

//utility type Pick,Omit,Parial

interface IICar {
    id:string,
    name:string,
    price:number,
    yearBulite:number,
}
interface IICarCreate extends Omit<IICar, 'id'>{}

interface IICarCId extends Pick<IICar, 'id'>{}

interface IICarOptional extends Partial<IICar>{}

interface IICarOnlyRead extends Readonly<IICar>{}

type TypeCarRecord = Record<'name' | 'price', string | number>

//розширені типи 

type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>//yes
type Type2 = TypeIsNumber<string>//no

type TypeBrand = 'bmw' | 'mclaren' | 'Mercedec'
type TypePrice = '$10000' | '$22222' | '$44444'

type TypeAllInfo = `${TypeBrand}${TypePrice}`//"bmw$10000" | "bmw$22222" | "bmw$44444" | "mclaren$10000" | "mclaren$22222" | "mclaren$44444" | "Mercedec$10000" | "Mercedec$22222" | "Mercedec$44444"