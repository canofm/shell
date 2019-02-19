import commandHandler from "./commandHandler";

process.stdout.write("canoprompt > ");

process.stdin.on("data", inputs => {
  inputs = inputs.toString().trim();
  commandHandler(inputs);
});
