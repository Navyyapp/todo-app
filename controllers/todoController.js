import todoModel from '../models/todoModel.js'


export const getTodo = async (req,res) =>{
  const todoData=await todoModel.find()
  res.send(todoData)

}
export const saveTodo = async (req,res) =>{
  console.log("inside ",req.body)
    const {todo} = req.body

    const newTodo = new todoModel({todo})
  try{
    await newTodo.save()
  }catch(err){
    console.log(err)
  }
res.status(200).send({message:"successfully added"})


}
export const updateTodo = (req,res) =>{
    const {id} = req.params
    const {todo} = req.body

    todoModel.findByIdAndUpdate(id,{todo})
      .then(()=>{
        res.status(200).send({message:"updated successfully"})
      })
      .catch((err)=>{
        console.log("error in updating..",err)
      })
}
export const deleteTodo = (req,res) =>{
  const {id} = req.params
 

  todoModel.findByIdAndDelete(id)
    .then(()=>{
      res.status(200).send({message:"deleted successfully"})
    })
    .catch((err)=>{
      console.log("error in deleting..",err)
    })

}