import { Clarinet, Tx, Chain, Account, types, assertEquals } from "./deps.ts";
import { setupNamespace } from "./utils.ts";
Clarinet.test({
  name: "Ensure that user can send many",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!.address;
    const account1 = accounts.get("wallet_1")!.address;

    setupPool(chain, deployer);

    let block = chain.mineBlock([
      Tx.contractCall(
        "xbtc-send-many",
        "send-many",
        [],
        account1
      ),
    ]);
    block.receipts[0].result.expectOk();
  },
});
