const Solver = require('./Solver');

const words = ["blow","flew","font","gaudy","jay","polka","prim","quip","shelf","toxic","vole","webs"];
const letters = ['s', 'v', 't', 'j', 'w', 'x', 'g', 'q', 'c'];

test('can create solver', () => {
    const solver = new Solver(words, letters);
    expect(solver.availableLetters).toEqual(expect.not.arrayContaining(letters));
    const solutionGraph = solver.requiredGraph;

    expect(Array.from(solutionGraph.get('a'))).toEqual(expect.arrayContaining(['g', 'u', 'j', 'y', 'k']));
    expect(Array.from(solutionGraph.get('b'))).toEqual(expect.arrayContaining(['l', 'e', 's']));
    expect(Array.from(solutionGraph.get('c'))).toEqual(expect.arrayContaining(['i']));
    expect(Array.from(solutionGraph.get('d'))).toEqual(expect.arrayContaining(['u', 'y']));
    expect(Array.from(solutionGraph.get('e'))).toEqual(expect.arrayContaining(['l', 'w', 'h', 'b']));
    expect(Array.from(solutionGraph.get('f'))).toEqual(expect.arrayContaining(['l', 'o']));
    expect(Array.from(solutionGraph.get('g'))).toEqual(expect.arrayContaining(['a']));
    expect(Array.from(solutionGraph.get('h'))).toEqual(expect.arrayContaining(['s', 'e']));
    expect(Array.from(solutionGraph.get('i'))).toEqual(expect.arrayContaining(['p', 'r', 'c', 'u', 'x', 'm']));
    expect(Array.from(solutionGraph.get('j'))).toEqual(expect.arrayContaining(['a']));
    expect(Array.from(solutionGraph.get('k'))).toEqual(expect.arrayContaining(['a', 'l']));
    expect(Array.from(solutionGraph.get('l'))).toEqual(expect.arrayContaining(['b', 'e', 'f', 'k', 'o']));
    expect(Array.from(solutionGraph.get('m'))).toEqual(expect.arrayContaining(['i']));
    expect(Array.from(solutionGraph.get('n'))).toEqual(expect.arrayContaining(['t', 'o']));
    expect(Array.from(solutionGraph.get('o'))).toEqual(expect.arrayContaining(['p', 't', 'f', 'v', 'w', 'x', 'l', 'n']));
    expect(Array.from(solutionGraph.get('p'))).toEqual(expect.arrayContaining(['r', 'i', 'o']));
    expect(Array.from(solutionGraph.get('q'))).toEqual(expect.arrayContaining(['u']));
    expect(Array.from(solutionGraph.get('r'))).toEqual(expect.arrayContaining(['i', 'p']));
    expect(Array.from(solutionGraph.get('s'))).toEqual(expect.arrayContaining(['b', 'h']));
    expect(Array.from(solutionGraph.get('t'))).toEqual(expect.arrayContaining(['n', 'o']));
    expect(Array.from(solutionGraph.get('u'))).toEqual(expect.arrayContaining(['a', 'q', 'd', 'i']));
    expect(Array.from(solutionGraph.get('v'))).toEqual(expect.arrayContaining(['o']));
    expect(Array.from(solutionGraph.get('w'))).toEqual(expect.arrayContaining(['e', 'o']));
    expect(Array.from(solutionGraph.get('x'))).toEqual(expect.arrayContaining(['i', 'o']));
    expect(Array.from(solutionGraph.get('y'))).toEqual(expect.arrayContaining(['a', 'd']));


    const solution = solver.solution;
    expect(solution[0][0].value).toEqual('s');
    expect(solution[0][1].value).toEqual(null);
    expect(solution[0][2].value).toEqual('v');
    expect(solution[0][4].value).toEqual('t');
    expect(solution[2][0].value).toEqual('j');
    expect(solution[2][2].value).toEqual('w');
    expect(solution[2][4].value).toEqual('x');
    expect(solution[4][0].value).toEqual('g');
    expect(solution[4][2].value).toEqual('q');
    expect(solution[4][4].value).toEqual('c');

    expect(solution[0][0].connectedNodes).toEqual(expect.arrayContaining([solution[0][1], solution[1][1], solution[1][0]]));
});

test('solutionContainsLetter works', () => {
    const solver = new Solver(words, letters);
    let containsLetter = solver.solutionContainsLetter('s');
    expect(containsLetter).toEqual(true);

    containsLetter = solver.solutionContainsLetter('a');
    expect(containsLetter).toEqual(false);
});

test('solver', () => {
    const solver = new Solver(words, letters);
    solver.solve();
    const solution = solver.foundSolution;

    expect(solution[0][0]).toEqual('s');
    expect(solution[0][1]).toEqual('b');
    expect(solution[0][2]).toEqual('v');
    expect(solution[0][3]).toEqual('f');
    expect(solution[0][4]).toEqual('t');

    expect(solution[1][0]).toEqual('h');
    expect(solution[1][1]).toEqual('e');
    expect(solution[1][2]).toEqual('l');
    expect(solution[1][3]).toEqual('o');
    expect(solution[1][4]).toEqual('n');

    expect(solution[2][0]).toEqual('j');
    expect(solution[2][1]).toEqual('k');
    expect(solution[2][2]).toEqual('w');
    expect(solution[2][3]).toEqual('p');
    expect(solution[2][4]).toEqual('x');

    expect(solution[3][0]).toEqual('y');
    expect(solution[3][1]).toEqual('a');
    expect(solution[3][2]).toEqual('u');
    expect(solution[3][3]).toEqual('i');
    expect(solution[3][4]).toEqual('r');

    expect(solution[4][0]).toEqual('g');
    expect(solution[4][1]).toEqual('d');
    expect(solution[4][2]).toEqual('q');
    expect(solution[4][3]).toEqual('m');
    expect(solution[4][4]).toEqual('c');
});