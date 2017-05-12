export class DemoService {
    constructor() {
    }
    findClosestNumber(numbers: number[]): number {
        var closestVal=9999999;
        var temp;
        for (let i of numbers) {
            if(closestVal>Math.abs(numbers[i])){
                closestVal=Math.abs(numbers[i]);
                temp=numbers[i];
            }
        }
        return temp;
    }
    findFirstDuplicated(numbers: number[]){
    	var duplicatedNumber=0;
        var flag=false;
        var browseNumbers:number[]=[];
        for (let i in numbers) {
            for (let j in browseNumbers) {
                    if(numbers[i]===browseNumbers[j]){
                        duplicatedNumber= numbers[i];
                        flag=true;
                        break;
                    }
            }
            if(flag){
                break;
            }
            browseNumbers.push(numbers[i]);
        }
        return duplicatedNumber;
    }


   
}

