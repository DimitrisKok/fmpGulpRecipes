# fileSystem
>A Functional Approach to working with external files in FileMaker

---
####Module goals:

- Read, diff, and write to files.
- Node runtime + express server.
- Provide a wide array of transformations to text and files through gulp.js integration.

---
####Design Philosophy:

- Separate data concerns from application state as much as possible.
- Find a "simple to comprehend, yet reusable in various ciscumstances" level of abstraction for the problem at hand 
- Focus on list processing ( scripts and functions should accept lists of params, rather than single params )

---
####Dependencies:
webviews
appArchitecture


---
###Roadmap:
0.1: basic fileSystem commands (read, write, list dir + files, UI first draft)
0.2: Gulp integration
0.3: Code editor
0.4:
0.5:
0.6: Add datomicFilemaker dependency to keep a stream of all modifications to files + possibility to go back in time or consult previous configs if setting is ON.
