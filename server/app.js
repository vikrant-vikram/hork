
const express=require("express");
const body= require("body-parser");
const mongoose=require("mongoose");
const Attendence = require("./models/attendence");
const Class = require("./models/class");
const Homework = require("./models/homework");
const Marks = require("./models/marks");
const Orgadmin = require("./models/orgadmin");
const Org = require("./models/organisation");
const Solution = require("./models/solution");
const Subject = require("./models/subjects");
const User = require("./models/users");
var cookieParser = require('cookie-parser');
var session = require('express-session');

todo=express();
let fs = require('fs');
const organisation = require("./models/organisation");
// const homework = require("./models/homework");
// const organisation = require("./models/organisation");
// const { info } = require("console");

todo.use(cookieParser());
// todo.use(session({secret: "Shh, its a secret!"}));
todo.use(require("express-session")(
{
    secret:"i don't have any",
    resave:false,
    saveUninitialized:false
}));

todo.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});

const port=process.env.PORT || 5555;
todo.use(body.urlencoded({extended:true}));
DBSERVER="mongodb+srv://abhishek:abhishek@cluster0.b3zab.mongodb.net/hork?retryWrites=true&w=majority"
mongoose.connect(DBSERVER, {useNewUrlParser: true,useUnifiedTopology: true});

//-----------------ROUT-------------------
//NOte:
// I havent make any backend validation yet
// all routs are defined in root


//working
todo.post("/register/user",function( req,res) {
    let clss=req.body.class;
    Class.findOne({_id:clss},function(err,data){
        if(err){
            res.send("ERROR:/REGISTER/USER")
            console.log(err)        
        }
        else if(data){
            User.findOne({contactno:req.body.contactno},function(err,found){
                if(err){
                    res.send("Error in findone in register page")
                }
                else if(found){
                    res.send("This contct no already have been used")
                }
                else{
                    const user={
                        name:req.body.name,
                        password:req.body.password,
                        contactno:req.body.contactno,
                        class:data,
                        organisation:data.organisation,
                        flag:"False"
                    }
                    User.create(user,function(err,user){
                        if(err){
                            console.log(err);
                            res.send("Error occured in the database");
                        }
                        else
                        {   console.log(user);
                            res.send("successfully registered");
                        }
                    });
                }
            })
        }
        else{
            res.send("Don't do it again.")
        }
    })  
});


//working
todo.post("/login/user",function( req,res) {
    var user=
    {
        contactno:req.body.contactno,
        password:req.body.password
    }
    console.log(user);
    User.findOne(user,function(err,user)
    {
        if(err)
        {
            console.log(err);
            res.send("error occured in login");
        }
        else if(user)
        {
            console.log("congrates");
            console.log(user);
            req.session.userType="USER";
            req.session.user=user;
            res.send("successfully login")
        }
        else if(!user)
        {
            
            res.send("wrong username or password");
        }
    });
});

//working
todo.post("/user",isAdmin,function(req,res){
    User.find({organisation:req.session.user.organisation},function(err,data){
        if(err){
            console.log(err)
            res.send("ERROR:/USER")
        }
        else{
            res.send(data)
        }
    })
})

//working
todo.post("/subject",isUser,function(req,res){
    // IMP NOTE: We need to find that user have access to the class 
    let clss=req.session.user.class;
    Subject.find({class:clss},function(err,data){
        if(err){
            res.send("err in subject")
        }
        else{
            res.send(data)
        }
    })
})


//working
todo.post("/admin/subject",isAdmin,function(req,res){
    // IMP NOTE: We need to find that user have access to the class 
    let clss=req.body.class;
    Subject.find({class:clss},function(err,data){
        if(err){
            res.send("err in subject")
        }
        else{
            res.send(data)
        }
    })
})


//working
todo.post("/homework",isAny,function(req,res){
    let subject = req.body.subject;
    Homework.find({subject:subject},function(err,data){
        if(err){
            res.send("err in subject")
        }
        else{
            res.send(data)
        }
    })
})


//working
todo.post("/class",isAdmin,function(req,res){
    Class.find({organisation:req.session.user.organisation},function(err,data){
        if(err){
            res.send("ERROR:/CLASS")
        }
        else{
            res.send(data)
        }
    })
})



todo.post("/submit/homework",isUser,function(req,res){
    //IMP NOTE: didnt handeled how to manage image files
    //so many changes required in this rout till now
    let submit={
        image:"/images/"+name,
        details:req.body.details,
        user:req.session.user,
        flag:false,
        homework:req.body.homework
    }
    Homework.create(submit,function(err,data){
        if(err){
            res.send("ERROR:SUBMIT/HOMEWORK")
        }
        else{
            res.send(data)
        }
    })
})

//working
todo.post("/register/organisation",isManager,function(req,res){
    let org={
        name:req.body.name,
        location:req.body.location,
        info:req.body.info,
        flag:"TRUE"
    }
    // console.log(org)
    Org.findOne({name:req.body.name},function(err,data){
        if(err){
            console.log(err)
            res.send(err)
        }
        else if(data){
            res.send("already available")
        }
        else{
            Org.create(org,function(err,data){
                if(err){
                    console.log(err)
                    res.send("ERROR://REGISTER/ORGANISAATION")
                }
                else{
                    res.send("SUCCESS:SUBMITTED")
                }
            })
        }
    })
})

//working
todo.post("/organisation",isManager,function(req,res){
    Org.find({},function(err,data){
        if(err){
            res.send("ERROR:/ORGANISATION")
        }
        else{
            res.send(data)
        }
    })
})

//working
todo.post("/register/orgadmin",isManager,function(req,res){
    let valid={
        contactno:req.body.contactno
    }
    Orgadmin.findOne(valid,function(err,data){
        if(err){
            console.log(err)
            res.send("ERROR")
        }
        else if(data){
            console.log(data)
            res.send("CONTACT ALREADY IN USE")
        }
        else{
            let orgadmin={
                name:req.body.name,
                contactno:req.body.contactno,
                password:req.body.password,
                organisation:req.body.organisation,
                flag:"TRUE"
            }
            Orgadmin.create(orgadmin,function(err,data){
                if(err){
                    console.log(err)
                    res.send("ERROR://login/orgadmin")
                }
                else{
                    res.send("SUCCESS")
                }
            })
        }
    })
})

//working
todo.post("/orgadmin",isManager,function(req,res){
    Orgadmin.find({},function(err,data){
        if(err){
            res.send("ERROR:/ORGANISATION")
        }
        else{
            res.send(data)
        }
    })
})

//working
todo.post("/login/orgadmin",function(req,res){
    let orgadmin={
        contactno:req.body.contactno,
        password:req.body.password
    }
    Orgadmin.findOne(orgadmin,function(err,data){
        if(err){
            console.log(err)
            res.send("ERROR://login/orgadmin")
        }
        else if(data){
            req.session.userType="ADMIN"
            req.session.user=data
            res.send("SUCCESS")
        }
        else{
            res.send("LOGIN:UNSUCCESSFUL")
        }
    })

})

//working
todo.post("/create/class",isAdmin,function(req,res){
    let clss={
        name:req.body.name,
        organisation:req.session.user.organisation,
        created:req.session.user,
        flag:"TRUE",
    }
    Class.create(clss,function(err,data){
        if(err){
            console.log(err)
            res.send("ERROR")
        }
        else{
            res.send("SUCCESS")
        }
    })
})

//working
todo.post("/create/subject",isAdmin,function(req,res){
    let subject={
        name:req.body.name,
        class:req.body.class,
        created:req.session.user,
        flag:"TRUE"
    }
    Subject.create(subject,function(err,data){
        if(err){
            console.log(err)
            res.send("error")
        }
        else{
            res.send("SUCCESS:CREATED")
        }
    })
})

//working
todo.post("/create/homework",isAdmin,function(req,res){
    let homework=
    {
        heading:req.body.heading,
        details:req.body.details,
        image:"/images/",
        url:req.body.url,
        marks:req.body.marks,
        type:req.body.type,
        flag:"TRUE",
        subject:req.body.subject
    }
    Homework.create(homework,function(err,data){
        if(err){
            console.log(err)
            res.send("ERROR")
        }
        else{
            res.send("CREATED")
        }
    })
})

//working
todo.post("*", function (req, res) {
    res.send("error 404");
});




function isAdmin(req,res,next)
{
    if(req.session.userType=="ADMIN")
    {
        return next();
    }
    res.send("ERROR:LOGIN");
}

function isUser(req,res,next)
{
    if(req.session.userType=="USER")
    {
        return next();
    }
    res.send("ERROR:LOGIN");
}

function isAny(req,res,next)
{
    if(req.session.userType=="ADMIN" || req.session.userType=="USER")
    {
        return next();
    }
    res.send("ERROR:LOGIN");
}


function isManager(req,res,next){
    return next();
}


//-----------//ROUT-----------------



//-----------listener------------------------

todo.listen(port,function()
{
    console.log("server has been started on PORT no "+ port);
});





// var u={
//     username:req.body.username,
//     password:req.body.password
// }
// User.findOne(u,function (err,users) { 
//     if(err)
//     {
//         res.send("error");
//     }
//     else if(users)
//     {
//         res.send("user already exists with this details")
//     }

//     else{

//     user.create(u,function(err,data){
//         if(err){
//             console.log(err);
//             res.send("error");
//         }
           
//         else{
//             console.log(data);
//             res.send("DONE");
//         }
//     });
        
//     }
// });





// var auth={
//     email:req.body.email, 
//     password:req.body.password
// }
// console.log(auth);
// user.findOne(auth,function(err,users)
// {
//     if(err)
//     {
//         res.send("pls try after sometime");
//     }
//     else if(!users){
//         res.send("wrong password");
//     }
//     else
//      res.send("verified");


// });

function sheed(req,res)
{
    
    var items={
    name:req.body.name,
    image:req.body.image,
    Quantity:100,
    price:req.body.price

        }
        console.log(items+"from seedItem");
    Items.create(items,function(err,item)
    {
        if(err)
        {
            console.log(err);
            res.render("error")
        }
        else
        res.send("sent data")
    });
}

