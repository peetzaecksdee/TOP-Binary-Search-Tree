class Node {
	constructor(val = 0) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	buildTree(array) {
		this.root = new Node(array[0]);
		array = [...new Set(array)]; // Remove Duplicates
		for (let i = 1; i < array.length; i++) {
			let curr = this.root;
			while (curr) {
				if (array[i] < curr.val) {
					if (!curr.left) {
						curr.left = new Node(array[i]);
            break;
					}
					curr = curr.left;
				} else {
					if (!curr.right) {
						curr.right = new Node(array[i]);
            break;
					}
					curr = curr.right;
				}
			}
		}
	}
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node == null) {
		return;
	}
	if (node.right != null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.val}`);
	if (node.left != null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

const newTree = new Tree();
newTree.buildTree([7, 1, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(newTree.root)