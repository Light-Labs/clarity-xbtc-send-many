import { Clarinet, Tx, Chain, Account, types, assertEquals } from "./deps.ts";

export function setupPool(chain: Chain, deployer: string) {
  let block = chain.mineBlock([]);
}

export function initXbtc(chain: Chain, deployer: string) {
  let block = chain.mineBlock([
    Tx.contractCall(
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin",
      "initialize",
      [
        types.ascii("Wrapped Bitcoin"),
        types.ascii("XBTC"),
        types.uint(8),
        types.principal("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"),
      ],
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"
    ),
    Tx.contractCall(
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin",
      "add-principal-to-role",
      [
        types.uint(1),
        types.principal("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"),
      ],
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"
    ),
  ]);

  block.receipts[0].result.expectOk();
}

export function mintXbtc(
  chain: Chain,
  deployer: string,
  amount: number,
  recipient: string
) {
  let block = chain.mineBlock([
    Tx.contractCall(
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin",
      "mint-tokens",
      [types.uint(amount), types.principal(recipient)],
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"
    ),
  ]);

  block.receipts[0].result.expectOk();
}


export function createPool(
  chain: Chain,
  deployer: string,
) {
  let block = chain.mineBlock([
    Tx.contractCall(
      "SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.executor-dao",
      "execute",
      [types.principal("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.agp006-wstx-wbtc-50-50")],
      "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"
    ),
  ]);

  block.receipts[0].result.expectOk();
}
