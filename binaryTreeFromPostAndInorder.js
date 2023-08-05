function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }

  let element = postorder.pop();
  let root = new TreeNode(element);
  let index;
  for (let j = 0; j < inorder.length; j++) {
    if (inorder[j] === root.val) {
      index = j;
      break;
    }
  }
  root.right = buildTree(inorder.slice(index + 1), postorder);
  root.left = buildTree(inorder.slice(0, index), postorder);
  return root;
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));

// INORDER ==> LEFT ROOT RIGHT
// POSTORDER  ==> LEFT RIGHT ROOT
