const express=require('express');
const app=express();
const cors=require('cors');

//Third party middleware(CROSS ORIGIN RESOURCE SHARING)
app.use(cors());

//Inbuilt Middleware Used:
app.use(express.json());

//NOTE-> In this Model I am considering Data-1 as Name
//and Data-2 as an ID for identification of the Object

//Connection to DB :
require('./config/connection');

//Importing Controller Functions :
const getFn=require('./controllers/GET');
const postFn=require('./controllers/POST');
const putFn=require('./controllers/PUT');
const deleteFn=require('./controllers/DELETE');

//Making Options for CRUD :
//Read Operation :
app.get('/get',getFn);

//Post Operation :
app.post('/post/:datafromparams',postFn);

//PUT Operation :
app.put('/update/:id',putFn);

//DELETE Operation :
app.delete('/delete/:id',deleteFn);

const port=process.env.PORT||3001;
app.listen(port,()=>{console.log('Server is running on 3001 || PORT...')})