import CommandInterface from "./CommandInterface";

class Echo extends CommandInterface {
  execute(inputs) {
    return inputs.join(" ");
  }
}

export default Echo;
