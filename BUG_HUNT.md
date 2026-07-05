# TaskTicker Bug Hunt

## Bug 1: Stale Closure in setInterval

Problem:
setInterval callback captures stale state values.

Fix:
Use functional state updates or proper dependencies.

---

## Bug 2: State Mutation with push()

Problem:
Array state is mutated directly using push().

Fix:
Create a new array instead of mutating existing state.

---

## Bug 3: sort() Mutates Original Array

Problem:
Array.prototype.sort() mutates the source array.

Fix:
Use [...array].sort() before sorting.

---

## Bug 4: Using Array Index as React Key

Problem:
Using index as key can cause incorrect UI updates.

Fix:
Use a stable unique identifier such as task.id.

---

## Bug 5: Fetch Runs with Invalid ID

Problem:
API request can run when selectedId is null or undefined.

Fix:
Add guard clauses before fetching.

---

## Bug 6: Missing Request Cleanup

Problem:
In-flight requests are not cancelled when component unmounts.

Fix:
Use AbortController and cleanup functions.