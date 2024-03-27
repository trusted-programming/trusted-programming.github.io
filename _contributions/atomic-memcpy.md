---
name: Atomic memcpy
area: library
status:
  label: in-progress
  css_class: attention
buttons:
  - label: Atomic memcpy RFC
    link: https://github.com/m-ou-se/rfcs/blob/atomic-memcpy/text/3301-atomic-memcpy.md
---
It's currently not possible to implement an efficient and strictly correct *sequence lock* in Rust,
which is a very important low level synchronization primitive.

Reading the data from a sequence lock relies on the ability to read data that might be
concurrently modified, checking afterwards if a data race occured (by checking an atomic sequence counter),
and only then *using* the data after the check.
(See [the RFC](https://github.com/m-ou-se/rfcs/blob/atomic-memcpy/text/3301-atomic-memcpy.md#the-problem) for a detailed explanation.)

However, in the memory model of Rust (and C++),
reading data that is concurrently modified results in a data race (undefined behavior) *immdiately*,
not just when using the data later.

Crates like `seqlock` work around this by using `ptr::read_volatile`, but the correctness is debatable.

C++'s [P1478](https://wg21.link/p1478r7) adds
`atomic_load_per_byte_memcpy` and `atomic_store_per_byte_memcpy` to provide a solution for that problem.
Rust should have something similar, but something that fits better into Rust's type and safety system.

[Rust RFC 3301](https://github.com/m-ou-se/rfcs/blob/atomic-memcpy/text/3301-atomic-memcpy.md) is
a proposal for a generic type `AtomicPerByte<T>` that allows for concurrent reads and writes that do not result in undefined behavior,
while still allowing tearing to allow reads and writes of any size.
It leverages the `MaybeUninit<T>` type to represent types in potentially invalid (teared) state.
