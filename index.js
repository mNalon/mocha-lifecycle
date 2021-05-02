var assert = require('assert');

describe('parent scope', () => {
  before(() => {
    console.log('*parent scope*: before')
  })

  beforeEach(() => {
    console.log('*parent scope*: beforeEach')
  })

  it('parent it 1', () => {
    console.log('*parent scope*: it 1')
    assert(true)
  })


  it('parent it 2', () => {
    console.log('*parent scope*: it 2')
    assert(true)
  })

  describe('child scope', () => {
    before(() => {
      console.log('*child scope*: before')
    })
  
    beforeEach(() => {
      console.log('*child scope*: beforeEach')
    })

    it('child it 1', () => {
      console.log('*child scope*: it 2')
      assert(true)
    })


    it('child it 2', () => {
      console.log('*child scope*: it 2')
      assert(true)
    })

    describe('child ineer scope', () => {

      it('child ineer it 1', () => {
        console.log('*child ineer scope*: it 1')
        assert(true)
      })

    })

    afterEach(() => {
      console.log('*child scope*: afterEach')
    })
    
    after(() => {
      console.log('*child scope*: after')
    })
  })

  afterEach(() => {
    console.log('*parent scope*: afterEach')
  })
  
  after(() => {
    console.log('*parent scope*: after')
  })
})