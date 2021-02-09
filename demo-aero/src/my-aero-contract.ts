/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';
import { MyAero } from './my-aero';

@Info({title: 'MyAeroContract', description: 'My Smart Contract' })
export class MyAeroContract extends Contract {

    @Transaction(false)
    @Returns('boolean')
    public async myAeroExists(ctx: Context, myAeroId: string): Promise<boolean> {
        const data: Uint8Array = await ctx.stub.getState(myAeroId);
        return (!!data && data.length > 0);
    }

    @Transaction()
    public async createMyAero(ctx: Context, myAeroId: string,model: string,type: string,year :number): Promise<void> {
        const exists: boolean = await this.myAeroExists(ctx, myAeroId);
        if (exists) {
            throw new Error(`The my aero ${myAeroId} already exists`);
        }
        const myAero: MyAero = new MyAero();
        myAero.model = model;
        myAero.type = type;
        myAero.year = year;
        const buffer: Buffer = Buffer.from(JSON.stringify(myAero));
        await ctx.stub.putState(myAeroId, buffer);
      //  const eventPayload: Buffer = Buffer.from(`Created Aero Asset ${myAeroId} (${value})`); 
      //  ctx.stub.setEvent('myEvent', eventPayload); 
    }

    @Transaction(false)
    @Returns('MyAero')
    public async readMyAero(ctx: Context, myAeroId: string): Promise<MyAero> {
        const exists: boolean = await this.myAeroExists(ctx, myAeroId);
        if (!exists) {
            throw new Error(`The my aero ${myAeroId} does not exist`);
        }
        const data: Uint8Array = await ctx.stub.getState(myAeroId);
        const myAero: MyAero = JSON.parse(data.toString()) as MyAero;
        return myAero;
    }

    @Transaction()
    public async updateMyAero(ctx: Context, myAeroId: string,model: string,type: string,year :number): Promise<void> {
        const exists: boolean = await this.myAeroExists(ctx, myAeroId);
        if (!exists) {
            throw new Error(`The my aero ${myAeroId} does not exist`);
        }
        const myAero: MyAero = new MyAero();
        myAero.model = model;
        myAero.type = type;
        myAero.year = year;
        const buffer: Buffer = Buffer.from(JSON.stringify(myAero));
        await ctx.stub.putState(myAeroId, buffer);
    }

    @Transaction()
    public async deleteMyAero(ctx: Context, myAeroId: string): Promise<void> {
        const exists: boolean = await this.myAeroExists(ctx, myAeroId);
        if (!exists) {
            throw new Error(`The my aero ${myAeroId} does not exist`);
        }
        await ctx.stub.deleteState(myAeroId);
    }

    @Transaction(false)
    public async queryAllAeros(ctx: Context): Promise<string> {
        const startKey = '000';
        const endKey = '999';
        const iterator = await ctx.stub.getStateByRange(startKey, endKey);
        const allResults = [];
        while (true) {
            const res = await iterator.next();
            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString());

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString());
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString();
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    @Transaction(false)
    public async queryByType(ctx: Context,type: string): Promise<string> {
        const query = {selector : {type}};
        const queryString =JSON.stringify(query);
        const iterator = await ctx.stub.getQueryResult(queryString);
        const allResults = [];
        while (true) {
            const res = await iterator.next();
            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString());

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString());
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString();
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    @Transaction(false)
    public async queryMinYear(ctx: Context,min: number, size:number,bookmark:string): Promise<string> {
        const query = {selector : {year:{$gte:min}}};
        const queryString =JSON.stringify(query);
        const {iterator,metadata} = await ctx.stub.getQueryResultWithPagination(queryString,size,bookmark);
        const allResults = [];
        while (true) {
            const res = await iterator.next();
            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString());

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString());
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString();
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

}
