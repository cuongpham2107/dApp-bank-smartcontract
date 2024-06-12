

import { expect } from "chai";
const { ethers } = require("hardhat");

describe("PaymentProcessor", function () {
  let PaymentProcessor;
  let paymentProcessor: any;
  let TokenMock: any;
  let tokenMock: any;
  let owner: any;
  let withdrawer: any;
  let addr1:any;
  let addr2:any;
  let addrs:any;
  


  beforeEach(async function () {
    
    [owner, withdrawer, addr1, addr2, ...addrs] = await ethers.getSigners();
    PaymentProcessor = await ethers.getContractFactory("PaymentProcessor");
    paymentProcessor = await PaymentProcessor.deploy(owner.address,withdrawer.address);

    TokenMock = await ethers.getContractFactory("USDC");
    tokenMock = await TokenMock.deploy(owner.address);
  });
  // Test the owner
  it("Should have the right owner", async function () {
    expect(await paymentProcessor.owner()).to.equal(owner.address);
  });
  // Test the PAYMENT_ROLE
  it("Should have PAYMENT_ROLE granted to the owner", async function () {
    const hasRole = await paymentProcessor.hasRole(
      await paymentProcessor.PAYMENT_ROLE(),
      withdrawer.address
    );
    expect(hasRole).to.be.true;
  });
  // Test the mock token
  it("should set token IERC20", async function () {
    const token = await paymentProcessor.setToken(tokenMock.address);
    expect(token).to.equal(tokenMock);
  });
  // Test deposit function
  it("Should deposit tokens from user", async function () {


    const tokenMock = await ethers.getContractAt("IERC20", "TOKEN_ADDRESS");

    const amount = ethers.utils.parseEther("1");

    await tokenMock.transfer(addr1.address, amount);

    await tokenMock.connect(addr1).approve(paymentProcessor.address, amount);

    await paymentProcessor.connect(addr1).deposit(amount, 1);

    const balance = await tokenMock.balanceOf(paymentProcessor.address);

    expect(balance).to.equal(amount);
  });

});
  
