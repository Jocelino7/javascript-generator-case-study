import { createWriteStream } from "fs"

// async generator
async function* asyncGenerator(num) {
    for (let i = 0; i <= num; i++) {
        yield i;
    }

}
const writeStream = createWriteStream("output.txt", { flag: "a" });
for await (const value of asyncGenerator(9000000)) {
    writeStream.write(value.toString() + "\n")
}
