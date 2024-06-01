import zod from "zod"

const creattodo = zod.object({
    id : zod.string(),
    title : zod.string(),
    description : zod.string()
})

const updataTodo = zod.object({
    id : zod.string()
})

const sigin = zod.object({

    username : zod.string(),
    password : zod.string(),
})

export { creattodo,updataTodo ,sigin}