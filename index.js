const jsonserver=require('json-server')
const empServer=jsonserver.create()
const middleware=jsonserver.defaults()
const router=jsonserver.router('db.json')
const PORT=3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)
empServer.listen(PORT,()=>{
    console.log(`Server running at PORT:${PORT}`)
})