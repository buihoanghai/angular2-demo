export class DemoService {
	 private FIRST_INDEX = 0;
    constructor() {
    }
    findClosestNumber(numbers: number[], losestNumber: number): number {
        let diff=[];

        for (let indexLoop of numbers) {
            let diffTemp = Math.abs(numbers[indexLoop]) - Math.abs(losestNumber);
            diff.push(diffTemp);
        }

        diff.sort(function(a, b){return a-b});

        return diff[this.FIRST_INDEX];
    }
    findFirstDuplicated(numbers: number[]){
    	var duplicatedNumber=0;
        for (let indexLoop in numbers) {
            for (let indexLoop2 in numbers) {
                if(indexLoop !== indexLoop2){
                    if(numbers[indexLoop]==numbers[indexLoop2]){
                        duplicatedNumber= numbers[indexLoop];
                        break;
                    }
                }
            }
        }
        return duplicatedNumber;
    }


   
}

