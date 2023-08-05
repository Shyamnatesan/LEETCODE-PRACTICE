function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return [];
  }

  let root = new TreeNode(preorder[0]);
  let index;
  for (let j = 0; j < inorder.length; j++) {
    if (inorder[j] === root.val) {
      index = j;
      break;
    }
  }
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
