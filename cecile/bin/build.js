module.exports = () => {
  const cp = require('child_process');
  const spawn = cp.spawn;
  const build = spawn('npm', ['run', 'cecile:build']);

  const chalk = require('chalk');

  build.stdout.on('data', data => {
    console.log(data.toString('utf8'));
  });

  build.stderr.on('data', data => {
    console.log(data);
  });

  build.on('close', code => {
    if (code !== 0) {
      return console.log(chalk.red('Compiler exited with non zero status'));
    }
    console.log(chalk.green('Compiler finished'));
  });
};
