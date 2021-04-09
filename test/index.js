const test = require('tape')
const InputDataDecoder = require('../index')

test('decoder', t => {
  // https://etherscan.io/tx/0xa6f019f2fc916bd8df607f1c99148ebb06322999ff08bc88927fe8406acae1b2

  // https://etherscan.io/tx/0xc7add41f6ae5e4fe268f654709f450983510ab7da67812be608faf2133a90b5a

  // https://etherscan.io/tx/0x94fadf5f5c7805b8ceb8a13a0a7fbce06054ff08cdfdc2fd555a7902592aebe6

  // marketSellOrders call
  // https://etherscan.io/tx/0xc79ee30142e935453eabd57f45e01bb394bff78d05cdf8df97631b03ad6cc0cd

  // https://etherscan.io/tx/0xcb0c447659123c5faa2f1e5bc8ac69697688f437c92a8abb4b882bb33cbc661a

  // https://github.com/miguelmota/ethereum-input-data-decoder/issues/8
  t.test('256 address', t => {
    t.plan(2)
    const decoder = new InputDataDecoder(`${__dirname}/data/abi2.json`)

    const data = '0xa9059cbb85f1150654584d0192059454e9dc1532d9d9cf914926406a02370cea80cf32f600000000000000000000000000000000000000000000000000000000033dc10b'

    const result = decoder.decodeData(data)
    t.equal(result.inputs[0].toString(16), 'e9dc1532d9d9cf914926406a02370cea80cf32f6')
    t.equal(result.inputs[1].toString(10), '54378763')
  })

  // https://github.com/miguelmota/ethereum-input-data-decoder/issues/23

  // We found different behaviour for when WETH is used internally, so make sure to test for both cases
  // - Alexander @ Blocknative
})
