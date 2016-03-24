module.exports = () => ({
  visitor: {
    ImportDeclaration: (path) => {
      if (path.node.source.value.substr('-5') === '.scss') {
        path.remove();
      }
    }
  }
});
