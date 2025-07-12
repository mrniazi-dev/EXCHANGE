// --- IMPORTANT NOTICE ---
// This script simulates fee collection for manual payout.
// It does not and cannot connect to or automatically transfer funds via Easypaisa.

const EASAIPASA_PAYOUT_ACCOUNT = "03107044833";
let accumulatedFees = 0;

class PayoutService {
    calculateFee(pkrAmount) {
        const fee = pkrAmount * 0.01;
        accumulatedFees += fee;
        return fee;
    }

    prepareManualPayout() {
        console.log("\n--- Easypaisa Payout Summary ---");
        if (accumulatedFees > 0) {
            console.log(`ACTION REQUIRED: Manually transfer ${accumulatedFees.toFixed(2)} PKR to Easypaisa account: ${EASAIPASA_PAYOUT_ACCOUNT}`);
        } else {
            console.log("No fees accumulated for payout.");
        }
        console.log("---------------------------------\n");
    }
}

module.exports = new PayoutService();
