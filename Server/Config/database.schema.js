const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},{
    timestamps:true
});

userModel.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
userModel.pre('save',async function(next){
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
const User = mongoose.model('User',userModel);
module.exports.User = User;

const chatModel = mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true 
        },
        isGroupChat:{
            type:Boolean,
            default:false
        },
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        latestMessage:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    },{
        timestamps:true,
    }
);
const Chat = mongoose.model("Chat",chatModel);
module.exports.Chat = Chat;

const messageModel = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content:{
        type:String,
        trim:true
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    }
},{
    timestamps:true
});

const Message = mongoose.model('Message',messageModel);
module.exports.Message = Message;