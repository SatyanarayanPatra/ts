let a1: string = '1';
a1 = '10';

function add(a: number, b): number {
	return a * b;
}

let answer: number = add(1, 'abc');
console.log(answer);
