//example 1 <H1>
//step 1 create the element
const newH1 = document.createElement("h1");
//Step 2 add attributes/properties
newH1.textContent = "i like pizza!";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";
//step 3 append element to dom
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1); //becomes a child


const box2 = document.getElementById("box2");
//insertBefore(newElement,currentElemnt)
//document.body.insertBefore(newH1, box2);



//if they didnt have ids
const newH2 = document.createElement("h2");
newH2.textContent = "i like burger!";
newH2.id = "myH2";
newH2.style.color = "red";
newH2.style.textAlign = "center"
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH2, boxes[3]);

// remove html element
//document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);
//document.getElementById("box4").removeChild(newH2);