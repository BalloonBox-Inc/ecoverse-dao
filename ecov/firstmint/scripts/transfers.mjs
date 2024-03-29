import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { config } from "dotenv";
config();

// import { Keypair } from "@solana/web3.js"
// import secret from "/Users/irenefabris/.config/solana/id.json" assert { type: "json" }
// // Read the Serect Key from local
// const WALLET = Keypair.fromSecretKey(new Uint8Array(secret))

// Connect to an SDK and sign transactions with a specific wallet
// const sdk = ThirdwebSDK.fromNetwork("devnet"); // read-only SDK
const sdk = ThirdwebSDK.fromPrivateKey("devnet", process.env.LIQUIDITY_POOL_PRIVATE_KEY); // read-write SDK

// Get the interface for your token program
const program = await sdk.getProgram(process.env.TOKEN_ADDRESS, "token");

// Log token stats
// const balance = await program.balance();
// const balOf = await program.balanceOf(process.env.RECEIVER_PUBKEY);
const supply = await program.totalSupply();
const metadata = await program.getMetadata();


// console.log("Balance = ", balance.displayValue);
// console.log("BalOf = ", balOf.displayValue);
console.log("Supply = ", supply.displayValue);
console.log("Metadata = ", metadata);

// Transfer some tokens
const to = process.env.RECEIVER_PUBKEY;
const amount = 30;
const tx = program.transfer(to, amount);