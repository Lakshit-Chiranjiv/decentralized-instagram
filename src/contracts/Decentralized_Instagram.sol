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

    function uploadPost(string memory _postHash,string memory _caption) public{
        require(bytes(_postHash).length > 0,"Post Hash not provided");
        require(bytes(_caption).length > 0,"Caption not given");
        require(msg.sender != address(0),"Not a valid user address");
        postCount++;
        Posts[postCount] = Post(postCount,_postHash,_caption,0,0,payable(msg.sender));
        UserAddresses[msg.sender].postHashesIds.push(postCount);
    }

    receive () external payable{}

    function tipPost(uint _postId) external payable{
        require(msg.sender.balance >= 1 ether,"You don't have enough balance to tip");
        tipPostConfigurations(_postId);
    }

    function tipPostConfigurations(uint _postId) public payable{
        require(_postId > 0 && _postId <= postCount,"Post Id not in range");
        Post memory tempPost = Posts[_postId];
        address payable tipReceiver = payable(tempPost.postUser);
        uint tipTransferAmount = 1 ether;
        tipReceiver.transfer(tipTransferAmount);
        tempPost.tipAmount += tipTransferAmount;
        Posts[_postId] = tempPost;
        UserAddresses[tipReceiver].tipsReceived += tipTransferAmount;
        UserAddresses[msg.sender].tipsGiven += tipTransferAmount;
    }

    function likePost(uint  _postId) public{
        require(_postId > 0 && _postId <= postCount,"Post Id not in range");
        Post memory tempPost = Posts[_postId];
        tempPost.likes++;
        Posts[_postId] = tempPost;
    }

    function dislikePost(uint  _postId) public{
        require(_postId > 0 && _postId <= postCount,"Post Id not in range");
        Post memory tempPost = Posts[_postId];
        tempPost.likes--;
        Posts[_postId] = tempPost;
    }

    function registerUser(string memory _username,string memory _avatarHash,string memory _userBio) public {
        require(bytes(_username).length > 0,"UserName not provided");
        require(UserNames[_username] == 0,"UserName already exists");
        require(UserAddresses[msg.sender].userId == 0,"This address already has an account");
        UserNames[_username] = 1;
        userCount++;
        Users[userCount] = User(userCount,payable(msg.sender),_username,_avatarHash,_userBio,0,0,new uint[](0));
        UserAddresses[msg.sender] = Users[userCount];
    }
}