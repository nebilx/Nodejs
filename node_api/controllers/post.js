const Post = require('../models/post')
  

  exports.getposts = (req, res) => {
  //  res.send("hello world from node js updated ");

    //json is like object 
    // res.json({
    //   posts:[
    //     {tittle:'first post'},
    //     {tittle:'second post'}
    //   ]
    // });

    //get data from mongo db 
    const posts = Post.find()
    .then(posts => {
    //  res.status(200).json({posts:posts});
      res.json({posts});
    }).catch(err => consule.log(err));
  };



  // when route comes and give it to another responsibility we use controllers 
  

  exports.createpost = (req,res) => {
     const post =  new Post(req.body)
    console.log("creating post:", post )
  
    //res.send(post);

    // post.save((err, result) => {
    //   // if(err){
    //   //   return res.status(400).json({
    //   //     error: err
    //   //   })
    //   // }

    //   res.status(200).json({
    //     post : result
    //   });
    // });
    post.save()
    .then(result => {
     // res.save(200).json({
      res.json({
        post:result
      });
    });
  };