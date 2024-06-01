import zod from "zod"

const creattodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updataTodo = zod.object({
    id : zod.string()
})

export { creattodo,updataTodo}