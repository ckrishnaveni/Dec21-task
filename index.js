let knowsHTML = prompt("Do you know HTML? (yes/no)").toLowerCase();
let knowsCSS = prompt("Do you know CSS? (yes/no)").toLowerCase();
let knowsBootstrap = prompt("Do you know Bootstrap? (yes/no)").toLowerCase();
let knowsJS = prompt("Do you know JavaScript? (yes/no)").toLowerCase();
let knowsReact = prompt("Do you know React? (yes/no)").toLowerCase();
let knowsNode = prompt("Do you know Node.js? (yes/no)").toLowerCase();
// Check the student's skill set and suggest a career path
if (knowsHTML === 'yes' && knowsCSS === 'yes' && knowsBootstrap === 'yes' && knowsJS === 'no' && knowsReact === 'no' && knowsNode === 'no') {
    alert("You should become a UI/UX Designer.");
} else if (knowsHTML === 'yes' && knowsCSS === 'yes' && knowsBootstrap === 'yes' && knowsJS === 'yes' && knowsReact === 'yes' && knowsNode === 'no') {
    alert("You should become a Frontend Developer.");
} else if (knowsHTML === 'yes' && knowsCSS === 'yes' && knowsBootstrap === 'yes' && knowsJS === 'yes' && knowsReact === 'no' && knowsNode === 'yes') {
    alert("You should become a Backend Developer.");
} else if (knowsHTML === 'yes' && knowsCSS === 'yes' && knowsBootstrap === 'yes' && knowsJS === 'yes' && knowsReact === 'yes' && knowsNode === 'yes') {
    alert("You should become a Fullstack Developer.");
}  else {
    alert("You should go and join 10000-coders.");
}