/*
 * @Author: cheese
 * @Date: 2021-03-28 17:28:49
 * @LastEditTime: 2021-03-28 17:38:16
 */
// module.exports = (opts = { }) => {
module.exports = () => {

  // Work with options here

  return {
    postcssPlugin: 'postcss-compatible-mp',
    
    Root (root, postcss) {
      // Transform CSS AST here
      
    }
    

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  }
}
module.exports.postcss = true
