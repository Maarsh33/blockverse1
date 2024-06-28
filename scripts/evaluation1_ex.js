// Ensure the Ethers.js library is imported correctly
const { ethers } = require("ethers");

// Initialize the provider with the Sepolia RPC URL
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
);

// Define the transaction hash you want to evaluate
const transactionHash =
  "0xfa4f644f1b68f7b2ad72d94eab2b5963eec140bdfb4b98cbdd45b8b7afd49ae9"; // Replace with your transaction hash

// Function to get the transaction gas cost
async function getTransactionGasCost(txHash) {
  const tx = await provider.getTransaction(txHash);
  const receipt = await provider.getTransactionReceipt(txHash);
  const gasUsed = receipt.gasUsed;
  const gasPrice = tx.gasPrice;
  const totalGasCost = gasUsed.mul(gasPrice);

  console.log(`Gas Used: ${gasUsed.toString()}`);
  console.log(`Gas Price: ${ethers.utils.formatUnits(gasPrice, "gwei")} Gwei`);
  console.log(`Total Gas Cost: ${ethers.utils.formatEther(totalGasCost)} ETH`);
}

// Function to get the gas limit of a transaction
async function getGasLimit(txHash) {
  const tx = await provider.getTransaction(txHash);
  const gasLimit = tx.gasLimit;

  console.log(`Gas Limit: ${gasLimit.toString()}`);
}

// Function to calculate the average block period between two blocks
async function getBlockPeriod(startBlock, endBlock) {
  const startBlockDetails = await provider.getBlock(startBlock);
  const endBlockDetails = await provider.getBlock(endBlock);
  const startTime = startBlockDetails.timestamp;
  const endTime = endBlockDetails.timestamp;
  const blockPeriod = (endTime - startTime) / (endBlock - startBlock);

  console.log(`Block Period: ${blockPeriod} seconds`);
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

  console.log(`Throughput: ${throughput.toFixed(2)} transactions per second`);
}

// Main function to run the evaluation
async function main() {
  console.log("Transaction Gas Cost:");
  await getTransactionGasCost(transactionHash);

  console.log("\nGas Limit:");
  await getGasLimit(transactionHash);

  const startBlock = 0; // Replace with actual start block
  const endBlock = 10; // Replace with actual end block

  console.log("\nBlock Period:");
  await getBlockPeriod(startBlock, endBlock);

  const blockNumber = 6072293; // Replace with actual block number
  const durationInSeconds = 60; // Replace with desired duration in seconds

  console.log("\nThroughput:");
  await getThroughput(blockNumber, durationInSeconds);
}

// Run the main function
main();
