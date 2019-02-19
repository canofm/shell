import fs from "fs";

const done = output => {
  process.stdout.write(output);
  process.stdout.write("\ncanoprompt > ");
};

const handler = inputs => {
  inputs = inputs.split(" ");
  const commandName = inputs.shift();
  fs.access(`src/commands/${commandName}.js`, fs.constants.F_OK, err => {
    let output;
    if (err) {
      output = `${commandName} does not exists`;
    } else {
      const Command = require(`./commands/${commandName}`).default;
      output = new Command().execute(inputs);
    }
    done(output);
  });
};

export default handler;
