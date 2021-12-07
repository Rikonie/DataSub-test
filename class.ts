abstract class AClass {
    Numbers: Array<number>;

    private fill(n: number): void {
        this.Numbers = new Array<number>(n);
        let randomInteger = (min: number, max: number) => {
            let rand: number = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        };
        for (let i = 0; i < n; i++) {
            this.Numbers[i] = randomInteger(i, 100);
        }
    };

    factorial(): Array<number> {
        let factorialNumber = 1;
        let factorialArray: Array<number> = new Array<number>(this.Numbers.length);
        for (let j = 0; j < this.Numbers.length; j++) {
            for (let i: number = this.Numbers[j]; i >= 1; i--) {
                factorialNumber *= i;
                factorialArray[j] = factorialNumber;
            }
        }
        return factorialArray;
    };

    abstract sort(): Array<number>

    constructor(n: number) {
        this.fill(n);
    }
}

function swap (arr: Array<number>, a: number, b: number) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const Compare = {
    lessThan: -1,
    biggerThan: 1
};

function defaultCompare(a: number, b: number) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.lessThan : Compare.biggerThan;
}

class Class1 extends AClass {
    sort(): Array<number> {

        function bubbleSort(arr: Array<number>, compare = defaultCompare) {
            const length:number = arr.length;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - 1 - i; j++) {
                    if (compare(arr[j], arr[j + 1]) === Compare.biggerThan) {
                        swap(arr, j, j + 1);
                    }
                }
            }
            return arr;
        }

        bubbleSort(this.Numbers);
        return this.factorial();
    }
}

class Class2 extends AClass {
    sort(): Array<number> {
        function selectionSort(arr: Array<number>, compare = defaultCompare) {
            const length:number = arr.length;
            let minIndex:number;
            for (let i = 0; i < length - 1; i++) {
                minIndex = i;
                for (let j = i; j < length; j++) {
                    if (compare(arr[minIndex], arr[j]) === Compare.biggerThan) {
                        minIndex = j;
                    }
                }
                if (i !== minIndex) {
                    swap(arr, i, minIndex);
                }
            }
            return arr;
        }
        selectionSort (this.Numbers);
        return this.factorial();
    }
}
