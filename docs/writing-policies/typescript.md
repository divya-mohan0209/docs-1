# TypeScript

As stated on the [official website](https://www.typescriptlang.org/):

> TypeScript extends JavaScript by adding types.
>
> By understanding JavaScript, TypeScript saves you time catching errors and
> providing fixes before you run code.

TypeScript **cannot** be converted to WebAssembly, however
[AssemblyScript](https://www.assemblyscript.org/) is a **subset** of TypeScript
designed explicitly for WebAssembly.

## Current State

Currently there's currently no Kubewarden SDK for AssemblyScript, we haven't
created it bacause of lack of time. We will do that in the near future.

In the meantime, there seem to be some limitatations affecting AssemblyScript:

* There's no built-in way to Serialize and Deserilize classed to
  and from JSON. See [this issue](https://github.com/AssemblyScript/assemblyscript/issues/292)
* It *seems* there's no JSON path library for AssemblyScript

## Example

[This GitHub repository](https://github.com/kubewarden/pod-privileged-policy)
contains a Kubewarden Policy written in AssemblyScript.

**Worth of note:** this repository has a series of GitHub Actions that automate
the following tasks:

  * Run unit tests and code linting on pull requests and after code is merged
    into the main branch
  * Build the policy in `release` mode and push it to a OCI registry as an
    artifact
