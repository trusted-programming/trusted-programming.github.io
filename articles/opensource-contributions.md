---
layout: post
title: Recent Contributions to the Open Source Communities by Huawei Trusted Programming 
toc: true
---

* toc
{:toc}


Here is the list of opensource contributions made by huawei employees (if you want to see the work in progress, take a look [here]({{ site.baseurl }}/articles/work-in-progress.html)):

### (rustc/LLVM/libc) Add support for big-endian and ILP32 variants of AArch64

This added compilation support of Rust programs for big-endian and [ILP32](https://developer.arm.com/documentation/dai0490/latest/)
variants of AArch64.  These changes enable Huawei and other hardware companies to run Rust code on networking hardware which commonly
uses these architecture variants.

It was through pull requests to [the LLVM compiler](https://reviews.llvm.org/rG21bfd068b32ece1c6fbc912208e7cd1782a8c3fc),
[the libc crate](https://github.com/rust-lang/libc/pull/2039), and [the Rust compiler itself](https://github.com/rust-lang/rust/pull/81455).

These changes introduce new end-to-end cross-compilation targets for the Rust compiler, making it easier to build Rust products for bespoke
hardware using a single command:

```bash
cargo build --target aarch64_be-unknown-linux-gnu
cargo build --target aarch64-unknown-linux-gnu_ilp32
cargo build --target aarch64_be-unknown-linux-gnu_ilp32
```

### (rustdoc) Codeblock tooltip position

The goal of this PR was to fix the position of the tooltip "i" which appears when a rust documentation codeblock is marked as "ignore" or "compile_fail". You can see screenshots directly in the pull request [here](https://github.com/rust-lang/rust/pull/83393).

### (rustdoc) Add documentation for rustdoc GUI tests

There are multiple test suites to ensure that rustdoc is working as expected:
 * test/rustdoc: checks parts of the HTML and that some elements are present as expected
 * test/rustdoc-js: checks the documentation search
 * test/rustdoc-js-std: checks the documentation search (in the std specifically)
 * test/rustdoc-ui: checks the cli output (errors, warnings, etc)
 * test/rustdoc-json: checks the validity of the JSON output (you can generate either HTML or JSON)
 * test/rustdoc-gui: browse the generated HTML using a chrome instance (with the framework [browser-ui-test](https://github.com/GuillaumeGomez/browser-UI-test/))

This [PR](https://github.com/rust-lang/rust/pull/83420) is about adding documentation about the **rustdoc-gui** test suite.

### (rust) Fix error code checks

When the rust compiler generates an error, they have an associated code which then allows you to get more information by using `rustc --explain [ERROR_CODE]`. You can see the full list of the error codes [here](https://doc.rust-lang.org/nightly/error-index.html).

Just like a lot of things in the compiler, we need to ensure that the code doesn't become obsolete or out of date. It's very common for error codes to not be needed anymore and we need a check to be sure that they have been cleaned up correctly.

Because of some changes in the way the test suites are run, part of this check was not run because the target folder wasn't the right one. So the check was run, just not in the correct folder. With this [pull request](https://github.com/rust-lang/rust/pull/83451), it shouldn't happen again silently.

### (rust-GSL) Multiple fixes/improvements and upgrade crate version to 4.0

This crate provides bindings for the GSL (GNU Scientific library). With the new Rust release came new lints. This [pull request](https://github.com/GuillaumeGomez/rust-GSL/pull/97) fixed them and made some small improvements.

### (libc) Add new structures, constants and types around processor API for macOS

The [libc](https://github.com/rust-lang/libc/) project provides FFI (Foreign Function Interface) bindings to platforms' system libraries. It's one of the most used crate in the Rust ecosystem because as soon as you want to write low-level code, it's very likely that you'll need it.

This [pull request](https://github.com/rust-lang/libc/pull/2127) provided the following new items:
 * processor_cpu_load_info
 * processor_cpu_load_info_t
 * processor_cpu_load_info_data_t
 * processor_basic_info
 * processor_basic_info_t
 * processor_basic_info_data_t
 * processor_set_basic_info
 * processor_set_basic_info_t
 * processor_set_basic_info_data_t
 * processor_set_load_info
 * processor_set_load_info_t
 * processor_set_load_info_data_t
 * natural_t
 * mach_msg_type_number_t
 * PROCESSOR_BASIC_INFO
 * PROCESSOR_CPU_LOAD_INFO
 * PROCESSOR_PM_REGS_INFO
 * PROCESSOR_TEMPERATURE
 * PROCESSOR_SET_BASIC_INFO
 * PROCESSOR_SET_LOAD_INFO

And this [pull request](https://github.com/rust-lang/libc/pull/2129) added the following type aliases:
 * processor_flavor_t
 * processor_info_t
 * processor_info_array_t

### (sysinfo) Fix invalid CPU usage on new mac processors

The [sysinfo](https://github.com/GuillaumeGomez/sysinfo) crate provides information on your system, such as CPU, memory, disk and network usage. It also provides information on users and components whenever it's provided by the OS.

With the arrival of the new mac processors, the computation for the CPU usage on mac needed to be updated. Before, it was using `mach_absolute_time` to get how much time the processors "used" and then, by subtracting the previous time, you could know how much a process used of that time. Unfortunately, it seems that the time returned by this function is inaccurate with the new processors. So instead, we get the "raw" information from the processors (the "ticks") and we then convert it to time to be able to compute the processes usage.

You can see the pull request [here](https://github.com/GuillaumeGomez/sysinfo/pull/453).

### (rustdoc) Add a button to copy the "use statement"

It's very common, when reading an item's documentation to want to then import it into your code to use it. This [pull request](https://github.com/rust-lang/rust/pull/83721) adds a button to do it.

### (rustdoc) Merge idents in paths to make source code pages DOM smaller

This [pull request](https://github.com/rust-lang/rust/pull/83992) ensures to not have a span for each part of a path in the source code pages (for example [here](https://docs.rs/sysinfo/0.17.0/src/sysinfo/lib.rs.html#7-283)). Before this change, for `a::b::c` we generated `<span>a</span>::<span>b</span>::<span>c</span>`, now we generate `<span>a::b::c</span>`.

### (libc) Add new constant and functions for Android

This [pull request] added the following functions:

 * __system_property_set
 * __system_property_get

And the following constant:

 * PROP_VALUE_MAX

### (tempfile) Ensure that README code examples are tested

This [pull request](https://github.com/Stebalien/tempfile/pull/144) added the usage of [doc-comment](https://crates.io/crates/doc-comment) to ensure that the README code examples are tested (which prevents them to get outdated). You can see more explanations on how to easily test a markdown file code examples by reading this [blog post](https://blog.guillaume-gomez.fr/articles/2019-04-13+Keeping+Rust+projects%27+README.md+code+examples+up-to-date).

### (sysinfo) Add fallback when calculating OS version on linux

On linux, the version ID isn't always set (nor mandatory) in the `/etc/os-release` file. To fix this issue in case this information is missing, this [pull request](https://github.com/GuillaumeGomez/sysinfo/pull/457) go get it from `/etc/lsb-release`.

### (docs.rs) Add gitlab support

This [pull request](https://github.com/rust-lang/docs.rs/pull/1249) adds the support for gitlab information retrieval (for example, the number of stars or forks of a repository) and also create the architecture to greatly improve and simplify the adds of other platforms.

### (clippy) Add lint to check for boolean comparison in assert macro calls

This [pull request](https://github.com/rust-lang/rust-clippy/pull/7083) add a new lint (called `bool_assert_comparison`) which check cases like these:

```rust
assert_eq!("a".is_empty(), false);
debug_assert_ne!("b".is_empty(), true);
```

Because they can be rewritten like this:

```rust
assert!(!"a".is_empty());
debug_assert!(!"b".is_empty());
```

### (docs.rs) Add footer to provide easier access to some information

We needed this [pull request](https://github.com/rust-lang/docs.rs/pull/1367) when we were about to add a link to the privacy policy page: only issue is that the top navbar on docs.rs was already quite "full". So instead, we decided to create a footer to reduce the load on the top navbar and also use it to add this new link.

### (rustdoc) Migrate toggles into full HTML

This [pull request](https://github.com/rust-lang/rust/pull/84754) and [this one](https://github.com/rust-lang/rust/pull/85074) convert JS-generated toggles into full HTML ones. It's part of a more global process to clean all the toggles that you can see described in [this issue](https://github.com/rust-lang/rust/issues/83332). The global idea being to remove more JS for faster rendering.

A "funny" side-effect is that it actually improves the doc pages in case you disabled JS on the rustdoc pages.

### (rustdoc) Remove unneeded call to with_default_session_globals

We recently realized that not only this function call was unneeded but also that it was messing up the spans. You can see the pull request [here](https://github.com/rust-lang/rust/pull/84953).

### (rustdoc) Improvement for rustdoc-gui test suite output and run

This [pull request](https://github.com/rust-lang/rust/pull/85038) and [this one](https://github.com/rust-lang/rust/pull/84990) improved the rustdoc-gui test suite by alphabetically sorting the test and run all tests instead of stopping at the first failure like it used to.

### (rustdoc) Improve search result DOM generation

It was discovered randomly that in some cases, the generated DOM was invalid (because of items' documentation). For more context, when using the rustdoc search, we generate the results with JS. This generation was mostly done using strings before, this [pull request](https://github.com/rust-lang/rust/pull/85540) changed it so that it now generates through browsers' API instead.

### (rustdoc/rust infra) Enforce rustdoc-GUI test-suite

Rustdoc has GUI tests to prevent regressions like it happened a lot in the past. We recently realized that this test-suite was not always run as it should. This [pull request](https://github.com/rust-lang/rust/pull/84586) fixes this issue.

### (rustdoc) Sidebar unification

This [pull request](https://github.com/rust-lang/rust/pull/84834) unify the sidebar between modules and the other items, add the crates list on all items on all "levels" and remove a duplicate "location" information on modules.

### (rustdoc) Clean up HTML generated by rustdoc

Thanks to <https://github.com/rust-lang/rust/pull/84480>, we realized that the HTML (a.k.a. DOM) generated by rustdoc needed to be cleaned up. This [pull request](https://github.com/rust-lang/rust/pull/84703) is the clean up.

### (rustdoc) Fixes for new DOM

A lot of changes happened on rustdoc recently and we're now catching up on bugs and adding a lot of new tests since we now have GUI tests. Here is a long and non-exhaustive list:

 * Fix HTML handling in search results description: <https://github.com/rust-lang/rust/pull/86095>
 * Fix font weight on documentation: <https://github.com/rust-lang/rust/pull/86078>
 * Fix display for search results by removing unwanted margins and font-weight: <https://github.com/rust-lang/rust/pull/86040>
 * Fix toggle on trait methods: <https://github.com/rust-lang/rust/pull/85722>
 * Fix source code line number display and make it clickable again: <https://github.com/rust-lang/rust/pull/85148>
 * Fix border radius for doc code blocks in rustdoc: <https://github.com/rust-lang/rust/pull/85174>
 * Fix display for "implementors" section: <https://github.com/rust-lang/rust/pull/85256>
 * Fix invalid `input:disabled` CSS selector: <https://github.com/rust-lang/rust/pull/85367>
 * Fix escape key handling: <https://github.com/rust-lang/rust/pull/85438>
 * Fix invalid CSS rules for `a:hover` (it was highlighting instead of underlining): <https://github.com/rust-lang/rust/pull/85470>
 * Fix search result position handling when switching result tab: <https://github.com/rust-lang/rust/pull/85506>
 * Prevent tab title to "null" if the URL is a search one: <https://github.com/rust-lang/rust/pull/85509>
 * Remove a lot of dead JS code: <https://github.com/rust-lang/rust/pull/85548>
 * Fix search result display (the item was going over its description): <https://github.com/rust-lang/rust/pull/85551>
 * Put back special search result items information: <https://github.com/rust-lang/rust/pull/85568>
 * Fix "inherent implementations" display (they were collapsed by default, which was wrong): <https://github.com/rust-lang/rust/pull/85602>
 * Move special search result item handling from CSS to JS: <https://github.com/rust-lang/rust/pull/85631>

### (rustdoc) Improve generated DOM

We started using the `tidy` tool to ensure the HTML rustdoc generates is valid. The final part of this fix is in [this pull request](https://github.com/rust-lang/rust/pull/85972).

### (rustdoc) Better search result DOM generation

When you use rustdoc search system, it'll go through the items, find the best matches and then display them. The display part was generated inside a big string before, which allowed a lot of issues. Instead, it was replaced with much safer DOM generation using browsers' API to create DOM elements. You can see how in [this pull request](https://github.com/rust-lang/rust/pull/85540).

### (tokei) Turing the code measuring tool into a driver for batch process for code in various programming languages

When you do tokei, it will report lines of code etc per programming language. We added [this pull request](https://github.com/XAMPPRocky/tokei/pull/678) to extend the tool for classifying the programs of different language as a list on the standard output for further processing downstream the pipeline. 

### (tree-sitter) Generate XML output of the abstract syntax trees, which has similar format to the SrcML schema, e.g., embedding the tokens with XML tags according to the ASTs

When you run tree-sitter, it will output the ASTs as a plain text file with some indention, while the concrete tokens are only shown by their offsets in the original source file. We created [this pull request](https://github.com/tree-sitter/tree-sitter/pull/863) to generate XML output of the ASTs, which has similar format to the SrcML schema, e.g., embedding the tokens with XML tags according to the ASTs. 

### (cargo-geiger) Generate reports of the safe code ratios in addition to the unsafe code counts

When you run cargo-geiger, it will output the counts of unsafe code elements for functions, expressions, etc. We created [this pull request](https://github.com/rust-secure-code/cargo-geiger/pull/167) to report the safe code ratios. 

### (quick-xml) Fixing a bug in the tags generated to allow serialization in a format similar to that of SrcML

This is a [pull request](https://github.com/tafia/quick-xml/pull/250) to generate XML outputs where <key/> are generated rather than flagged as an error.

### (rust2xml) Generate XML outputs from Rust abstract syntax trees

This is a [new crate](https://github.com/yijunyu/rust2xml) to create XML outputs from Rust code's abstract syntax trees.

### (rust2pickle) Generate Pickle outputs from Rust abstract syntax trees

This is a [new crate](https://github.com/yijunyu/rust2pickle) to create Pickle output from Rust code's abstract syntax trees.

### (rustdoc) Don't mark "safe" intrinsics as unsafe

Some rust intrinsics are safe to be used. This [pull request](https://github.com/rust-lang/rust/pull/86327) propagates this change to rustdoc.

### (rustc/infra) Enforce error codes checks

The Rust compiler uses error codes (which look like "E0111") and provide an explanation alongside them which can be seen using `rustc --explain E0111`. However, as time passes, some error codes are not used anymore and are often not cleaned up correctly. This [pull request](https://github.com/rust-lang/rust/pull/86137) ensures that they are cleaned up appropriately if they are removed by sending an error when the `tidy` check is run.
