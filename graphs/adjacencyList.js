class AdjancencyList {
  nodes = new Map();

  constructor(nodes) {
    this.initializeNodes(nodes);
  }

  initializeNodes(nodes) {
    nodes.forEach((node) => this.nodes.set(node, []));
  }

  /**
   * 
   * @param {string} origin 
   * @param {string} destination 
   * @description This method adds destination node into
   * the origin node edges list and viceversa , thus creating a 2 way edge
   */
  addEdge(origin, destination) {
    this.nodes.get(origin).push(destination);
    this.nodes.get(destination).push(origin);
  }

  getList(){
    return this.nodes
  }
}

module.exports = AdjancencyList;
