import tl = require('azure-pipelines-task-lib/task');
const axios = require('axios').default;

const APMURL = "http://3.22.119.200:8000/webhook"
const SampleString = tl.getInput ('dxapmstring');

async function run() {
axios({
        method: 'post',
        url: APMURL,
        data: {
            title: SampleString
        }
    }).then(function(response: any) {
	console.log(response.data);
        tl.setResult(tl.TaskResult.Succeeded,"", true);
    }) 
        .catch(function(error: any) {

        console.log(error.response.data);
        tl.setResult(tl.TaskResult.Failed,"",true);

    });
}

run();
