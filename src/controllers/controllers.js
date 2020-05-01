//Crear Objeto
const controllers = {};

//Raíz Principal
controllers.index = (req, resp) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
      if(err){
        resp.json(err);
      }
      console.log(customers);
      resp.render('customer', {
        data: customers
      });
    });
  });
};

controllers.save = (req, resp) =>{
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO customer set ?', [data], (err, customer) =>{
      console.log(customer);
      resp.redirect('/');
    });
  });
};

controllers.delete = (req, resp) =>{
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM customer WHERE id= ?', [id], (err, customer) =>{
      resp.redirect('/');
    });
  });
};

//Update
controllers.update = (req, resp) =>{
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
      resp.render('customer_edit', {
        data: customer[0]
      });
    });
  });
};

controllers.newDate = (req, resp) =>{
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) =>{
    conn.query('UPDATE customer set ? WHERE id= ?', [newCustomer, id], (err, customer) => {
      resp.redirect('/');
    });
  });
};

//Export Controllers
module.exports = controllers;
