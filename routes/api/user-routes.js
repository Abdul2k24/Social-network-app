const router = require('express').Router();
const {
    getAllUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
 } = require('../../controllers/user-controllers');

 router.route( "/" ).get(getAllUser).post(createUser);
 router.route( "/:id" ).get(getSingleUser).put(updateUser).delete(deleteUser);
 router.route( "/:id/friends/:friendId" ).post(addFriend).delete(removeFriend);


 module.exports = router;