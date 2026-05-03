// import express from "express";
import express from 'express'
import { mapOrder } from '~/utils/sorts.js'
import exitHook from "async-exit-hook"
import { CONNECT_DB,GET_DB,CLOSE_DB} from '~/config/mongodb'
import { env } from '~/config/environment'

console.log(env.MONGO_URI)

const app = express()

const hostname = 'localhost'
const port = 8017

const START_SERVICE = () =>{


    app.get('/', async (req, res) => {
        // Test Absolute import mapOrder
        // console.log(mapOrder(
        //   [ { id: 'id-1', name: 'One' },
        //     { id: 'id-2', name: 'Two' },
        //     { id: 'id-3', name: 'Three' },
        //     { id: 'id-4', name: 'Four' },
        //     { id: 'id-5', name: 'Five' } ],
        //   ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
        //   'id'
        // ))
        console.log(await GET_DB().listCollections().toArray())
        process.exit(0)
        res.end('<h1>Hello hello World!</h1><hr>')
      })
      
      app.listen(port, hostname, () => {
        // eslint-disable-next-line no-console
        console.log(`Hello trello , I am running  backend server at host: htpp:${ hostname }:${ port }`)
      })
      exitHook(() => {
        console.log('Disconnectiong db:');
        CLOSE_DB();
        console.log('Disconnected db:');
      })
      
}



(async() => {
    try{
        console.log("Connecting to MongoDB cloud Atlas");
        await CONNECT_DB()
        console.log("Connected to MongoDB cloud Atlas")
       
        START_SERVICE()
    } catch(error){
    console.error(error)
    process.exit(0)
}
})();




