// const IPFS = require('ipfs-http-client');
// const projectId = 'MyLandRegProject';
// const projectSecret ="mySecreatKey";
// const auth =
//     'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
// console.log(auth)
// const ipfs = IPFS.create({
//     host: 'ipfs.infura.io', port: 5001, protocol: 'https', headers: {authorization: auth,},})

// export default ipfs


// const IPFS = require('ipfs-http-client');
// const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

// export default ipfs


// const IPFS = require('ipfs-api')
// const ipfs = IPFS('ipfs.infura.io', '5001', {protocol: 'https'});

// export default ipfs

// import { create } from "ipfs-http-client";

// const ipfs = create('https://ipfs.infura.io:5001/api/v0');
// export default ipfs


// const IPFS = require('ipfs-api')
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

//run with local daemon

const IPFS = require('ipfs-api')
const ipfs = new IPFS({ host: 'localhost', port: 5001, protocol: 'http' })
// const ipfs = new ipfsApi('127.0.0.1', '5001', {protocol:'http'});

export default ipfs


// import { create } from 'ipfs-http-client'
// const ipfs = create()
// export default ipfs

// const IPFS = require('ipfs-core')
// const ipfs = IPFS.create()

// export default ipfs

// const IPFS = require('ipfs-api');
// const projectId = 'MyLandRegProject';
// const projectSecret ="mySecreatKey";
// const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', headers: {authorization: auth,}, });

// export default ipfs;