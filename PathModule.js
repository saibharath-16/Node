let path=require("path");

const filePath="C:/Users/Sai Bharath/OneDrive/Desktop/Immensphere/Node/NodeBasics/text.txt";
// const basename=path.basename(filePath,'.txt');//.txt is an optional to remove extension from file
// console.log(basename);//to find last part of path i.e filename

const dirname=path.dirname(filePath)//to find directory name
// const newFilePath=path.join(dirname,"newText.txt");
// console.log(newFilePath);

const joinPath=path.join(dirname,"call-bind","test","index.js")//to ceate new path from different folder and files
// console.log(joinPath);

// const resolvePath=path.resolve('folder1', 'folder2', 'file.txt')
// const resolvePath1=path.resolve('folder1','folder2', '..', 'file.txt')
// console.log(resolvePath);

// const parsePath=path.parse(filePath);//to return object with path properties
// console.log(parsePath);

const formatPath=path.format({
    root:'c:/',
    dir:'c:/Users/Sai Bharath/OneDrive/Desktop/Immensphere/Node/NodeBasics',
    base:'text.txt',
    ext:'.txt',
    name:'text'
})//
console.log(formatPath);
