class TestTypscript {
   chirping: string;
   constructor(message: string) {
      this.chirping = message;
   }
   chirp() {
      return `Hello~${this.chirping}`
   }
}

const newTest = new TestTypscript('张大亨');

console.log(newTest.chirp());
