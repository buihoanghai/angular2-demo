import { expect } from 'chai';
import {DemoService} from "./demo.service";
describe('Demo Service', () => {
  describe('findClosestNumber', () => {
    it('should return correct value', () => {
      var demo =new DemoService();
      var arr= [1, 5, 3, 8, 12, 3, 18, 4, 1, 30];
      expect(demo.findClosestNumber(arr,0)).to.equal(3);
    });
  });
  describe('findFirstDuplicated', () => {
    it('should return correct value', () => {
    var demo =new DemoService();
    var arr= [4, 5, 3, 8, 12, 3, 18, 4, -2, 30];
    expect(demo.findFirstDuplicated(arr)).to.equal(-2);
    });
  });
}
