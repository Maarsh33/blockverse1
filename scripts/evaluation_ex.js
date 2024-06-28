const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
);

// Define an array of transaction hashes you want to evaluate
const transactionHashes = [
  "0xfa4f644f1b68f7b2ad72d94eab2b5963eec140bdfb4b98cbdd45b8b7afd49ae9",
  "0x6ce6003b26e63c467a47b9c91b4e4efd85079ca89253eabb63d5d69370bcdbde",
  // Add more transaction hashes as needed
];

// Function to get the transaction gas cost
async function getTransactionGasCost(txHash) {
  const tx = await provider.getTransaction(txHash);
  const receipt = await provider.getTransactionReceipt(txHash);
  const gasUsed = receipt.gasUsed;
  const gasPrice = tx.gasPrice;
  const totalGasCost = gasUsed.mul(gasPrice);

  console.log(`Transaction Hash: ${txHash}`);
  console.log(`Gas Used: ${gasUsed.toString()}`);
  console.log(`Gas Price: ${ethers.utils.formatUnits(gasPrice, "gwei")} Gwei`);
  console.log(`Total Gas Cost: ${ethers.utils.formatEther(totalGasCost)} ETH`);
  console.log("---------------------------");
}

// Function to get the gas limit of a transaction
async function getGasLimit(txHash) {
  const tx = await provider.getTransaction(txHash);
  const gasLimit = tx.gasLimit;

  console.log(`Transaction Hash: ${txHash}`);
  console.log(`Gas Limit: ${gasLimit.toString()}`);
  console.log("---------------------------");
}

// Function to calculate the average block period between two blocks
async function getBlockPeriod(startBlock, endBlock) {
  const startBlockDetails = await provider.getBlock(startBlock);
  const endBlockDetails = await provider.getBlock(endBlock);
  const startTime = startBlockDetails.timestamp;
  const endTime = endBlockDetails.timestamp;
  const blockPeriod = (endTime - startTime) / (endBlock - startBlock);

  console.log(`Block Period: ${blockPeriod} seconds`);
  console.log("---------------------------");
}

// Function to calculate the throughput (transactions per second) over a given duration
async function getThroughput(blockNumber, durationInSeconds) {
  const startBlock = await provider.getBlock(blockNumber);
  const endBlock = await provider.getBlock(
    blockNumber + Math.floor(durationInSeconds / 13)
  ); // Approx 13s per block on Sepolia

  const startTime = startBlock.timestamp;
  const endTime = endBlock.timestamp;
  const blockCount =
    blockNumber + Math.floor(durationInSeconds / 13) - blockNumber;

  const throughput = blockCount / (endTime - startTime);

  console.log(`Block Number: ${blockNumber}`);
  console.log(`Throughput: ${throughput.toFixed(2)} transactions per second`);
  console.log("---------------------------");
}

// Main function to run the evaluation for multiple transaction hashes
async function main() {
  console.log("Evaluating multiple transaction hashes:");
  console.log("---------------------------------------");

  for (let i = 0; i < transactionHashes.length; i++) {
    const txHash = transactionHashes[i];

    console.log(`Transaction Hash: ${txHash}`);
    console.log("\nGas Cost:");
    await getTransactionGasCost(txHash);

    console.log("\nGas Limit:");
    await getGasLimit(txHash);

    const startBlock = 6071872; // Replace with actual start block
    const endBlock = 6072293; // Replace with actual end block

    console.log("\nBlock Period:");
    await getBlockPeriod(startBlock, endBlock);

    const blockNumber = 6072293; // Replace with actual block number
    const durationInSeconds = 60; // Replace with desired duration in seconds

    console.log("\nThroughput1:");
    await getThroughput(blockNumber, durationInSeconds);

    const blockNumber1 = 6072293; // Replace with actual block number
    //const durationInSeconds = 60; // Replace with desired duration in seconds

    console.log("\nThroughput2:");
    await getThroughput(blockNumber1, durationInSeconds);
  }
}

// Run the main function
main();
