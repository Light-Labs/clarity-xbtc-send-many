import { Clarinet, Tx, Chain, Account, types, assertEquals } from "./deps.ts";
import { mintXbtc, initXbtc } from "./utils.ts";

Clarinet.test({
  name: "Ensure that user can send many with empty list",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!.address;
    const account1 = accounts.get("wallet_1")!.address;

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-many",
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
        "send-many",
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
    const deployer = accounts.get("deployer")!.address;
    const account1 = accounts.get("wallet_1")!.address;

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-many",
        [
          types.list([
            types.tuple({
              to: types.principal(deployer),
              "xbtc-in-sats": types.uint(1000),
              memo: "0x656565",
              "swap-to-ustx": types.bool(true),
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
  name: "Ensure that user can send many with stx and min dy",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!.address;
    const account1 = accounts.get("wallet_1")!.address;

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-many",
        [
          types.list([
            types.tuple({
              to: types.principal(deployer),
              "xbtc-in-sats": types.uint(1000),
              memo: "0x656565",
              "swap-to-ustx": types.bool(true),
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
