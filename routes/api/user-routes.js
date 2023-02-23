const router = require('express').Router();

const {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
 } = require('../../controllers/user-controller');

 router.route( "/" ).get(getAllUser).post(createUser);
 router.route( "/:id" ).get(getSingleUser).put(updateUser).delete(deleteUser);


 module.exports = router;