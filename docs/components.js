//componentes reutilizables para la documentación
module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"name of the task",
                        example:"Do the laundry"
                    },
                    completed:{
                        type:'boolean',
                        description:"If realized true , else false",
                        example:"true"
                    },
  
                }
            }
        }
    }
}



//este apartado va aquí???
module.exports = {
    components:{
        schemas:{
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },
        }
    }
}

