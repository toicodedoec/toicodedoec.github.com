---
layout: post
title: Blockchain ABC Write your first smart contract using Eth
tags: [blockchain, smart-contract]
---

_Post này để tổng hợp những kiến thức cơ bản collect được về smart contract_
_Tham khảo source code từ https://erc20token.sonnguyen.ws/en/latest/ _

#### 1/ Ethereum smart contract
Có nhiều bên (???) cung cấp API và hỗ trợ deploy smart contract, tuy nhiên ở thời điểm hiện tại (11/2017) thì smart contract dựa trên nền (???) Ethereum (Ethereum Smart Contract) là phổ biến nhất, nghe nói là được support nhiều về mặt API và dễ làm (???).

#### 2/ Những tool cần phải setup trước khi code
a/ Để viết Eth smart contract thì dùng ngôn ngữ Solidity, do đó cần install compiler cho nó, là Solc:  
```npm install -g solc```  
b/ Để test cái smart contract của mình ở local thì cần giả lập 1 Eth node (là 1 node trong cái blockchain) ở local, __mình cần cái node này là để thông qua nó để read/write vào Eth blockchain__, giải thích rõ hơn 1 chút về ý này
> A node is a piece of software that connects to other nodes, thus participating in the formation of the network.

> This participation can be in many ways:
> - By keeping a full-copy of the blockchain
> - Keeping a shallow-copy of the blockchain
> - By verifying the transactions (Mining)

> All interaction with the blockchain (interaction with contracts, etc) needs to go via a node.

> Running a full node also enable to have a direct access to the Ethereum blockchain. If you don't have one, you will have to connect to another node, mainly using RPC connection. But you have to trust this node. Running your own removes your need to trust anyone except you and your hardware.

> Các loại node hiện tại
> - Full node is somebody connected to p2p network that verifies the blocks. I believe that all ethereum clients at this point are full nodes.
> - Lightweight nodes do not check or download the whole block-chain. See this: https://github.com/ethereum/wiki/wiki/Light-client-protocol
> - Miners are full nodes that, in addition, validate the new blocks by solving a crypto problem.

> In the simplest form, an Ethereum node is any device that is running the Ethereum protocol (blockchain). While nodes are typically running on desktops & laptops, development for mobile is on going. When we connect to the Ethereum protocol we are on the Ethereum blockchain network and are running a node. By running an Ethereum node we can connect to other nodes in the network, have direct access to the blockchain, and even do things like mine blocks, send transactions, and deploy smart contracts.

Hiện tại để start 1 private node nhanh nhất thì thấy mọi người kêu xài TestRPC:  
```npm install -g ethereumjs-testrpc```  

Đây là đoạn giới thiệu về testrpc trên github của nó
> testrpc is a Node.js based Ethereum client for testing and development. It uses ethereumjs to simulate full client behavior and make developing Ethereum applications much faster.  

Một cách giải thích khác về chức năng của nó
> It's a complete blockchain-in-memory that runs only on your development machine. It processes transactions instantly instead of waiting for the default block time -- so you can test that your code works quickly -- and it tells you immediately when your smart contracts run into errors.

Vậy có thể hiểu là __testrpc__ giúp giả lập 1 in-memory blockchain (có thể hiểu đơn giản blockchain là 1 database chứa thông tin về tất cả các transaction và history của từng transaction) ở local, nếu ko thì mình phải làm việc với 1 real blockchain (download toàn bộ thông tin của Eth blockchain về local của mình từ [other peers] (???)).

c/ Để build và deploy cái smart contract của mình thì cần dùng đến Truffle (https://truffle.readthedocs.io/en/beta/):   
```npm install -g truffle```

#### 3/ Giờ cần start cái in-memory blockchain lên  
Chạy command sau
```
testrpc
```
Khi start lên thì __testrpc__ sẽ tạo 10 fake accounts để chúng ta test, và mỗi fake account này có 100 fake Eth.  
```
Available Accounts
==================
(0) 0xe39ee414b12edd0e3c7a66739487241953d30556
(1) 0x8fe9095a6ea0e2c496f3bc1e4aab48406f67efdf
(2) 0xa97ae8de560f378401849fc42d21d6fb2489f9ee
(3) 0xe57fc3a949fda70e0123ff5d26f6959e7182556f
(4) 0xfa9e2463801bdb56a0bb9efa270cb4414e703be6
(5) 0x8e417fc4ed9c4697fe2e307d7f355239f1225132
(6) 0xa81dc5f136686b2823f0fc66a2617a2279185aa7
(7) 0xb8d7a5c348d7f4a211b1734ff0eac2e52a243891
(8) 0xcac042e502ecb511a6af56cd3318a4547c8e850b
(9) 0x471f341676b6903cb14bf6aa5743ff4b452a8d6d

Private Keys
==================
(0) 03cd10fd3b2881db63394c7a7f18f21798fe9b24df36713e3ed186462f9f1470
(1) 1d781d2ae47e2cce225e0d27fcf3fa5fb7c33d7e9c49e54fc9b836b85798acd1
(2) 0a967a8bc610f55ebbaaf52b7fd03d7b5835606277eca8d861cd767add181444
(3) 0665671f7851f3c83185d8cfa0df5ade2b796be5e1e7fb6c811998409740c942
(4) 5e0899a44fd2b3c6955177b3aea698c89e2c99b95910b202166b6ff02970c0d1
(5) 4f086069811fafc442a1c6bf8f248192637f919b7498c6cf727feef3fc867d28
(6) 57570a1b8770abfbef4dd5004ef9b6f2016dd1f390d9de68259d44a35e7035c6
(7) 5cf846f03837076d2d7a8d37ac959730e124af4e50974e3a71fc4796aac341d6
(8) 76b46dcb40178f657cfd813fe206604f2454f3b1ae5b4b7d9ceab8db9bb15b9d
(9) 9fbed3a18037560b34362964a96d6bce62eeda42c024b36d0bcbede3d84b79a3
```
Nôm na là bây giờ chúng ta có 10 cái "ví", mỗi cái "ví" có 100 Eth, mỗi cái "ví" được đại diện bởi address và key.  

Chúng ta sẽ dùng MetaMask (https://metamask.io/) để simulate GUI cho mấy cái ví này.
> MetaMask is more than just an Ether wallet. It's an Ethereum Browser, like Mist! It allows you all the same functions, features and ease of access from regular Ethereum Wallets, and it allows you to interact with Dapps and Smart Contracts, and all without the need to download the blockchain or install any software, you can just install it as a Google Chrome Extension!

Ok giờ chúng ta import thông tin mấy cái ví mà testrpc tạo ra vào trong MetaMask  

![1](/img/1.png)  

![2](/img/2.png)  

![3](/img/3.png)  

![4](/img/4.png)  

#### 4/ Giờ viết cái smart-contract bằng Solidity  
a/ Tạo 1 project mới với __Truffle__  
```
truffle init
```

Truffle sẽ tạo sẵn 1 số file cần thiết cho việc build & deploy, chúng ta sẽ remove tất cả các file .sol được tạo sẵn và tạo ra 1 file .sol mới tên là __IcoContract.sol__ trong folder __contracts__ cho cái contract chúng ta sắp viết.  

b/ Copy source code [ở đây](https://github.com/toicodedoec/eth-smart-contract/blob/master/contracts/IcoContract.sol) quăng vô :D  

c/ Một số giải thích sơ sơ về source code
* Source code này tuân theo format (interface) được quy định bởi ERC20 (nôm na là chuẩn ERC20), có thể đọc giải thích khá dễ hiểu [ở đây](https://theethereum.wiki/w/index.php/ERC20_Token_Standard)  

* Dựa vào standard token mình tạo ra token của riêng mình  

```
// ================= IcoToken  start =======================
contract IcoToken is SafeMath, StandardToken, Pausable {
  string public name;
  string public symbol;
  uint256 public decimals;
  string public version;
  address public icoContract;

  function IcoToken(
    string _name,
    string _symbol,
    uint256 _decimals,
    string _version
  )
  {
    name = _name;
    symbol = _symbol;
    decimals = _decimals;
    version = _version;
  }

  function transfer(address _to, uint _value) whenNotPaused returns (bool success) {
    return super.transfer(_to,_value);
  }

  function approve(address _spender, uint _value) whenNotPaused returns (bool success) {
    return super.approve(_spender,_value);
  }

  function balanceOf(address _owner) constant returns (uint balance) {
    return super.balanceOf(_owner);
  }

  function setIcoContract(address _icoContract) onlyOwner {
    if (_icoContract != address(0)) {
      icoContract = _icoContract;
    }
  }

  function sell(address _recipient, uint256 _value) whenNotPaused returns (bool success) {
      assert(_value > 0);
      require(msg.sender == icoContract);

      balances[_recipient] += _value;
      totalSupply += _value;

      Transfer(0x0, owner, _value);
      Transfer(owner, _recipient, _value);
      return true;
  }
}
```
* Sau đó tạo cái contract (nếu ko hiểu gì hết thì cứ ignore đi, tại vì giờ mình cũng hiểu lơ mơ thôi T.T)  

```
contract IcoContract is SafeMath, Pausable {
  IcoToken public ico;

  uint256 public tokenCreationCap;
  uint256 public totalSupply;

  address public ethFundDeposit;
  address public icoAddress;

  uint256 public fundingStartTime;
  uint256 public fundingEndTime;
  uint256 public minContribution;

  bool public isFinalized;
  uint256 public tokenExchangeRate;

  event LogCreateICO(address from, address to, uint256 val);

  function CreateICO(address to, uint256 val) internal returns (bool success) {
    LogCreateICO(0x0, to, val);
    return ico.sell(to, val);
  }

  function IcoContract(
    address _ethFundDeposit,
    address _icoAddress,
    uint256 _tokenCreationCap,
    uint256 _tokenExchangeRate,
    uint256 _fundingStartTime,
    uint256 _fundingEndTime,
    uint256 _minContribution
  )
  {
    ethFundDeposit = _ethFundDeposit;
    icoAddress = _icoAddress;
    tokenCreationCap = _tokenCreationCap;
    tokenExchangeRate = _tokenExchangeRate;
    fundingStartTime = _fundingStartTime;
    minContribution = _minContribution;
    fundingEndTime = _fundingEndTime;
    ico = IcoToken(icoAddress);
    isFinalized = false;
  }

  function () payable {    
    createTokens(msg.sender, msg.value);
  }

  /// @dev Accepts ether and creates new ICO tokens.
  function createTokens(address _beneficiary, uint256 _value) internal whenNotPaused {
    require (tokenCreationCap > totalSupply);
    require (now >= fundingStartTime);
    require (now <= fundingEndTime);
    require (_value >= minContribution);
    require (!isFinalized);

    uint256 tokens = safeMult(_value, tokenExchangeRate);
    uint256 checkedSupply = safeAdd(totalSupply, tokens);

    if (tokenCreationCap < checkedSupply) {        
      uint256 tokensToAllocate = safeSubtract(tokenCreationCap, totalSupply);
      uint256 tokensToRefund   = safeSubtract(tokens, tokensToAllocate);
      totalSupply = tokenCreationCap;
      uint256 etherToRefund = tokensToRefund / tokenExchangeRate;

      require(CreateICO(_beneficiary, tokensToAllocate));
      msg.sender.transfer(etherToRefund);
      ethFundDeposit.transfer(this.balance);
      return;
    }

    totalSupply = checkedSupply;

    require(CreateICO(_beneficiary, tokens)); 
    ethFundDeposit.transfer(this.balance);
  }

  /// @dev Ends the funding period and sends the ETH home
  function finalize() external onlyOwner {
    require (!isFinalized);
    // move to operational
    isFinalized = true;
    ethFundDeposit.transfer(this.balance);
  }
}
```  

d/ Code xong cái contract rồi, giờ cần deploy nó lên để test.  

Truffle hỗ trợ deploy, tuy nhiên chúng ta phải viết 1 đoạn script để define the scenario.  

Tạo ra 1 file __2_deploy.contracts.js__ trong folder __migrations__ và copy code bên dưới paste vào:  

```
const IcoToken = artifacts.require('IcoToken');
const IcoContract = artifacts.require('IcoContract');

module.exports = function(deployer) {
  deployer.deploy(
    IcoToken,
    'Test Token',
    'TST',
    '18',
    '1.0'
  ).then(() => {
    return deployer.deploy(
      IcoContract,
      '0xc3d2a1629d3990d8b9d9799c8675ec18c6f00247', // Your ETH Address
      IcoToken.address,
      '100000000000000000000000000', // 100000000 Token
      '1000', // 1 ETH = 1000 Token
      '1504051200', // 30/08/2017
      '1514592000', // 30/12/2017
      '100000000000000000' // 0.1 ETH
    ).then(() => {
      return IcoToken.deployed().then(function(instance) {
        return instance.setIcoContract(IcoContract.address);
      });
    });
  });
};
```  

Giữ nguyên các giá trị như trong code mẫu, ngoại trừ update lại address của ví của bạn (là nơi chứa token để bán cho mọi người).  

Chạy command: ```truffle deploy --reset```  

Nếu mọi thứ OK nó sẽ phải ra vầy  

```
$ truffle deploy --reset
Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0xc1e2311b96095645ed75313d305b2c39394c406a3cb755a12c780b90d090671a
  Migrations: 0xe5b199915f88c99bef00a2adbd65a1f03de8abf8
Saving successful migration to network...
  ... 0x699aed79bada23ed65419a6efb8ad26693dbf72a4e3ccfffd0fb9db51b3aa758
Saving artifacts...
Running migration: 2_deploy.contracts.js
  Replacing IcoToken...
  ... 0x1ba5a0c63ff6787567456331fc935c367f2a2352e0b34ad15be7eade47cfbea1
  IcoToken: 0x599f3566cd027953577ad8626979385fd8bc6d9b
  Replacing IcoContract...
  ... 0xa0f6bda7bad2febdb29a0dbaae02afcf5c819932eb540614eeebb00335a50817
  IcoContract: 0x51c5c33f6d10c66c258c4786daabef63b00227a9
  ... 0xf1e8653a01704de6d7b059dd2ddc11e8d3f04b2dd8da44f2e6b8d137abc19c0f
Saving successful migration to network...
  ... 0xe17d6a5296d157366e0c2eb60547220e6db6ed9980a1aa41013abcee83bba390
Saving artifacts...
```  

Như vậy chúng ta đã deploy thành công contract vào trong blockchain, console của __testrpc__ cũng update vừa có block được insert vào blockchain  

![2](/img/6.png)  

Có 2 thông tin quan trọng chúng ta cần lưu ý:  
1/ Address của IcoToken contract: 0x599f3566cd027953577ad8626979385fd8bc6d9b  
2/ Address của IcoContract contract: 0x51c5c33f6d10c66c258c4786daabef63b00227a9 => nhà đầu tư sẽ chuyển ETH vào ví này để nhận lại được token của bạn  

Nếu bạn gặp lỗi __Error: No network specified. Cannot determine current network.__ thì vào file __truffle.js__ update lại thông tin network trỏ về localhost:

```
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id      
    }
  }
};
```  

Nếu bạn gặp lỗi  __Error: Error: Exceeds block gas limit__ thì vào file __truffle.js__ update thêm value của __gas__ (là số tiền bạn sẵn sàng trả cho những miners người mà sẽ gắn cái block của bạn vào blockchain, giá trị này thường được quy định sẵn bởi network):

```
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 3000000
    }
  }
};
```  

e/ OK, giờ contract của chúng ta đã được deploy lên blockchain, giờ chúng ta sẽ dùng MetaMask để mua token thử

Ở bước trước chúng ta đã có địa chỉ của 2 ví trong tay  
1/ 1 ví IcoContract để nhà đầu tư chuyển ETH vào  
2/ 1 ví IcoToken chứa token  

Bây giờ chúng ta sẽ chuyển ETH vào ví IcoContract của để nhận về lượng token tương ứng  

Bạn gửi cho người đứng ra ICO 1 ETH  

![2](/img/7.png)  

Hệ thống ghi nhận lại transaction của bạn  

![2](/img/8.png)  

Bây giờ để kiểm tra thực sự chúng ta có nhận được token của thằng cha ICO kia chưa, nhập địa chỉ ví token vào để kiểm tra: 

![2](/img/9.png)  

![2](/img/10.png)  

#### 5/ Tóm tắt lại một chút
a/ Để có thể làm việc với Eth blockchain thì mình cần phải connect vô được nó, để connect vô được nó thì mình cần connect được vô Eth protocol, khi mình đã là 1 node ở trong blockchain rồi thì mình có connect vô các node khác cũng như có thể làm các việc: mine blocks, send transaction, deploy contract.  

(cont.)