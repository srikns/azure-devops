"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
const axios = require('axios').default;
const APMURL = "http://3.22.119.200:8000/webhook";
const SampleString = tl.getInput('dxapmstring');
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        axios({
            method: 'post',
            url: APMURL,
            data: {
                title: SampleString
            }
        }).then(function (response) {
            console.log(response.data);
            tl.setResult(tl.TaskResult.Succeeded, "", true);
        })
            .catch(function (error) {
            console.log(error.response.data);
            tl.setResult(tl.TaskResult.Failed, "", true);
        });
    });
}
run();
