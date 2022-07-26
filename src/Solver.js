import Node from './Node';

export default class Solver {
    words;
    availableLetters = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']);
    requiredGraph = new Map();
    startingLetters;
    solution = new Array(5).fill(null).map(() => new Array(5).fill(null));
    editable = [
        [false, true, false, true, false],
        [true, true, true, true, true],
        [false, true, false, true, false],
        [true, true, true, true, true],
        [false, true, false, true, false]
    ];

    foundSolution = new Array(5).fill(null).map(() => new Array(5).fill(null));

    constructor(words, startingLetters) {
        this.words = words;
        this.startingLetters = startingLetters;
        
        this.removeStartingLettersFromLetters();
        this.initialiseGraph();
        this.createRequiredGraph();
        this.initialiseSolution();
        this.generateConnectedNodes();
    }

    removeStartingLettersFromLetters() {
        for(let startingLetter in this.startingLetters) {
            this.availableLetters.delete(startingLetter);
        }
    }

    initialiseGraph() {
        for(let asciiCode = 97; asciiCode <= 121; asciiCode++) {
            this.requiredGraph.set(String.fromCharCode(asciiCode), new Set());
        }
    }

    createRequiredGraph() {
        for(const word of this.words) {
            this.addWordToGraph(word);
        }
    }

    addWordToGraph(word) {
        for(let charIndex = 0; charIndex < word.length - 1; charIndex++) {
            this.addCharsToGraph(word, charIndex);
        }
    }

    addCharsToGraph(word, charIndex) {
        let current = this.requiredGraph.get(word.charAt(charIndex));
        current.add(word.charAt(charIndex + 1));
        this.requiredGraph.set(word.charAt(charIndex), current);

        current = this.requiredGraph.get(word.charAt(charIndex + 1));
        current.add(word.charAt(charIndex));
        this.requiredGraph.set(word.charAt(charIndex + 1), current);
    }

    initialiseSolution() {
        for(let row = 0; row < 5; row++) {
            for(let col = 0; col < 5; col++) {
                this.solution[row][col] = new Node(null, row, col);
            }
        }

        for(let index = 0; index < 9; index++) {
            let row = Math.floor(index/3) * 2;
            let col = (index%3) * 2;
            this.solution[row][col].setValue(this.startingLetters[index]);
        }
    }

    generateConnectedNodes() {
        for(let row = 0; row < 5; row++) {
            for(let col = 0; col < 5; col++) {
                for(let rowOffset = -1; rowOffset <= 1; rowOffset++){
                    for(let colOffset = -1; colOffset <= 1; colOffset++){
                        if((rowOffset === 0 && colOffset === 0)
                                || (rowOffset+row < 0) || (colOffset+col < 0)
                                    || (rowOffset+row > 4) || (colOffset+col > 4)){
                            continue;
                        }
                        else {
                            this.solution[row][col].addToConnectedNodes(this.solution[row+rowOffset][col+colOffset]);
                        }
                    }
                }
            }
        }
    }

    solve() {
        for(let row = 0; row < 5; row++) {
            for(let col = 0; col < 5; col++) {
                if(!this.editable[row][col]) continue;
                if(this.solution[row][col].value === null) {
                    for(const letter of this.availableLetters) {
                        if(this.possible(row, col, letter)) {
                            this.solution[row][col].value = letter;
                            this.solve();
                            this.solution[row][col].value = null;
                        }
                    }
                    this.solution[row][col].value = null;
                    return;
                }
            }
        }
        console.log("solution found");
        this.extractSolution();
        return;
    }

    possible(row, col, letter) {
        if(this.solutionContainsLetter(letter)) return false;

        const solutionCopy = this.copySolutionArray();
        solutionCopy[row][col].value = letter;

        return this.validSolution(solutionCopy); 
    }

    solutionContainsLetter(possibleLetter) {
        for(let row = 0; row < 5; row++){
            for(let col = 0; col < 5; col++){
                if(this.solution[row][col].value != null && this.solution[row][col].value === possibleLetter){
                    return true;
                }
            }
        }
        return false;
    }

    validSolution(solutionCopy) {
        for(let row = 0; row < 5; row++) {
            for(let col = 0; col < 5; col++) {
                let currentNode = solutionCopy[row][col];
                if(currentNode.value === null) continue;
                if(!currentNode.connectedToRequiredChars(this.requiredGraph.get(currentNode.value))){
                    return false;
                }
            }
        }
        return true;
    }

    copySolutionArray() {
        let copy = [];
        for(let row = 0; row < 5; row++){
            copy.push([...this.solution[row]]);
        }
        return copy;
    }

    extractSolution() {
        for(let row = 0; row < 5; row++) {
            for(let col = 0; col < 5; col++) {
                this.foundSolution[row][col] = this.solution[row][col].value;
            }
        }
    }
}