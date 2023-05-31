const mongoose = require('mongoose')
import Todo from '../../../model/Todo'

async function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }
    // const id = req.query
    // console.log(id)
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/nextJS13CRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //Fetching the data
    // const todos = await Todo.findOne({_id: id})
    const todos = await Todo.find().sort({ createdAt: 'desc' });
      res.status(200).json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to retrieve notes' });
    } finally {
      mongoose.connection.close();
    }
  }
  
  export default handler;
  