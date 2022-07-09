module.exports = class Node {
    value;
    row;
    col;
    connectedNodes = [];

    constructor(value, row, col) {
        this.value = value;
        this.row = row;
        this.col = col;
    }

    addToConnectedNodes(node) {
        this.connectedNodes.push(node);
    }

    connectedToRequiredChars(requiredChars) {
        let foundRequiredCount = 0;
        for(let node of this.connectedNodes) {
            if (node.value === null) {
                return true;
            } else {
                if (requiredChars.has(node.value)) {
                    foundRequiredCount++;
                }
            }
        }

        return foundRequiredCount === requiredChars.size;
    }

    setValue(value) {
        this.value = value;
    }
}

