

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Getting started

Install JSON Server

#npm install -g json-server

Start JSON Server

#json-server --watch db.json

The Most Important Use Cases

First things first, how can we exclude every target folder created by Maven in every sub-module?

The answer is very easy: target/
This will match any directory (but not files, hence the trailing /) in any subdirectory relative to the .gitignore file. This means we don’t even need any * at all.

Here is an overview of the most relevant patterns:
.gitignore entry 	Ignores every…
target/ 	…folder (due to the trailing /) recursively
target 	…file or folder named target recursively
/target 	…file or folder named target in the top-most directory (due to the leading /)
/target/ 	…folder named target in the top-most directory (leading and trailing /)
*.class 	…every file or folder ending with .class recursively
Advanced Use Cases

For more complicated use cases refer to the following table:
.gitignore entry 	Ignores every…
#comment 	…nothing, this is a comment (first character is a #)
\#comment 	…every file or folder with name #comment (\ for escaping)
target/logs/ 	…every folder named logs which is a subdirectory of a folder named target
target/*/logs/ 	…every folder named logs two levels under a folder named target (* doesn’t include /)
target/**/logs/ 	…every folder named logs somewhere under a folder named target (** includes /)
*.py[co] 	…file or folder ending in .pyc or .pyo. However, it doesn’t match .py!
!README.md 	Doesn’t ignore any README.md file even if it matches an exclude pattern, e.g. *.md.
NOTE This does not work if the file is located within a ignored folder.