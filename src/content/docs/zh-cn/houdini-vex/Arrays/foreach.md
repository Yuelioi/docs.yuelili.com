---
title: foreach
order: 4
---
| On this page | * [Simple form](#simple-form) * [Enumerated form](#enumerated-form) |
| --- | --- |

The length of the array is determined before the first iteration, so if the array is changed during the foreach this will not be reflected in the number of iterations.

Simple form

## simple-form

```vex
foreach ([element_type] value; array) {

}

```

This loops over the members of array. For each iteration, it **copies**
the current member to value and then executes statement. For example:

```vex
int an_array[] = {1, 2}
foreach (int num; an_array) {
    printf("%d", num);
}

```

Enumerated form

## enumerated-form

The second form lets you specify an enumeration variable:

```vex
foreach (index, value; array) statement;
foreach (int index; element_type value; array) statement;

```

For each iteration, this form assigns the current *position* in the array
to index, **copies** the current member to value, and executes
statement. For example:

```vex
string days[] = { "Mon", "Tue", "Wed", "Thu", "Fri" }
foreach (int i; string name; days) {
    printf("Day number %d is %s", i, name);
}

```

This is similar to the common Python idiom `for i, x in enumerate(xs):`.
