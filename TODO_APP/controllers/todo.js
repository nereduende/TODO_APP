const fs = require('fs');
const { nextTick } = require('process');



module.exports = {
    getAllTodos: function(req,res){
        const jsonString =  fs.readFileSync('./data/data.json');
        const jsonReaded = JSON.parse(jsonString);
        res.render('main-template', {
            title: 'Aplicación de gestión de TODOs',
            todoList: jsonReaded
          });
     
        
    },   
    addTodo: function(req,res){
        const jsonString =  fs.readFileSync('./data/data.json');
        const jsonReaded = JSON.parse(jsonString);
        const maxId = maxValueOfArray(jsonReaded,'id');
        const newTodo = {
            id: maxId+1,
            todo: req.body.description
        }
        jsonReaded.push(newTodo);
        fs.writeFileSync('./data/data.json', JSON.stringify(jsonReaded));
      
        res.render('main-template', {
            title: 'Aplicación de gestión de TODOs',
            todoList: jsonReaded
          });
        
    },
    delTodo: function(req,res,next){
        const jsonString =  fs.readFileSync('./data/data.json');
        const jsonReaded = JSON.parse(jsonString);
        const found = jsonReaded.find(element => element.id.toString() === req.body.id);
        const index = jsonReaded.indexOf(found);
        jsonReaded.splice(index,1);
        fs.writeFileSync('./data/data.json', JSON.stringify(jsonReaded));
        res.render('main-template', {
            title: 'Aplicación de gestión de TODOs',
            todoList: jsonReaded
          });

    }

}
function maxValueOfArray(array, property){
    let maxValue = 0;
    for(let i = 0; i<array.length; i++){
        const value = array[i][property];
        if(value>maxValue){
            maxValue = value;
        }
    }
    return maxValue;
}