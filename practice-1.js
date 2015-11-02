/*******************************************************************
*             LETS GET JAVASCRIPT!
*
*    Open index.html in your browser, and you command+option+i to
*    pull open the console.
*******************************************************************/



// 1. Let's start by creating an object.
//     Declare a variable, myObject, below this line.

      console.assert(myObject === undefined, "You haven't declared your variable.");
// 2. Now, let's set that variable to an empty object.


      console.assert(typeof myObject === "object", "You need to set the variable equal to an empty object.");
// 3. Let's give the variable some keys and values, also known as properties and attributes
//    Give myObject a property of javascript and attribute "awesome".
//                  a property of jquery and attribute "pretty good"
//                  a property of frameworks, and attribute of ['angular','react','backbone']


      console.assert(myObject.javascript === 'awesome', "You need a key[javascript] and value 'awesome'");
      console.assert(myObject['jquery'] === 'pretty good', "You need a key.jquery and value 'pretty good'");
      console.assert(myObject.frameworks[2] === 'backbone', "You need a key of list and value of ['angular','react','backbone']");
      console.assert(myObject.frameworks.length === 3, "You need a key of list and value of ['angular','react','backbone']");

// 4. Nice!  Now let's change the vale of myObject.jquery to 'just kidding, awesome'


      console.assert(myObject.jquery === "just kidding, awesome", "Change the value of jquery to 'just kidding, awesome'");
// 5. Let's add a value to myObject.frameworks.  Let's push 'ember' onto that value.


      console.assert(myObject.frameworks[myObject.list.length - 1] === "ember", "Add ember as the last value to myObject.list");
// 6. Let's console.log the value of myObject.jquery to the page.
//    You should see "just kidding, awesome" printed to the console.


      console.assert(true === true);
// 6. If you look at index.html, you'll see and <h1> tag with an id of 'content'
//    and textContent of Hello!.
//    Using javascript below, change the value of the <h1> using myObject to be the value
//    of myObject.javascript



      console.assert(document.body.textContent.trim() === "awesome", 'Add the value of myObject.javascript to the H1');
//    Well done! Let's practice some functions.


// 7. Create a function, addThingsToPage, that takes one argument, text.
//    For now, have it just return the text given to the function.

      console.assert(addThingsToPage('return me') === 'return me', "Create the function and make sure it returns the first argument.");
// 8. Now, add another argument to a function called addThingsToPageTwo, tag.
//    Have the function return an array of text,tag

      console.assert(addThingsToPageTwo('return me', 'h1')[1] === 'h1', "Add the tag as another argument.  Return an array of text,tag");
// 9. Here comes the hard part. Create a function, finalFunc,
//    that takes two arguments, text and tag.  Have the function create
//    a new element on the index.html, tag, and set the innerText of that tag to, text
//    Finally, have it append to the html id of content.


      finalFunc('show me the money', 'h2');
      console.assert(document.getElementById('content').textContent.trim() === "show me the money", "Your function is not appending the element to the page with the proper content.")



