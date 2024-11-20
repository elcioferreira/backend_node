import express from 'express'
import { engine} from 'express-handlebars';
import mysql  from  'mysql2' ;

//Configuration of conexion
const conexion = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'My@816521',
   database: 'projeto'
});

//Conexion test
conexion.connect(function (error){
    if(error) throw error;
    console.log('Conexion Done !')
})

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','./views');

app.get('/',(req,res)=> {
res.render('home');

}

app.use(express.json())

 const users=[]

app.post('/users', (req, res) => {
    console.log(req);
  users.push(req.body)
    })


app.get('/users', (req, res) => {
res.json(users)

})

 

app.listen(3000);


/*
Criar nosssa API de usuários

- Criar usuarios
- Listar usuarios.
- Editar Usuarios.
- Deletar Usuarios.

*/