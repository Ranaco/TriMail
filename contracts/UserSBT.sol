// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract UserSBT is ERC721Enumerable, Ownable, Pausable {
    using Counters for Counters.Counter;


    struct TokenData {
        uint256 id;
        string name;
        string ipfsHash;
        bool locked;
        address owner;
        uint256 createdAt;
        uint256 updatedAt;
    }

    mapping(address => TokenData) private tokenData;
    mapping(address => bool) private userRegistered;

    address public contractOwner;

    constructor() ERC721("Soul Bound Token", "SBT") {
      contractOwner = msg.sender;
    }

    event UserCreated(
        uint256 indexed id,
        string name,
        address owner,
        bool locked
    );

    Counters.Counter private nextTokenId;
    uint256 private constant MAX_LIMIT = 1000;

    function mint(
        address to,
        string memory name,
        string memory ipfsHash
    ) external onlyOwner whenNotPaused returns(uint256 id){
        require(nextTokenId.current() < MAX_LIMIT, "Max supply reached");

        TokenData storage data = tokenData[to];
        data.name = name;
        data.ipfsHash = ipfsHash;
        data.id = nextTokenId.current();
        data.owner = to;
        data.locked = false;
        data.createdAt = block.timestamp;
        data.updatedAt = block.timestamp;

        _safeMint(to, nextTokenId.current());
        userRegistered[to] = true;
        emit UserCreated(nextTokenId.current(), name,  to, false);
        nextTokenId.increment();
        return data.id;
    }

    function userExists(address owner) external view whenNotPaused returns(bool) {
        return userRegistered[owner];
    }

    function updateMetadataHash(
        address owner,
        string memory name,
        string memory ipfsHash,
        uint256 id
    ) external onlyOwner whenNotPaused{
        require(_exists(id), "Token doesn't exist");
        TokenData storage _data = tokenData[owner];
        require(_data.locked == false, "Can't update. Token is locked");
        require(_data.owner == owner, "Not the correct owner");
        _data.name = name;
        _data.ipfsHash = ipfsHash;
        _data.updatedAt = block.timestamp;
    }

    function lockToken(address owner) external onlyOwner whenNotPaused {
        TokenData storage _data = tokenData[owner];
        require(_data.locked == false, "Already locked");
        _data.locked = true;
        _data.updatedAt = block.timestamp;
    }

    function unlockToken(address owner) external onlyOwner whenNotPaused {
        TokenData storage _data = tokenData[owner];
        require(_data.locked == true, "Already unlocked");
        _data.locked = false;
        _data.updatedAt = block.timestamp;
    }

    function getTokenData(address owner, uint256 id)
        external
        view
        onlyOwner
        whenNotPaused
        returns (TokenData memory)
    {
        require(_exists(id), "Token doesn't exist");
        TokenData memory _data = tokenData[owner];
        return _data;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}
