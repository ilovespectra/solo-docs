---
sidebar_position: 9
title: contributing
description: contribute to solo-silo development
---

# contributing

solo-silo is an open-source project and welcomes contributions from the community. whether you're fixing bugs, adding features, or improving documentation, your help is appreciated!

## getting started

### prerequisites

before contributing, make sure you have:
- git installed
- node.js (v16 or higher)
- python (v3.8 or higher)
- familiarity with typescript and python
- understanding of react and next.js

### development setup

1. fork the repository on github
2. clone your fork locally:
```bash
git clone https://github.com/ilovespectra/solo-silo
cd solo-silo
```

3. checkout the local branch:
```bash
git checkout local
```

4. install dependencies and start:
```bash
./start-all.sh
```

## project structure

```
solo-silo/
├── src/              # frontend (next.js + react)
├── backend/          # backend (python + fastapi)
├── public/           # static assets
├── .local/           # local data storage
└── scripts/          # utility scripts
```

## ways to contribute

### report bugs

found a bug? help us fix it:
1. check if it's already reported in issues
2. create a new issue with:
   - clear description
   - steps to reproduce
   - expected vs actual behavior
   - screenshots if relevant
   - system information

### suggest features

have an idea for improvement?
1. open a feature request issue
2. describe the feature and use case
3. explain why it would be valuable
4. discuss implementation approach

### improve documentation

documentation can always be better:
- fix typos and errors
- clarify confusing sections
- add examples and screenshots
- translate to other languages

### write code

ready to contribute code?

#### frontend contributions

the frontend is built with:
- next.js 15
- react
- typescript
- tailwind css

common areas:
- ui/ux improvements
- search interface
- cluster management
- settings pages

#### backend contributions

the backend uses:
- python 3.8+
- fastapi
- pytorch
- various ai models

common areas:
- indexing performance
- ai model integration
- api endpoints
- clustering algorithms

### testing

help improve quality:
- write unit tests
- add integration tests
- test on different platforms
- verify edge cases

## coding standards

### typescript/react

- use typescript strict mode
- follow functional component patterns
- use hooks appropriately
- maintain accessibility standards
- write self-documenting code

### python

- follow pep 8 style guide
- use type hints
- write docstrings
- handle errors gracefully
- optimize for performance

### general

- write clear commit messages
- keep changes focused and atomic
- comment complex logic
- update documentation
- test your changes

## submission process

### create a branch

create a descriptive branch name:
```bash
git checkout -b feature/add-video-search
git checkout -b fix/clustering-memory-leak
git checkout -b docs/improve-search-guide
```

### make changes

1. write your code
2. test thoroughly
3. update documentation
4. commit with clear messages:
```bash
git commit -m "add video thumbnail generation"
```

### push and create pr

1. push to your fork:
```bash
git push origin your-branch-name
```

2. create a pull request on github
3. describe your changes clearly
4. link related issues
5. wait for review

## pull request guidelines

### pr description

include in your pr:
- what changed and why
- testing performed
- screenshots for ui changes
- breaking changes (if any)
- related issues

### code review

expect feedback on:
- code quality and style
- performance implications
- test coverage
- documentation updates
- backward compatibility

### merging

once approved:
- squash commits if requested
- ensure ci passes
- maintainer will merge

## areas needing help

### high priority

- improve animal detection accuracy
- add video processing optimizations
- enhance clustering algorithms
- mobile/tablet ui improvements

### medium priority

- additional export formats
- batch operations
- keyboard shortcuts
- dark mode improvements

### documentation

- user guides
- api documentation
- architecture overview
- deployment guides

## community

### communication

- github issues for bugs and features
- github discussions for questions
- pull requests for code contributions

### code of conduct

be respectful and constructive:
- welcome newcomers
- provide helpful feedback
- focus on the code, not the person
- maintain a positive environment

## license

by contributing, you agree that your contributions will be licensed under the mit license.

## questions?

not sure where to start?
- check existing issues labeled "good first issue"
- ask in github discussions
- review recent pull requests for examples

thank you for contributing to solo-silo! 🎉
