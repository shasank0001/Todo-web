import zod, { boolean } from "zod"

const creattodo = zod.object({
    id : zod.string(),
    title : zod.string(),
    description : zod.string(),
    
})

const reatodo = zod.object({
    id : zod.string()
})
const updatatodo = zod.object({
    id : zod.string(),
    todoid : zod.number()
})
const sigin = zod.object({

    username : zod.string(),
    password : zod.string()
})

export { creattodo,reatodo, updatatodo,sigin}