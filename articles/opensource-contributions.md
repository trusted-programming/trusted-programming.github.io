---
layout: post
title: Recent Contributions to the Open Source Communities by Huawei Trusted Programming 
toc: true
---

* toc
{:toc}


Here is the list of opensource contributions made by huawei employees:

### (rustdoc) Codeblock tooltip position

The goal of this PR was to fix the position of the tooltip "i" which appears when a rust documentation codeblock is marked as "ignore" or "compile_fail". You can see screenshots directly in the the PR [here](https://github.com/rust-lang/rust/pull/83393).

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

Because of some changes in the way the test suites are run, part of this check was not run because the target folder wasn't the right one. So the check was run, just not in the correct folder. With this [PR](https://github.com/rust-lang/rust/pull/83451), it shouldn't happen again silently.

### (rust-GSL) Multiple fixes/improvements and upgrade crate version to 4.0

This crate provides bindings for the GSL (GNU Scientific library). With the new Rust release came new lints. This [PR](https://github.com/GuillaumeGomez/rust-GSL/pull/97) fixed them and made some small improvements.

### (libc) Add new structures, constants and types around processor API for macOS

The [libc](https://github.com/rust-lang/libc/) project provides FFI (Foreign Function Interface) bindings to platforms' system libraries. It's one of the most used crate in the Rust ecosystem because as soon as you want to write low-level code, it's very likely that you'll need it.

This [PR](https://github.com/rust-lang/libc/pull/2127) provided the following new items:
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
