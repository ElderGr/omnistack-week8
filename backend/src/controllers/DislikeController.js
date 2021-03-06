const Dev = require('../model/devs');

module.exports = {
    async store(req, res) {
        
        const { devId } = req.params;
        const { user } = req.headers;

        const logedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: "dev not exists "});
        }

        logedDev.dislikes.push(targetDev._id);

        await logedDev.save();

        return res.json(logedDev);
    }
}