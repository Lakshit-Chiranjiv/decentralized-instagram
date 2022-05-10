// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Decentralized_Instagram{
    uint public postCount = 0;
    uint public userCount = 0;

    struct User{
        uint userId;
        address payable userAddress;
        string username;
        string avatarHash;
        string userBio;
        uint tipsReceived;
        uint tipsGiven;
        uint[] postHashesIds;
    }

    struct Post{
        uint postId;
        string postHash;
        string caption;
        uint likes;
        uint tipAmount;
        address payable postUser;
    }

    mapping(uint => User) public Users;
    mapping(address => User) public UserAddresses;
    mapping(string => uint) public UserNames;
    mapping(uint => Post) public Posts;
    
}