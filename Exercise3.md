### Traveling salesman

Given a set of cities and distance between every pair of cities, the problem is to find the shortest possible route that visits every city exactly once and returns to the starting point.

Write a class `RouteMap` that has two methods:

`setRoute(routeInfo)` - set path between 2 cities (prepare graph)

`solve(startingCity)` - returns the list of routes

### Example

```
    const routeMap = new RouteMap();
    routeMap.setRoute('A', 'B', 10);
    routeMap.setRoute('B', 'C', 17);
    routeMap.setRoute('C', 'A', 20);

    routeMap.solve('A');

    Result: 
    "A -> B -> C -> A"
```
