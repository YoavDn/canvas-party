# Getting started 

A map in YAML needs to be resolved before it can be closed, and a new map is created. A new map can be created by either increasing the indentation level or by resolving the previous map and starting an adjacent map. 

A list includes values listed in a specific order and may contain any number of items needed. A list sequence starts with a dash (-) and a space, while indentation separates it from the parent. You can think of a sequence as a Python list or an array in Bash or Perl. A list can be embedded into a map. 

YAML also contains scalars, which are arbitrary data (encoded in Unicode) that can be used as values such as strings, integers, dates, numbers, or booleans.

When creating a YAML file, you’ll need to ensure that you follow these syntax rules and that your file is valid. A linter is an application that verifies the syntax of a file. The yamllint command can help to ensure you’ve created a valid YAML file before you hand it over to an application.


YAML uses Python-style indentation to indicate nesting. Tab characters are not allowed, so whitespaces are used instead. There are no usual format symbols, such as braces, square brackets, closing tags, or quotation marks. YAML files use a .yml or .yaml extension. 

The structure of a YAML file is a map or a list.

Maps allow you to associate key-value pairs. Each key must be unique, and the order doesn't matter. Think of a Python dictionary or a variable assignment in a Bash script.