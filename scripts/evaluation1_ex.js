const { ethers } = require("ethers");

const fs = require("fs");
const path = require("path");

// Load the ABI from the file
const abiPath = path.join(__dirname, "contractABI.json");
const contractABI = JSON.parse(fs.readFileSync(abiPath, "utf8"));

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
);

// Define the contract address you want to analyze
const contractAddress = "0xF03D9e90Ba5c429CdC83f011F37BC7005202F2C0"; // Replace with your contract address

const contractInterface = new ethers.utils.Interface(contractABI);

// Function to get all transactions related to a contract address
async function getContractTransactions(contractAddress) {
  // Get all transactions sent to the contract address
  const filterTo = {
    address: contractAddress,
    fromBlock: 6214184,
    toBlock: 6214225,
  };

  const transactionsTo = await provider.getLogs(filterTo);

  console.log("\nEvaluating contract transactions:");

  // Array to store transaction details
  const transactionsDetails = [];

  // Evaluate each transaction
  for (let i = 0; i < transactionsTo.length; i++) {
    const txHash = transactionsTo[i].transactionHash;

    const method = await getTransactionMethod(txHash);
    const gasCost = await getTransactionGasCost(txHash);
    const gasLimit = await getGasLimit(txHash);

    const endBlock = transactionsTo[i].blockNumber;
    const startBlock = endBlock - 10; // Adjust as needed

    const blockPeriod = await getBlockPeriod(startBlock, endBlock);

    const durationInSeconds = 60; // Replace with desired duration in seconds
    const throughput = await getThroughput(
      startBlock,
      endBlock,
      durationInSeconds
    );

    const transactionFee = await getTransactionFee(txHash);

    // Push details to the array
    transactionsDetails.push({
      "Transaction Hash": txHash,
      Method: method,
      "Gas Cost (Gwei)": gasCost,
      "Gas Limit": gasLimit,
      "Block Period (seconds)": blockPeriod,
      "Throughput (tx/s)": throughput,
      "Transaction Fee (Gwei)": transactionFee,
    });
  }

  // Display transactions details as a table
  console.table(transactionsDetails);
}

// Function to get the method of a transaction
async function getTransactionMethod(txHash) {
  try {
    const tx = await provider.getTransaction(txHash);
    const decodedData = contractInterface.parseTransaction({
      data: tx.data,
      value: tx.value,
    });
    return decodedData.name;
  } catch (error) {
    console.error(`Error fetching transaction method: ${error.message}`);
    return "Unknown";
  }
}

// Function to get the transaction gas cost
async function getTransactionGasCost(txHash) {
  try {
    const tx = await provider.getTransaction(txHash);
    const receipt = await provider.getTransactionReceipt(txHash);
    const gasUsed = receipt.gasUsed;
    const gasPrice = tx.gasPrice;
    const totalGasCost = gasUsed.mul(gasPrice);
    return ethers.utils.formatUnits(totalGasCost, "gwei");
  } catch (error) {
    console.error(`Error fetching transaction details: ${error.message}`);
    return "Error";
  }
}

// Function to get the gas limit of a transaction
async function getGasLimit(txHash) {
  try {
    const tx = await provider.getTransaction(txHash);
    return tx.gasLimit.toString();
  } catch (error) {
    console.error(`Error fetching gas limit: ${error.message}`);
    return "Error";
  }
}

// Function to calculate the average block period between two blocks
async function getBlockPeriod(startBlock, endBlock) {
  try {
    const startBlockDetails = await provider.getBlock(startBlock);
    const endBlockDetails = await provider.getBlock(endBlock);
    const startTime = startBlockDetails.timestamp;
    const endTime = endBlockDetails.timestamp;
    const blockPeriod = (endTime - startTime) / (endBlock - startBlock);
    return blockPeriod.toFixed(2);
  } catch (error) {
    console.error(`Error fetching block period: ${error.message}`);
    return "Error";
  }
}

// Function to calculate the throughput (transactions per second) over a given duration
async function getThroughput(startBlock, endBlock, durationInSeconds) {
  try {
    const blockCount = endBlock - startBlock + 1;
    const startBlockDetails = await provider.getBlock(startBlock);
    const endBlockDetails = await provider.getBlock(endBlock);
    const startTime = startBlockDetails.timestamp;
    const endTime = endBlockDetails.timestamp;
    const throughput = blockCount / (endTime - startTime);
    return throughput.toFixed(2);
  } catch (error) {
    console.error(`Error fetching throughput: ${error.message}`);
    return "Error";
  }
}

// Function to calculate the transaction fee
async function getTransactionFee(txHash) {
  try {
    const receipt = await provider.getTransactionReceipt(txHash);
    const gasUsed = receipt.gasUsed;
    const effectiveGasPrice = receipt.effectiveGasPrice;
    const transactionFee = gasUsed.mul(effectiveGasPrice);
    return ethers.utils.formatUnits(transactionFee, "gwei");
  } catch (error) {
    console.error(`Error fetching transaction fee: ${error.message}`);
    return "Error";
  }
}

// Main function to run the evaluation for the contract address
async function main() {
  await getContractTransactions(contractAddress);
}

// Run the main function
main();
