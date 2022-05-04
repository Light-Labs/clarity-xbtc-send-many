import {
    Account,
    Chain,
    Clarinet,
    Tx,
    types,
  } from "../deps.ts";
  
  
  class ALEXToken {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.age000-governance-token", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.age000-governance-token", "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.age000-governance-token", "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
    
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.age000-governance-token", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
  
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.age000-governance-token", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { ALEXToken };
  
  class USDAToken {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-usda", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-usda", "get-balance-fixed", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    // Always need to called by deployer
    mint(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-usda", "mint", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-usda", "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-usda", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
  
    
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-usda", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { USDAToken };
  
  class FWP_WSTX_ALEX_5050 {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    getBalanceFixed(account: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-alex-50-50-v1-01", "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-alex-50-50-v1-01", "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
    
    transferFixed(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-alex-50-50-v1-01", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
  
    totalSupplyFixed() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-alex-50-50-v1-01", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { FWP_WSTX_ALEX_5050 };
  
  
  class WBTCToken {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin", "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    // Always need to called by deployer
    mint(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin", "mint", [
          types.uint(amount),
          types.principal(recipient)        
        ], "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"),
      ]);
      return block.receipts[0].result;
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin", "mint-tokens", [
          types.uint(amount),
          types.principal(recipient)        
        ], "SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR"),
      ]);
      return block.receipts[0].result;
    }
    
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
  
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { WBTCToken };
  
  class WBANToken {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-banana", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-banana", "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    // Always need to called by deployer
    mint(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-banana", "mint", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-banana", "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
    
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-banana", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
  
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-banana", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { WBANToken };
  
  class WSTXToken {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx", "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    // Always need to called by deployer
    mint(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx", "mint", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx", "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
    
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.token-wstx", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { WSTXToken };
  
  class FWP_WSTX_USDA_5050 {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-usda-50-50-v1-01", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wstx-usda-50-50-v1-01", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { FWP_WSTX_USDA_5050 };
  
  class FWP_ALEX_USDA {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-alex-usda", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-alex-usda", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { FWP_ALEX_USDA };
  class FWP_WBTC_USDA_5050 {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wbtc-usda-50-50", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.fwp-wbtc-usda-50-50", "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { FWP_WBTC_USDA_5050 };
  
  class YTP_YIELD_WBTC {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(expiry: number, wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.ytp-yield-wbtc", "get-balance-fixed", [
        types.uint(expiry), types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply(expiry: number) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.ytp-yield-wbtc", "get-total-supply-fixed", [
        types.uint(expiry)
      ], this.deployer.address);
    }
  }
  export { YTP_YIELD_WBTC };
  
  class YTP_YIELD_USDA {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(expiry: number, wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.ytp-yield-usda", "get-balance-fixed", [
        types.uint(expiry), types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply(expiry: number) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.ytp-yield-usda", "get-total-supply-fixed", [
        types.uint(expiry)
      ], this.deployer.address);
    }
  }
  export { YTP_YIELD_USDA };
  
  class KEY_USDA_WBTC {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(expiry: number, wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.key-usda-wbtc", "get-balance-fixed", [
        types.uint(expiry),
        types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply(expiry: number) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.key-usda-wbtc", "get-total-supply-fixed", [
        types.uint(expiry)
      ], this.deployer.address);
    }
  }
  export { KEY_USDA_WBTC };
  
  class KEY_WBTC_USDA {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(expiry: number, wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.key-wbtc-usda", "get-balance-fixed", [
        types.uint(expiry),
        types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply(expiry: number) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.key-wbtc-usda", "get-total-supply-fixed", [
        types.uint(expiry)
      ], this.deployer.address);
    }
  }
  export { KEY_WBTC_USDA };
  
  class YIELD_WBTC {
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(expiry: number, wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.yield-wbtc", "get-balance-fixed", [
        types.uint(expiry), types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply(expiry: number) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.yield-wbtc", "get-total-supply-fixed", [
        types.uint(expiry)
      ], this.deployer.address);
    }
    
    mintFixed(sender: Account, expiry: number, amount: number, recipient: string) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.yield-wbtc", "mint-fixed", [
          types.uint(expiry),
          types.uint(amount),
          types.principal(recipient)
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  }
  export { YIELD_WBTC };
  
  class ManyRecord {
    constructor(
      readonly to: Account,
      readonly amount: number
    ) {}
  }
  class ALEXLottery {
  
    chain: Chain;
    deployer: Account;
  
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
    
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    // Always need to called by deployer
    mint(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "mint", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
    
    totalSupply() {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "get-total-supply-fixed", [], this.deployer.address);
    }
  
    mintMany(sender: Account, recipients: Array<ManyRecord>) {
      let block = this.chain.mineBlock([
          Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.lottery-ido-alex", "mint-many", [
            types.list(recipients.map((record) => { 
              return types.tuple({ to: types.principal(record.to.address), amount: types.uint(record.amount) });
            }))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }    
  }
  export { ALEXLottery, ManyRecord };
  class YIELD_USDA {
    chain: Chain;
    deployer: Account;
    
    constructor(chain: Chain, deployer: Account) {
      this.chain = chain;
      this.deployer = deployer;
    }
  
    balanceOf(expiry: number, wallet: string) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.yield-usda", "get-balance-fixed", [
        types.uint(expiry), types.principal(wallet),
      ], this.deployer.address);
    }
    
    totalSupply(expiry: number) {
      return this.chain.callReadOnlyFn("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.yield-usda", "get-total-supply-fixed", [
        types.uint(expiry)
      ], this.deployer.address);
    }
    
    mintFixed(sender: Account, expiry: number, amount: number, recipient: string) {
      let block = this.chain.mineBlock([
        Tx.contractCall("SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.yield-usda", "mint-fixed", [
          types.uint(expiry),
          types.uint(amount),
          types.principal(recipient)
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
  }
  
  export { YIELD_USDA };
  
  class FungibleToken {
    chain: Chain;
    deployer: Account;
    token: string;
  
    constructor(chain: Chain, deployer: Account, token: string) {
      this.chain = chain;
      this.deployer = deployer;
      this.token = token;
    }
  
    balanceOf(wallet: string) {
      return this.chain.callReadOnlyFn(this.token, "get-balance-fixed", [
        types.principal(wallet),
      ], this.deployer.address);
    }
  
    getBalance(account: string) {
      return this.chain.callReadOnlyFn(this.token, "get-balance", [
        types.principal(account),
      ], this.deployer.address);
    }
  
    mintFixed(sender: Account, recipient: string, amount : number) {
      let block = this.chain.mineBlock([
        Tx.contractCall(this.token, "mint-fixed", [
          types.uint(amount),
          types.principal(recipient)        
        ], sender.address),
      ]);
      return block.receipts[0].result;
    }
    
    transferToken(sender: Account, amount: number, receiver: string, memo:ArrayBuffer) {
      let block = this.chain.mineBlock([
          Tx.contractCall(this.token, "transfer-fixed", [
            types.uint(amount),
            types.principal(sender.address),
            types.principal(receiver),
            types.some(types.buff(memo))
          ], sender.address),
        ]);
        return block.receipts[0].result;
    }
  
    totalSupply() {
      return this.chain.callReadOnlyFn(this.token, "get-total-supply-fixed", [], this.deployer.address);
    }
  }
  export { FungibleToken };
  