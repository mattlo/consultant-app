module.exports = () => ({
  visitor: {
    ImportDeclaration: (path) => {
      if (process.env.IGNORE_SCSS && path.node.source.value.substr('-5') === '.scss') {
        path.remove();
      }
    }
  }
});
