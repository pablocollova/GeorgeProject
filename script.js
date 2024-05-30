const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

const color = d3.scaleOrdinal(d3.schemeCategory10);

const attractForce = d3.forceManyBody().strength(10).distanceMax(100).distanceMin(100);
const repelForce = d3.forceManyBody().strength(-300).distanceMax(220).distanceMin(10);

const simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(d => d.id))
    .force("attractForce", attractForce)
    .force("repelForce", repelForce)
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

const graph = {
  nodes: [
    {id: "Node1"},
    {id: "Node2"},
    {id: "Node3"},
    {id: "Node4"},
    {id: "Node5"},
  ],
  links: [
    {source: "Node1", target: "Node2"},
    {source: "Node1", target: "Node3"},
    {source: "Node1", target: "Node4"},
    {source: "Node1", target: "Node5"},
  ]
};

const link = svg.append("g")
    .attr("class", "links")
  .selectAll("line")
  .data(graph.links)
  .enter().append("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

const node = svg.append("g")
    .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter().append("circle")
    .attr("r", d => d.id === "Node1" ? 80 : 40)  // Nodo central más grande
    .attr("fill", d => color(d.id))
    .attr("stroke","black")
    .attr("stroke-width", 2.5)
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

simulation
    .nodes(graph.nodes)
    .on("tick", ticked);

simulation.force("link")
    .links(graph.links);

function ticked() {
  link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

  node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
}

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Añadir texto para el logo
svg.append("text")
  .attr("x", width / 2)
  .attr("y", height / 2 - 150)  // Mover texto "RED" hacia arriba
  .attr("id", "logoText")
  .attr("font-size", "96px")
  .text("RED");

svg.append("text")
  .attr("x", width / 2)
  .attr("y", height / 2 - 100)  // Ajustar posición del subtítulo
  .attr("id", "subText")
  .attr("font-size", "48px")
  .text("SOLUCIONES EMPRESARIALES");

svg.append("text")
  .attr("x", width / 2)
  .attr("y", height - 50)  // Posición del texto "En construcción"
  .attr("id", "constructionText")
  .attr("font-size", "40px")
  .text("En construcción...");
