/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context } from 'fabric-contract-api';
import { ChaincodeStub, ClientIdentity } from 'fabric-shim';
import { MyAeroContract } from '.';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import winston = require('winston');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext implements Context {
    public stub: sinon.SinonStubbedInstance<ChaincodeStub> = sinon.createStubInstance(ChaincodeStub);
    public clientIdentity: sinon.SinonStubbedInstance<ClientIdentity> = sinon.createStubInstance(ClientIdentity);
    public logger = {
        getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
        setLevel: sinon.stub(),
     };
}

describe('MyAeroContract', () => {

    let contract: MyAeroContract;
    let ctx: TestContext;

    beforeEach(() => {
        contract = new MyAeroContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"my aero 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"my aero 1002 value"}'));
    });

    describe('#myAeroExists', () => {

        it('should return true for a my aero', async () => {
            await contract.myAeroExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a my aero that does not exist', async () => {
            await contract.myAeroExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createMyAero', () => {

        it('should create a my aero', async () => {
            await contract.createMyAero(ctx, '1003', 'my aero 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"my aero 1003 value"}'));
        });

        it('should throw an error for a my aero that already exists', async () => {
            await contract.createMyAero(ctx, '1001', 'myvalue').should.be.rejectedWith(/The my aero 1001 already exists/);
        });

    });

    describe('#readMyAero', () => {

        it('should return a my aero', async () => {
            await contract.readMyAero(ctx, '1001').should.eventually.deep.equal({ value: 'my aero 1001 value' });
        });

        it('should throw an error for a my aero that does not exist', async () => {
            await contract.readMyAero(ctx, '1003').should.be.rejectedWith(/The my aero 1003 does not exist/);
        });

    });

    describe('#updateMyAero', () => {

        it('should update a my aero', async () => {
            await contract.updateMyAero(ctx, '1001', 'my aero 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"my aero 1001 new value"}'));
        });

        it('should throw an error for a my aero that does not exist', async () => {
            await contract.updateMyAero(ctx, '1003', 'my aero 1003 new value').should.be.rejectedWith(/The my aero 1003 does not exist/);
        });

    });

    describe('#deleteMyAero', () => {

        it('should delete a my aero', async () => {
            await contract.deleteMyAero(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a my aero that does not exist', async () => {
            await contract.deleteMyAero(ctx, '1003').should.be.rejectedWith(/The my aero 1003 does not exist/);
        });

    });

});
