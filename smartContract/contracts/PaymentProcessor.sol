// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "hardhat/console.sol";

contract PaymentProcessor is Ownable, AccessControl 
{
    IERC20 private token;
    uint256 private maxWithdrawalAmout;
    bool private isPaymentEnabled;
    bytes32 public constant PAYMENT_ROLE = keccak256("PAYMENT_ROLE");

    event PaymentDone(
        address player_deposit_address,
        uint256 amount,
        uint256 paymentId,
        uint256 timestamp
    );
    constructor(address initialOwnable,address _withdrawer) Ownable(initialOwnable) 
    {
        _grantRole(PAYMENT_ROLE,_withdrawer);
    }
    //Rút tiền từ hệ thống về ví của người dùng chỉ có thể thực hiện bởi người có quyền PAYMENT_ROLE
    function withdraw(uint256 _amount, address _to) external onlyRole(PAYMENT_ROLE)
    {
        require(isPaymentEnabled, "Payment is disabled");
        require(_amount <= maxWithdrawalAmout, "Amount exceeds the maximum withdrawal limit");
        require(token.balanceOf(address(this)) >= _amount, "Insufficient balance");
        token.transfer(_to, _amount);
    }
    //Rút toàn bộ số dư từ hệ thống về ví của người dùng chỉ có thể thực hiện bởi người có quyền PAYMENT_ROLE
    function withdrawAll(address _to) external onlyRole(PAYMENT_ROLE)
    {
        require(isPaymentEnabled, "Payment is disabled");
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "Insufficient balance");
        token.transfer(_to, balance);
    }
    //Nạp tiền vào hệ thống từ ví của người dùng
    function deposit(uint256 _amount, uint256 _paymentId) external
    {
        require(token.balanceOf(msg.sender) >= _amount, "Insufficient balance");
        SafeERC20.safeTransferFrom(token, msg.sender, address(this), _amount);
        emit PaymentDone(msg.sender, _amount, _paymentId, block.timestamp);
    }





    //Settings
    function setToken(IERC20 _token) public onlyOwner
    {
        token = _token;
    }   
    function getToken() public view returns(IERC20)
    {
        return token;
    }

    function setMaxWithdrawalAmout(uint256 _maxWithdrawalAmout) public onlyOwner
    {
        maxWithdrawalAmout = _maxWithdrawalAmout;
    }
    function getMaxWithdrawalAmout() public view returns(uint256)
    {
        return maxWithdrawalAmout;
    }
    function enablePayment() public onlyOwner
    {
        isPaymentEnabled = true;
    }
    function disablePayment() public onlyOwner
    {
        isPaymentEnabled = false;
    }
   
}