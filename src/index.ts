#!/usr/bin/env node

import { program } from "commander"
import { version } from "../package.json"

program
    .version(version)
    .description("Command line interface for the command-ts library")
    .action((options) => {
        console.log(`This is the command-ts CLI version ${program.version()}`)
    })

program.parse(process.argv)
