// TODO: this file :)

const express = require("express");
const app = express();

const PORT = 3000;

const employees = require("./employees");

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
})

app.get("/employees/random", (req, res) => {
 const random = Math.floor(Math.random() * employees.length);
const randomEmployee = employees[random];
 res.json(randomEmployee.name);
})

app.get("/employees/:id", (req, res) => {
  const employee = employees.find((obj) => obj.id === +req.params.id);
  if(employee){
    res.send(employee.name);
  } else {
    res.send("Not an employee");
  }
}),


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
