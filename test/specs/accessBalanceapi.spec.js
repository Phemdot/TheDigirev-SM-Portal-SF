const axios = require('axios');
const {expect} = require('chai');

describe('Check Account Balance', async ()=>{
    it('Check with valid API key', async ()=>{
        const response = await axios.post('https://sm.thedigirev.com/api/v1?key=noH0S14CARaoY2XxqwKmcPnYSGwTozBT&action=balance',
        /*{
            "action":"balance",
        },
        {
            headers:{
                'key':'noH0S14CARaoY2XxqwKmcPnYSGwTozBT'
            }
        }*/
        ).then(res => res.data)
        console.log(response);
        expect(response.status).equal("success");
        expect(response.currency).equal("USD");
        expect(response.balance).equal("0.8600")
        
    })

});