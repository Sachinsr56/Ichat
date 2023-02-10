const express=require('express');
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require('../controllers/chatControllers');
const { protect }=require('../middleware/authMiddleware')

const router=express.Router();
router.post('/',accessChat);
router.get('/',fetchChats);
router.post('/group',createGroupChat);
router.put('/rename',renameGroup);
router.put('/groupRemove',removeFromGroup);
router.route('/groupadd',addToGroup)



module.exports=router;