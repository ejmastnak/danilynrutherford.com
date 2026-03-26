export function condenseAst(ast) {
  if (!ast) return "";

  function extract(node) {
    if (!node) return "";

    // If it's an array of nodes, process all
    if (Array.isArray(node)) {
      return node.map(extract).join("");
    }

    // If it's a text node
    if (typeof node.text === "string") {
      return node.text;
    }

    // If it has children, recurse
    if (Array.isArray(node.children)) {
      return node.children.map(extract).join("");
    }

    return "";
  }

  return extract(ast);
}
