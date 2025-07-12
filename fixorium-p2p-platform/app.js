const Blockchain = require('./blockchain/blockchain');
const payoutService = require('./services/payoutService');

console.log("--- Initializing FIXORIUM P2P Platform Simulation ---\n");

const FixoriumLog = new Blockchain();

// --- Simulate User Transactions and Fee Calculation ---
console.log("Processing transactions...");

// Transaction 1: Buy order of 15,000 PKR
let pkrAmount1 = 15000;
let fee1 = payoutService.calculateFee(pkrAmount1);
FixoriumLog.addTransaction({ type: 'BUY', pkrAmount: pkrAmount1, fee: fee1 });
console.log(`New Buy Order: ${pkrAmount1} PKR. Fee: ${fee1.toFixed(2)} PKR.`);

// Transaction 2: Sell order of 7,500 PKR
let pkrAmount2 = 7500;
let fee2 = payoutService.calculateFee(pkrAmount2);
FixoriumLog.addTransaction({ type: 'SELL', pkrAmount: pkrAmount2, fee: fee2 });
console.log(`New Sell Order: ${pkrAmount2} PKR. Fee: ${fee2.toFixed(2)} PKR.`);
console.log("\nAll transactions added to pending block.");

// --- Mine Block to Record Transactions Transparently ---
console.log("\nMining new block to validate and record transactions on the FIXORIUM log...");
FixoriumLog.minePendingTransactions();
console.log("Block successfully mined and added to the chain.\n");

console.log("--- Current FIXORIUM Transaction Log ---");
console.log(JSON.stringify(FixoriumLog.chain, null, 2));
console.log("--------------------------------------");

// --- Display Final Payout Information ---
payoutService.prepareManualPayout();
