#! /usr/bin/env node

import yargs from 'yargs';

yargs
  .commandDir('./cmds')
  .demandCommand()
  .strict()
  .version()
  .help()
  .argv;
