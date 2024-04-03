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

		function recursiveBuild(start, end) {
			if (start > end) return null;

			let mid = Math.trunc((start + end) / 2);
			let root = new Node(array[mid]);

			root.left = recursiveBuild(start, mid - 1);
			root.right = recursiveBuild(mid + 1, end);

			return root;
		}

		return recursiveBuild(0, array.length - 1);

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

	insert(val) {
		(function recursive(root) {
			if (!root) return new Node(val);

			if (root.val > val) {
				root.left = recursive(root.left);
			} else {
				root.right = recursive(root.right);
			}
			return root;
		})(this.root);
	}

	delete(defaultValue) {
		(function recursive(root, val = defaultValue) {
			if (!root) return null;

			if (root.val > val) {
				root.left = recursive(root.left);
			} else if (root.val < val) {
				root.right = recursive(root.right);
			} else {
				if (!root.left) {
					return root.right;
				} else if (!root.right) {
					return root.left;
				}

				let node = root.right;
				while (node.left) {
					node = node.left;
				}
				root.val = node.val;
				root.right = recursive(root.right, node.val);
			}

			return root;
		})(this.root);
	}

	find(val) {
		function recursive(root) {
			if (!root) return null;
			if (root.val === val) return root;

			if (root.val > val) {
				return recursive(root.left);
			}
			return recursive(root.right);
		}

		return recursive(this.root);
	}
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node == null) {
		console.log(null);
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
// prettyPrint(newTree.root);
newTree.insert(15);
newTree.insert(12);
// prettyPrint(newTree.root);
newTree.delete(4);
prettyPrint(newTree.root);
prettyPrint(newTree.find(5));
prettyPrint(newTree.find(4));
