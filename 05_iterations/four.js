myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  py: "python",
  swift: "swift"
}

for (const key in myObject) {
  // console.log(myObject[key]);
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  console.log(programming[key]);
}