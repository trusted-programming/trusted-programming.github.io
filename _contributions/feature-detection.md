---
name: CPU feature detection in core
area: library
status: 
  label: in-progress
  css_class: attention
buttons:
---

Currently, CPU feature detection macros such as `is_x86_feature_detected!` are only available in 
`std`. This is because, on most platforms, feature detection requires information from the 
operating system, which is not available in `core` by design.

However, an alternative design would be to expose an API for manually enabling features: the set of
enabled features would be available in `core`, but code in `std` would be responsible for querying
the set of supported features from the OS on startup and marking them as enabled in `core`.

This will allow code in `core` and `alloc` to take advantage of CPU-specific optimizations such as
using string processing instructions to accelerate certain functions.
