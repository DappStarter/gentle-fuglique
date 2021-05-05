require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rebel stereo unique harvest merry flock gasp'; 
let testAccounts = [
"0x9e2e12cc82da986bae5b46ca2d905c8dc25e369fa67c1700ddd9d92e989ba452",
"0x36c06a7e23f9cb3533900bd82ebdabc624931ac98af56d5f59fa53f18b4dfff1",
"0x19f854a42e1ae87d647ef2d7e7e8c0755670f16c192a1eac1214be1f2ec0e1e7",
"0x7933732991cfb606e033d97ddea8469d2dbb84e5bca85bbff80bd90554b68abf",
"0xd840e0e00097a6f8dc6abe7095df3202bc48d4f59d697dc0596de23567d9aa2b",
"0xfd73aaa681bead4a9fe052aacbc9bea9cdabd9835fea447ba8f7e6f669620584",
"0x86e386d9b18a5c3c6ccfb8f4eff100baae430be8af47a8bdd1d99ff8ac578113",
"0xbde908a66487574065e3929b76a0fde557bcbd6bd21ff16fef3c9c58a009abab",
"0x967405380f472f940b77bb3a29d9b98775a6a439eb3e468e7f4aca0c4f1b045e",
"0xfa96eb3551717574656053ea1f02569a2def66791f6fe7a41d1432478dbff0b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
