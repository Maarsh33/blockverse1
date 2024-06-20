const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
); // Sepolia RPC URL
const transactionHash = "your-transaction-hash-here"; // Replace with your transaction hash

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

async function getGasLimit(txHash) {
  const tx = await provider.getTransaction(txHash);
  const gasLimit = tx.gasLimit;

  console.log(`Gas Limit: ${gasLimit.toString()}`);
}

async function getBlockPeriod(startBlock, endBlock) {
  const startBlockDetails = await provider.getBlock(startBlock);
  const endBlockDetails = await provider.getBlock(endBlock);
  const startTime = startBlockDetails.timestamp;
  const endTime = endBlockDetails.timestamp;
  const blockPeriod = (endTime - startTime) / (endBlock - startBlock);

  console.log(`Block Period: ${blockPeriod} seconds`);
}

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

async function main() {
  console.log("Transaction Gas Cost:");
  await getTransactionGasCost(transactionHash);

  console.log("\nGas Limit:");
  await getGasLimit(transactionHash);

  const startBlock = 0; // Replace with actual start block
  const endBlock = 10; // Replace with actual end block

  console.log("\nBlock Period:");
  await getBlockPeriod(startBlock, endBlock);

  const blockNumber = 0; // Replace with actual block number
  const durationInSeconds = 60; // Replace with desired duration in seconds

  console.log("\nThroughput:");
  await getThroughput(blockNumber, durationInSeconds);
}

main();
