// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not extist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents📜";
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = "not extist!💩";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`caught!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();
