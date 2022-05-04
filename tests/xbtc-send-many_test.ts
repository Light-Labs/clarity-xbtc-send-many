import { FWPTestAgent1, FWPTestAgent3, FWPTestAgent4 } from './models/alex-tests-fixed-weight-pool.ts';
import { USDAToken, WBTCToken, ALEXToken } from './models/alex-tests-tokens.ts';

import { Clarinet, Tx, Chain, Account, types, assertEquals } from "./deps.ts";
import { mintXbtc, initXbtc, createPool } from "./utils.ts";


// Deployer Address Constants 
const wbtcAddress = "SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wbtc"
const wstxAddress = "SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx"
const alexAddress = "SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.age000-governance-token"
const fwpwstxwbtcAddress = "SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-wbtc-50-50-v1-01"
const multisigwstxwbtcAddress = "SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.multisig-fwp-wstx-wbtc-50-50-v1-01"

const ONE_8 = 100000000

const weightX = 0.5 * ONE_8;
const weightY = 0.5 * ONE_8;

const price = 50000;

const quantity = 10 * ONE_8;


Clarinet.test({
  name: "Ensure that user can send many with empty list",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!.address;
    const account1 = accounts.get("wallet_1")!.address;

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-xbtc-many",
        [types.list([])],
        account1
      ),
    ]);
    block.receipts[0].result.expectOk();
  },
});

Clarinet.test({
  name: "Ensure that user can send many with xbtc",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!.address;
    const account1 = accounts.get("wallet_1")!.address;

    initXbtc(chain, deployer);
    mintXbtc(chain, deployer, 2000, account1);

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-xbtc-many",
        [
          types.list([
            types.tuple({
              to: types.principal(deployer),
              "xbtc-in-sats": types.uint(1000),
              memo: "0x656565",
              "swap-to-ustx": types.bool(false),
              "min-dy": types.none(),
            }),
          ]),
        ],
        account1
      ),
    ]);
    block.receipts[0].result.expectOk();
  },
});

Clarinet.test({
  name: "Ensure that user can send many with stx and no min dy",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const account1 = accounts.get("wallet_1")!;

    initXbtc(chain, deployer.address);
    createPool(chain, deployer.address);

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-xbtc-many",
        [
          types.list([
            types.tuple({
              to: types.principal(deployer.address),
              "xbtc-in-sats": types.uint(1000),
              memo: "0x656565",
              "swap-to-ustx": types.bool(true),
              "min-dy": types.none(),
            }),
          ]),
        ],
        account1.address
      ),
    ]);
    
    block.receipts[0].result.expectOk();
  },
});

Clarinet.test({
  name: "Ensure that user can send many with stx and min dy",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const account1 = accounts.get("wallet_1")!;

    initXbtc(chain, deployer.address);
    createPool(chain, deployer.address);

    let wbtcToken = new WBTCToken(chain, deployer);
    let FWPTestSTX = new FWPTestAgent1(chain, deployer);
    // Deployer minting initial tokens
    let result = wbtcToken.mintFixed(deployer, deployer.address, 100000 * ONE_8);
    result.expectOk();
    result = wbtcToken.mintFixed(deployer, account1.address, 100000 * ONE_8);
    result.expectOk();
    
    // Deployer creating a pool, initial tokens injected to the pool
    result = FWPTestSTX.createPool(deployer, wstxAddress, wbtcAddress, weightX, weightY, fwpwstxwbtcAddress, multisigwstxwbtcAddress, quantity * price, quantity);
    result.expectOk().expectBool(true);

    result = FWPTestSTX.setMaxInRatio(deployer, 0.3e8);
    result.expectOk().expectBool(true);
    result = FWPTestSTX.setMaxOutRatio(deployer, 0.3e8);
    result.expectOk().expectBool(true);                              


    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-xbtc-many",
        [
          types.list([
            types.tuple({
              to: types.principal(deployer.address),
              "xbtc-in-sats": types.uint(1000),
              memo: "0x656565",
              "swap-to-ustx": types.bool(true),
              "min-dy": types.none(),
            }),
          ]),
        ],
        account1.address
      ),
    ]);
    block.receipts[0].result.expectOk();
  },
});
