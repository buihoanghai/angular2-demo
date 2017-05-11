import { expect } from 'chai';
import {DemoService} from "./demo.service";
describe('Demo Service', () => {
  it('should  findClosestNumber', () => {
  	var demo =new DemoService();
  	var arr= [1, 5, 3, 8, 12, 3, 18, 4, 1, 30];
    expect(demo.findClosestNumber(arr,0)).to.equal(1);
  });
  it('should findFirstDuplicated', () => {
  	var demo =new DemoService();
  	var arr= [1, 5, 3, 8, 12, 3, 18, 4, 1, 30];
    expect(demo.findFirstDuplicated(arr)).to.equal(1);
  });

});

