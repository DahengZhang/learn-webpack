import * as _ from "lodash"

class TestTypscript {
   chirping: string;
   constructor(message: string) {
      this.chirping = message;
   }
   chirp() {
      return `Hello~${this.chirping}`
   }
}

console.log(_.chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2))

const newTest = new TestTypscript('张大亨');

console.log(newTest.chirp());
