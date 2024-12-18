const mcache = require('memory-cache')

const cache = (duration) => {
    return (req,res,next) =>{
        const key = '_express_' + req.url
        const cached_data = mcache.get(key)
        if(cached_data){
            res.set('Cache-Status','cached')
            res.send(cached_data)
            return
        }
        else{
            
            res.sendResponse = res.send
            res.send = (body) =>{
                if(res.statusCode === 200){
                    res.set('Cache-Status','not- cached')
                    mcache.put(key,body,duration * 10000)
                }
                res.sendResponse(body)
            }
        }
        next()
    }
}

module.exports = cache