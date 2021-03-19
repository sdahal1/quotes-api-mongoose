const Quote = require('../models/Quote.model')


// module.exports.findAllQuotes = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

module.exports.findAllQuotes = (req, res)=>{
    Quote.find()
        .then(allquotes => {
            console.log("TRYIING TO FIND ALL THE QUOTES")
            res.json({results: allquotes}) 
        })
        .catch(err => res.json({errors: err}))
}

module.exports.createOneQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newlyCreateQuote=> res.json({results: newlyCreateQuote}))
        .catch(err => res.json({errors:err }))
}


module.exports.findAQuote = (req,res)=>{
   Quote.findOne({_id: req.params.quoteid})
        .then(oneQuote => res.json({results: oneQuote}))
        .catch(err => res.json({errors: err}))
}

module.exports.updateAQuote = (req,res)=>{
    Quote.findOneAndUpdate(
        {_id: req.params.quoteid}, 
        req.body ,
        {new:true})
        .then(updatedQuote => res.json({results: updatedQuote}))
        .catch(err => res.json({errors: err}))
}


module.exports.deleteQuote = (req,res)=>{
    Quote.deleteOne({_id: req.params.quoteid})
        .then(deletedResult => res.json({results: deletedResult})  )
        .catch(err => res.json({errors: err}))

}


// User.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }))






// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.findOneSingleUser => (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }


