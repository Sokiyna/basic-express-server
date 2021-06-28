'use strict';
const validator = require('../src/middlewares/validator');
describe('validator',()=>{
    let consoleSpy;
    const req = {
        query:{ }
    };
    const res = {};
    const next = jest.fn();
    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
    })
    afterEach(()=>{
        consoleSpy.mockRestore();
    })
    it('logs output the name property if it exists',()=>{
        validator(req,res,next);
        req.query.name='jon';
        expect(consoleSpy).toHaveBeenCalled();
    })
  it('moves to the next middleware',()=>{
    validator(req,res,next);
    expect(next).toHaveBeenCalledWith();
  })
})