class Node {
	constructor(val = 0) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array) {
		this.root = this.buildTree(array);
	}

	buildTree(array) {
    array = [...new Set(array)].sort((a, b) => a - b); // Remove Duplicates and sort
		return this.BSTFromArray(array, 0, array.length - 1);
    
		// for (let i = 1; i < array.length; i++) {
      // 	let curr = this.root;
		// 	while (curr) {
      // 		if (array[i] < curr.val) {
		// 			if (!curr.left) {
		// 				curr.left = new Node(array[i]);
    //         break;
		// 			}
		// 			curr = curr.left;
		// 		} else {
      // 			if (!curr.right) {
        // 				curr.right = new Node(array[i]);
        //         break;
		// 			}
		// 			curr = curr.right;
		// 		}
		// 	}
		// }
	}
  
  BSTFromArray(array, start, end) {
    if (start > end) return null;

    let mid = Math.trunc((start + end) / 2);
    let root = new Node(array[mid]);

    root.left = this.BSTFromArray(array, start, mid - 1);
    root.right = this.BSTFromArray(array, mid + 1, end);

    return root;
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

const newTree = new Tree([7, 1, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(newTree.root)