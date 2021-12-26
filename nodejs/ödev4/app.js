const fs = require('fs');

/* Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim. */
  
fs.writeFile('employees.json', '[{"name": "Employee 1 Name","salary": 2000}]', function (err) {
  if (err) throw err;
});


fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  const json = JSON.parse(data);
  const newEmployee = {name: "Employee 2 Name", salary: 3000}
  json.push(newEmployee)
  fs.writeFile("employees.json", JSON.stringify(json), function(err){
    if (err) throw err;
  });
})

setTimeout(() => {
  fs.unlink('employees.json', (err) => {
    if (err) console.log(err)
  })
}, 1000)

