//  importserver json

const jsonserver=require('json-server')


// importig cors(cross Orgin Resource Sharing)- used t connct front end to nodemon 

const cors=require('cors')


//create json server

const curdserver=jsonserver.create()

// json type data -js data -before request resolved
//middlewarw

 const middleware=jsonserver.defaults()


 // create a router

const router=jsonserver.router('cruddb.json') 

//  applying in server
curdserver.use(middleware)  //applying middlearw to server

curdserver.use(cors ())     // connect server and front-end     

curdserver.use(router)  // rounting from index to db.json




//creating port
const PORT=5000  

// assing port to sever
curdserver.listen(PORT,()=>{

    console.log(`json server started at port ${PORT}`);
})
