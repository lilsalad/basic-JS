const fs = require('fs')
const util = require('util');
const targetDir = process.argv[2] || process.cwd();
/*SEQUENTIAL PROMISES

const lstat = util.promisify(fs.lstat);
fs.readdir( process.cwd(), (err, filenames) => {
    if (err) {
        //console.log(err);
        //return;
        throw new Error(err);
    }
    for(let filename of filenames){
        try{
            const stats = await lstat(filename);
            console.log(filename, stats.isFile());
        }
        catch (err){
            console.log(err);
        }
    }
});
*/


//PARALLEL PROMISES
const {lstat} = fs.promises;

fs.readdir( targetDir, async(err, filenames) => {
    if (err) {
        //console.log(err);
        //return;
        throw new Error(err);
    }
    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for(let stats of allStats){
        const index = allStats.indexOf(stats);
        console.log(filenames[index]);
    }
});