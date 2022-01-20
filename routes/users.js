const express = require('express');
const router = express.Router();
const { findUserList, findUsersByDepartment } = require('../Db/usersList');

router.get('/:department?', async (req, res) => {
    try {
    let users;
    const {department}=req.query;
    if (department) users =await findUsersByDepartment(department);
    else users =  await findUserList();
     res.json(users);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
