//Diff bw shallow copy and deep copy

/*Here's a brief explanation of each aspect:

Definition:

Shallow Copy: Copies only the references to objects and arrays, creating a new object/array but not new references to nested objects/arrays.
Deep Copy: Creates a new object/array and recursively copies all nested objects/arrays, creating entirely new references.
Impact on nested objects/arrays:

Shallow Copy: Nested objects/arrays are not duplicated, but their references are shared between the original and copied objects/arrays. Changes to nested objects/arrays in one will reflect in the other.
Deep Copy: Nested objects/arrays are duplicated, and new references are created, ensuring changes in the original do not affect the copy.
Complexity:

Shallow Copy: Less complex and quicker to perform since it only copies references at the top level.
Deep Copy: More complex and slower, especially for deeply nested structures, as it involves recursively copying each nested object/array.
Example:

Shallow Copy: Using the spread operator or Object.assign() to create a shallow copy. Changes to nested objects/arrays in one will affect the other.
Deep Copy: Using methods like JSON.parse() and JSON.stringify() to create a deep copy. Changes to nested objects/arrays in one will not affect the other.

*/

//Shallow copy example -- start
// Original object with nested array
const originalObject1 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "gaming"]
  };
  
  // Creating a shallow copy using spread operator
  const shallowCopy = { ...originalObject1 };
  
  // Modifying the shallow copy
  shallowCopy.age = 35;
  shallowCopy.hobbies.push("cooking");
  
  // Logging both original and shallow copied arrays
  console.log("Original Object:", originalObject1);
  console.log("Shallow Copy:", shallowCopy);
  //Shallow copy example -- end

  //Deep copy example -- start
  // Original object with nested array
const originalObject2 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "gaming"]
  };
  
  // Creating a deep copy using JSON.parse() and JSON.stringify()
  const deepCopy = JSON.parse(JSON.stringify(originalObject2));
  
  // Modifying the deep copy
  deepCopy.age = 35;
  deepCopy.hobbies.push("cooking");
  
  // Logging both original and deep copied arrays
  console.log("Original Object:", originalObject);
  console.log("Deep Copy:", deepCopy);
//Deep copy example -- end  
  