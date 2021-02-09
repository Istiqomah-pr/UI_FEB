/*
* Use this file for functional testing of your smart contract.
* Fill out the arguments and return values for a function and
* use the CodeLens links above the transaction blocks to
* invoke/submit transactions.
* All transactions defined in your smart contract are used here
* to generate tests, including those functions that would
* normally only be used on instantiate and upgrade operations.
* This basic test file can also be used as the basis for building
* further functional tests to run as part of a continuous
* integration pipeline, or for debugging locally deployed smart
* contracts by invoking/submitting individual transactions.
*/
/*
* Generating this test file will also trigger an npm install
* in the smart contract project directory. This installs any
* package dependencies, including fabric-network, which are
* required for this test file to be run locally.
*/

import * as assert from 'assert';
import * as fabricNetwork from 'fabric-network';
import { SmartContractUtil } from './ts-smart-contract-util';

import * as os from 'os';
import * as path from 'path';

describe('MyAeroContract-demo-aero@0.0.5' , () => {

    const homedir: string = os.homedir();
    const walletPath: string = path.join(homedir, '.fabric-vscode', 'v2', 'environments', '1 Org local Fabric', 'wallets', 'Org1');
    const gateway: fabricNetwork.Gateway = new fabricNetwork.Gateway();
    let fabricWallet: fabricNetwork.Wallet;
    const identityName: string = 'Org1 Admin';
    let connectionProfile: any;

    before(async () => {
        connectionProfile = await SmartContractUtil.getConnectionProfile();
        fabricWallet = await fabricNetwork.Wallets.newFileSystemWallet(walletPath);
    });

    beforeEach(async () => {
        const discoveryAsLocalhost: boolean = SmartContractUtil.hasLocalhostURLs(connectionProfile);
        const discoveryEnabled: boolean = true;

        const options: fabricNetwork.GatewayOptions = {
            discovery: {
                asLocalhost: discoveryAsLocalhost,
                enabled: discoveryEnabled,
            },
            identity: identityName,
            wallet: fabricWallet,
        };

        await gateway.connect(connectionProfile, options);
    });

    afterEach(async () => {
        gateway.disconnect();
    });

    describe('myAeroExists', () => {
        it('should submit myAeroExists transaction', async () => {
            // TODO: populate transaction parameters
            const myAeroId: string = '001';
            const args: string[] = [ myAeroId];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'myAeroExists', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('createMyAero', () => {
        it('should submit createMyAero transaction', async () => {
            // TODO: populate transaction parameters
            const myAeroId: string = '006';
            const model: string = 'Airbus BelugaXL';
            const type: string = 'Freighter';
            const year: number = 2020;
            const args: string[] = [ myAeroId, model, type, year.toString()];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'createMyAero', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('readMyAero', () => {
        it('should submit readMyAero transaction', async () => {
            // TODO: populate transaction parameters
            const myAeroId: string = '006';
            const args: string[] = [ myAeroId];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'readMyAero', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('updateMyAero', () => {
        it('should submit updateMyAero transaction', async () => {
            // TODO: populate transaction parameters
            const myAeroId: string = '006';
            const model: string = 'Airbus Beluga';
            const type: string = 'Freighter';
            const year: number = 2020;
            const args: string[] = [ myAeroId, model, type, year.toString()];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'updateMyAero', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('deleteMyAero', () => {
        it('should submit deleteMyAero transaction', async () => {
            // TODO: populate transaction parameters
            const myAeroId: string = '006';
            const args: string[] = [ myAeroId];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'deleteMyAero', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('queryAllAeros', () => {
        it('should submit queryAllAeros transaction', async () => {
            // TODO: Update with parameters of transaction
            const args: string[] = [];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'queryAllAeros', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('queryByType', () => {
        it('should submit queryByType transaction', async () => {
            // TODO: populate transaction parameters
            const type: string = 'Freighter';
            const args: string[] = [ type];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'queryByType', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('queryMinYear', () => {
        it('should submit queryMinYear transaction', async () => {
            // TODO: populate transaction parameters
            const min: number = 2013;
            const size: number = 2;
            const bookmark: string = '';
            const args: string[] = [ min.toString(), size.toString(), bookmark];

            const response: Buffer = await SmartContractUtil.submitTransaction('MyAeroContract', 'queryMinYear', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

});
