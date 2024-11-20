import express from 'express'
import { engine} from 'express-handlebars';
import mysql  from  'mysql2' ;
// teste ssssdsds

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
    console.log('Conexion Done !') //.......
})

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','./views');


//Manipulação de dados via rotas
app.use(express.json());

//Rota Principal
app.get('/',(req,res)=> {
res.render('formulario');
res.end();
})

//Rota de Cadastro.
app.post('/cadastrar',function(req,res){
  console.log(req.body);
})

//ADicionar Bootstrap

app.use('/bootstrap',express.static('./node_modules/bootstrap/dist'));
//Adicionar css
app.use("/css",express.static('./css'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

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