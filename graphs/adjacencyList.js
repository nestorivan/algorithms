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

  getList() {
    return this.nodes;
  }

  //breadth first search
  bfs(start, target) {
    // we start our search from our starting node
    const queue = [start];
    // we keep track of all visited nodes 
    const visitedNodes = new Set();

    while (queue.length > 0) {
      // we get the first element in the queue
      const airport = queue.shift();

      // we get all the selected node edges
      const destinations = this.nodes.get(airport);

      // for each edge we check if the node has been visited
      // if not we check if the node is our target
      // and we mark that node as visited
      for (const destination of destinations) {

        //if edge is our target we break 
        if (destination === target) {
          console.log(`${target} was found!`);
          return
        }
        // if edge was not visited we add it to queue
        if (!visitedNodes.has(destination)) {
          queue.push(destination);
          visitedNodes.add(destination);
        }
      }
    }

    console.log("node not found")
    return -1;
  }

  //depth first search
  dfs(start, target, visited = new Set()) {
    console.log(start)

    //we set our current node as visited so we dont visit it again
    visited.add(start)

    // we get all selected node edges
    const destinations = this.nodes.get(start);

    // for each edge we check if it matches our target
    // if is not match and we have not visited we call this function to visit it
    for(const destination of destinations){
      
      if(destination === target){
        console.log(`${target} has been found!`)
        break
      }

      if(!visited.has(destination)){
        this.dfs(destination, target, visited)
      }
    }
  }
}

module.exports = AdjancencyList;
