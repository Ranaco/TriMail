// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract UserSBT is Ownable, Pausable, ERC721URIStorage{


    struct TokenData {
        uint256 id;
        string name;
        string ipfsHash;
        bool locked;
        address owner;
        uint256 createdAt;
    }

    mapping(address => TokenData) private tokenData;
    mapping(address => bool) private userRegistered;

    address public contractOwner;

    constructor() ERC721("Soul Bound Token", "UserSBT") {
      contractOwner = msg.sender;
    }

    event UserCreated(
        uint256 indexed id,
        string name,
        address owner,
        bool locked
    );

    uint256 private constant MAX_LIMIT = 1000;

    function mint(
        address to,
        string memory name,
        string memory tokenUri,
        uint256 id
    ) external whenNotPaused {
        require(userRegistered[to] != true, "User alreay registered");

        TokenData storage data = tokenData[to];
        data.name = name;
        data.id = id;
        data.owner = to;
        data.locked = false;
        data.createdAt = block.timestamp;

        _safeMint(to, id);
        _setTokenURI(id, tokenUri);
        
        userRegistered[to] = true;
        emit UserCreated(id, name,  to, false);
    }

    function userExists(address owner) external view whenNotPaused returns(bool) {
        return userRegistered[owner];
    }

    function updateMetadataHash(
        address owner,
        string memory name,
        string memory ipfsHash,
        uint256 id
    ) external whenNotPaused{
        require(_exists(id), "Token doesn't exist");
        TokenData storage _data = tokenData[owner];
        require(_data.locked == false, "Can't update. Token is locked");
        require(_data.owner == owner, "Not the correct owner");
        _data.name = name;
        _data.ipfsHash = ipfsHash;
    }

    function lockToken(address owner) external whenNotPaused {
        TokenData storage _data = tokenData[owner];
        require(_data.locked == false, "Already locked");
        _data.locked = true;
    }

    function unlockToken(address owner) external  whenNotPaused {
        TokenData storage _data = tokenData[owner];
        require(_data.locked == true, "Already unlocked");
        _data.locked = false;
    }

    function getTokenData(address owner)
        external
        view
        whenNotPaused
        returns (TokenData memory)
    {
      require(userRegistered[owner] == true, "UserSBT not registered!");
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
