---
name: MicroMap
area: library
status: 
  label: complete
  css_class: attention
buttons:
  - label: Issues
    link: https://github.com/yegor256/micromap/issues
---
A much faster alternative of HashMap, for very small maps. It is also faster
than FxHashMap, hashbrown, ArrayMap, IndexMap, and all others. 
The smaller the map, the higher the performance. It was observed that when a
map contains more than 20 keys, it may be better to use the standard HashMap,
since the performance of micromap::Map may start to degrade. See the
benchmarking results below.
