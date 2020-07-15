### Shortest path

Given a set of cities and distance between every pair of cities, the problem is to find the shortest possible route between those cities.

Write a class `routeMap.` that has two methods:

`setRoute(routeInfo)` - set path between 2 cities (prepare graph)

`getShortestPath(origin, destination)` - returns the list of routes
### Example

```
    const routeMap = new RouteMap();
    routeMap.setRoute('A', 'B', 10);
    routeMap.setRoute('B', 'C', 5);
    routeMap.setRoute('C', 'A', 20);

    routeMap.getShortestPath('A', 'C');

    Result: 
    "A -> B -> C"
```
