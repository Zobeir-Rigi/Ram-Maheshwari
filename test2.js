const classNine = {
  name: "london9",
  year: 2022
};

const classTen = classNine;
classTen.name = "london10";
console.log(classNine.name, classTen.name);
