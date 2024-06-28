const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
);

// Define the contract address you want to analyze
const contractAddress = "0xF03D9e90Ba5c429CdC83f011F37BC7005202F2C0"; // Replace with your contract address

// Function to get all transactions related to a contract address
async function getContractTransactions(contractAddress) {
  // Get the contract creation transaction (first transaction)
  //const creationTx = await provider.getTransaction(contractAddress);
  const creationTx = await provider.getTransaction(
    `0x3ab8d4d65ea4798a329f4fe527d979178f81c86d0df35c3caef69d93373b32f1`
  );
  console.log("Contract Creation Transaction:", creationTx);

  //   const creationBlockNumber = creationTx.blockNumber;
  //   console.log("creationBlockNumber:");
  //console.log(creationTx);

  // Get all transactions sent to or from the contract address
  const filterTo = {
    address: contractAddress,
    fromBlock: 5970245,
    toBlock: "latest",
  };

  const filterFrom = {
    address: contractAddress,
    fromBlock: 5970245,
    toBlock: "latest",
  };

  const transactionsTo = await provider.getLogs(filterTo);
  const transactionsFrom = await provider.getLogs(filterFrom);

  console.log("\nEvaluating contract transactions:");

  // Evaluate each transaction
  for (let i = 0; i < transactionsTo.length; i++) {
    const txHash = transactionsTo[i].transactionHash;

    console.log(`Transaction Hash (To Contract): ${txHash}`);
    console.log("\nGas Cost:");
    await getTransactionGasCost(txHash);

    console.log("\nGas Limit:");
    await getGasLimit(txHash);

    const endBlock = transactionsTo[i].blockNumber;
    const startBlock = endBlock - 10; // Adjust as needed

    console.log("\nBlock Period:");
    await getBlockPeriod(startBlock, endBlock);

    const durationInSeconds = 60; // Replace with desired duration in seconds

    console.log("\nThroughput:");
    await getThroughput(startBlock, endBlock, durationInSeconds);

    console.log("---------------------------");
  }

  for (let i = 0; i < transactionsFrom.length; i++) {
    const txHash = transactionsFrom[i].transactionHash;

    console.log(`Transaction Hash (From Contract): ${txHash}`);
    console.log("\nGas Cost:");
    await getTransactionGasCost(txHash);

    console.log("\nGas Limit:");
    await getGasLimit(txHash);

    const endBlock = transactionsFrom[i].blockNumber;
    const startBlock = endBlock - 10; // Adjust as needed

    console.log("\nBlock Period:");
    await getBlockPeriod(startBlock, endBlock);

    const durationInSeconds = 60; // Replace with desired duration in seconds

    console.log("\nThroughput:");
    await getThroughput(startBlock, endBlock, durationInSeconds);

    console.log("---------------------------");
  }
}

// Function to get the transaction gas cost
async function getTransactionGasCost(txHash) {
  try {
    const tx = await provider.getTransaction(txHash);
    if (!tx) {
      throw new Error(`Transaction not found for hash ${txHash}`);
    }
    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt) {
      throw new Error(`Receipt not found for transaction hash ${txHash}`);
    }
    const gasUsed = receipt.gasUsed;
    const gasPrice = tx.gasPrice;
    const totalGasCost = gasUsed.mul(gasPrice);

    console.log(`Gas Used: ${gasUsed.toString()}`);
    console.log(
      `Gas Price: ${ethers.utils.formatUnits(gasPrice, "gwei")} Gwei`
    );
    console.log(
      `Total Gas Cost: ${ethers.utils.formatEther(totalGasCost)} ETH`
    );
  } catch (error) {
    console.error(`Error fetching transaction details: ${error.message}`);
  }
}

// Function to get the gas limit of a transaction
async function getGasLimit(txHash) {
  try {
    const tx = await provider.getTransaction(txHash);
    if (!tx) {
      throw new Error(`Transaction not found for hash ${txHash}`);
    }
    const gasLimit = tx.gasLimit;

    console.log(`Gas Limit: ${gasLimit.toString()}`);
  } catch (error) {
    console.error(`Error fetching gas limit: ${error.message}`);
  }
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
async function getThroughput(startBlock, endBlock, durationInSeconds) {
  const blockCount = endBlock - startBlock + 1; // Number of blocks
  const startBlockDetails = await provider.getBlock(startBlock);
  const endBlockDetails = await provider.getBlock(endBlock);

  const startTime = startBlockDetails.timestamp;
  const endTime = endBlockDetails.timestamp;

  const throughput = blockCount / (endTime - startTime);

  console.log(`Throughput: ${throughput.toFixed(2)} transactions per second`);
}

// Main function to run the evaluation for the contract address
async function main() {
  await getContractTransactions(contractAddress);
}

// Run the main function
main();
