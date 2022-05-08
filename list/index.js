const fs = require('fs')

fs.readdir( process.cwd(), (err, filenames) => {
    if (err) {
        //console.log(err);
        //return;
        throw new Error(err);
    }
});

const lstat = (filename) => {
    return new Promise((resolve,reject) => {
        fs.lstat(filename, (err,stats) => {
            if (err) {
                reject (err);
            }

            resolve(stats);
        });
    });
}