let adj = [];
let state = {};
let cycleFound = false;

function canFinish(numCourses, prerequisites) {
  adj = [];
  state = {};
  cycleFound = false;


  for(let i = 0; i < numCourses; i++) {
    adj.push([]);
    state[i] = "U";
  }

  for(let i = 0; i < prerequisites.length; i++) {
    let req = prerequisites[i];
    let fromNode = req[1];
    let toNode = req[0];

    adj[fromNode].push(toNode);
  }

  for(let i = 0; i < numCourses; i++) {
    if (state[i] === "U") {
      dfs(i);
    }
    if (cycleFound === true) {
      return false;
    }
  }
  return !cycleFound;
}

function dfs(node) {
  if (state[node] === "U") {
    state[node] = "V";
    let neighbors = adj[node];
    for(let i = 0; i < neighbors.length; i++) {
      dfs(neighbors[i]);
    }
    state[node] = "P";
  }
  else if (state[node] === "V") {
    cycleFound = true;
  }
}
