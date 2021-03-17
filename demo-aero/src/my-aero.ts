/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Object, Property } from 'fabric-contract-api';

@Object()
export class MyAero {

    @Property()
    public year: number;
    public model: string;
    public location :string;
    public amr_status : string;
    public amr_desc : string;
    public amr_type : string;

}
