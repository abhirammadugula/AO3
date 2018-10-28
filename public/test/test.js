// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

// QUnit.test("Here's a test that should always pass", function (assert) {
//     assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
// });

QUnit.test('Testing  function GetFlameLetter() with several sets of inputs', function (assert) {
    assert.equal(GetFlameLetter("durga", "abhiram"), "S", 'Tested with two strings for siblings');
    
    
    //assert.throws(function () { App.calculateArea('a', 'b'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

QUnit.test('Testing cleanString function for best friends', function (assert) {
    assert.equal(GetFlameLetter("satya", "abhi"), "F", 'Tested with two strings for best friends');
  //assert.equal(App.cleanString('Nora<script></script>',4), 'Nora', 'Tested removal of excess characters, limit 4');
  //assert.equal(App.cleanString('NoraNora<script></script>',4), 'Nora', 'Tested removal of excess characters, limit 8');
  //assert.equal(App.cleanString('NoraNora<script></script>',10), 'NoraNorasc', 'Tags removed>');
  //assert.equal(App.cleanString('Nora;#%*@Nora<script></script>',8), 'NoraNora', 'Non-letters removed');
});

QUnit.test('Testing cleanString function with several sets of inputs', function (assert) {
    assert.equal(GetFlameLetter("nav", "abhi"), "M", 'Tested with two strings for marriage');
  //assert.equal(App.cleanString('Nora<script></script>',4), 'Nora', 'Tested removal of excess characters, limit 4');
  //assert.equal(App.cleanString('NoraNora<script></script>',4), 'Nora', 'Tested removal of excess characters, limit 8');
  //assert.equal(App.cleanString('NoraNora<script></script>',10), 'NoraNorasc', 'Tags removed>');
  //assert.equal(App.cleanString('Nora;#%*@Nora<script></script>',8), 'NoraNora', 'Non-letters removed');
});

